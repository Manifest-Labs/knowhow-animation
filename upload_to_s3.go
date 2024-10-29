package main

import (
	"context"
	"log"
	"os"
	"path/filepath"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Println("Error loading .env file")
	}

	awsCfg, err := config.LoadDefaultConfig(context.TODO(), config.WithRegion(os.Getenv("AWS_REGION")))
	if err != nil {
		log.Fatal("Unable to load AWS config, " + err.Error())
	}

	s3Client := s3.NewFromConfig(awsCfg)

	directories := []string{"app", "landing", "chromeExtension"}

	for _, directory := range directories {
		err := filepath.WalkDir(directory, func(path string, info os.DirEntry, err error) error {
			if err != nil {
				log.Printf("Failed to walk directory: %v", err)

				return err
			}

			if info.IsDir() {
				log.Printf("Skipping directory: %s", path)

				return nil
			}

			if filepath.Ext(path) != ".json" {
				log.Printf("Skipping file: %s as its not json", path)

				return nil
			}

			log.Printf("Uploading file: %s", path)

			file, err := os.Open(path)

			if err != nil {
				log.Printf("Failed to open file: %v", err)

				return err
			}

			_, err = s3Client.PutObject(context.TODO(), &s3.PutObjectInput{
				Bucket: aws.String(os.Getenv("S3_BUCKET")),
				Key:    aws.String(path),
				Body:   file,
			})

			if err != nil {
				log.Printf("Failed to upload file: %v", err)

				return err
			}

			log.Printf("Successfully uploaded file: %s", path)
			return nil
		})

		if err != nil {
			log.Fatalf("Failed to walk directory: %v", err)
		}
	}
}
