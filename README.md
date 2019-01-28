# # webpack-starter-scss-js
Simple webpack configuration for static page development.
Modern JS, SCSS compiler and autoprefixer, Browser-sync.

Work in progress, feel free to participate


## Features
- JS (babel transpiler)
- SCSS (autoprefixer, cssnano)
- Browser-sync 
 
## Requirements
- Node.js, npm
- http-server (for standalone server, without browser-sync)

## Installation 
    git clone https://github.com/nasedkinpv/webpack-starter-scss-js.git
    npm install
    
## Start server
    npm run dev
    
## Build
WIP

### Run standalone http-server
    npm run server

## File structure:
### JavaScript
* /src/scripts/main.js
* /src/scripts/_yourScripts.js

#### _yourScripts.js content
    export function exampleFunction () {
    }

#### main.js content
    import {
        exampleFunction
    }
    from './_yourScripts.js';

* /src/styles/main.scss
* /src/styles/_yourStyles.scss

####  _yourStyles.scss content
    body { background: red }

#### main.scss content 
    @import 'yourStyles';
