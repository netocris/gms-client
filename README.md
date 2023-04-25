# Glicose Monitoring System Client

A system for monitoring blood glucose levels

## Project dependencies

#### Bootstrap 4

    npm install jquery popper.js bootstrap font-awesome --save

    npm install @ng-bootstrap/ng-bootstrap --save

#### Firebase 6

    npm install @angular/fire firebase --save

#### Charts.js

    npm install chart.js --save

    npm install ng2-charts --save

### ngx-translate

    npm install @ngx-translate/core @ngx-translate/http-loader --save
    
## Configure Bootstrap

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

## Run in a different port witout or with locale

    ng serve --port=4201

    ng serve --configuration=pt --port=4201

## run storybook

    npm run storybook

## check available dependencies updates

    npm install -g npm-check-updates

    ncu

    ncu -u