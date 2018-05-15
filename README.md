# An OpenSocial Gadget Written In React [![Build Status](https://travis-ci.org/dodash/gadget-react.svg?branch=master)](https://travis-ci.org/dodash/gadget-react)
## Intro
This is an example project for creating an opensocial gadget for hosting in an opensocial container.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
For information on how to perform common tasks see the most recent version of the create-react-app guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Steps 
First install the necessary dependencies, this may take a few minutes.
```
npm install
```

Start a Development Server
```
npm start
```
You can now access the gadget from http://localhost:3000

To create a production build, run
```
npm run build
```
This will create a production build in the build directory. You can copy this into any web server. Read the full create-react-app directions above to learn about how to deal with relative paths.

## Differences From Create React App
The Webpack will package resources in a static directory and insert references to them where appropriate. This confuses the OpenSocial renderer. Until this issue is resolved, place image resources in public directory and reference them with full URLs. See App.js for an example.

## Adding to an Open Social Container (like [DevOps Dashboards](http://www.cccqcommunity.com/dashboard_beta.html))
To add this gadget to an open social container, specify the URL to the gadget.xml file served by this React application, e.g.
http://localhost:3000/gadget.xml
If you change the host/port, make sure you edit the gadget.xml and App.js file accordingly.
