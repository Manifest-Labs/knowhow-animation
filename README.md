# knowhow-animation
## GENERAL
- If you need to preview the lottie files before using, you can:
    - Install the VS plugin which allows you to preview each file from VS: https://lottiefiles.com/plugins/visual-studio-code
    - Install the LottieFiles app on Windows and Mac which allows you to preview all lottie files from the finder: https://lottiefiles.com/desktop 

## FOLDER ORGANIZATION
This is the folder organization for the lottiefiles within the knowhow-animation GitHub project.
We are going to have three main folders and elements: default elements (like the index and node_modules), app and landing as follows:

- app → Contains animations, graphs and explanations used exclusively inside the app.
- landing → Contains animations, graphs and explanations used exclusively on the landing page.

Within the app folder we are going to have:

- Gradients → Contains gradients used around the project. We currently only have one gradient but this opens the possibility to have more and organize them in the future.
- Graphics → Contains graphics such as animated people.
- Icons → Contains icons such as loaders, carrots, typing and ellipsis.
- Dashboard → Table, processes and graph loaders that are generally used in dashboard settings.
- Logos → different animations that are done using the knowhow logo.

Each folder contains their own index.js file which includes the imports to be used in the different repositories (mobile, desktop and landing).
