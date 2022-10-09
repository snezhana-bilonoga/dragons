# Project info
This is an app that shows information on SpaceX's Dragon rockets.The user can register and log in. After that, a list of rockets is available to him.  For each rocket, we can see detailed information. We can also add rockets to favorites and remove accordingly. Also, the User can edit information about himself.

# Deployed application
Deployed application is available here: [Rocket app](https://rocket-1ceac.web.app/)

# CI/CD
Application is using capabilities provided by `Firebase` and `Github/Github Actions`.
Each time new code is merged to the `main` branch the `Github Action` integrated with `Firebase` is triggered to build and deploys a new version of the application to the [Rocket app](https://rocket-1ceac.web.app/).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
