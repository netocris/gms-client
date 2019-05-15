# Glicose Monitoring System Client

A system for monitoring blood glucose levels

## Project dependencies

#### Bootstrap 4

    npm install bootstrap jquery popper.js font-awesome --save

    npm install @ng-bootstrap/ng-bootstrap --save

#### Firebase 6

    npm install @angular/fire firebase --save

#### Charts.js

    npm install chart.js --save

    npm install ng2-charts --save

## Configure Bootstrap

Add the folowing lines to angular.json

    "styles": [
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "node_modules/font-awesome/css/font-awesome.min.css",
        "src/styles.css"
    ],
    "scripts": [
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/popper.js/dist/umd/popper.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]

## run in a diferent port

    npm run start -- --port=4201

    npm run start:pt -- --port=4201

