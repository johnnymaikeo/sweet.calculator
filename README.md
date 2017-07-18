# Sweet Calculator

A simple, awesome, and fast on-browser calculator that doesn't replace your traditional Windows calc or MacOS calc. 

![sweet calculator](https://raw.githubusercontent.com/johnnymaikeo/sweet.calculator/master/sweet.calculator.png)

## How to Run

Sweet Calculator requires an HTTP server run, to quickly start we suggest a Node lightweight HTTP server.

```sh
$ npm install http-server -g
```

After installation completed, to run the application:
```sh
$ http-server build -p 3000
```

## Building Sweet Calculator

Building Sweet Calculator requires Gulp and it dependencies

```sh
$ npm install gulp-install --save-dev
$ npm install gulp-sass --save-dev
$ npm install gulp-clean-css --save-dev
$ npm install gulp-minify --save-dev 
$ npm install gulp-replace --save-dev 
$ npm install gulp-clean --save-dev 
$ npm install gulp-replace-name --save-dev
```

After installation run gulp command, build files will be created inside build folder
```sh
$ gulp
```

## Update project dependencies

To update dependecy libraries, such as Angular, run bower under src folder. All required libraries are listed under bower.json. 

```sh
$ bower update
```

## Know issues

Sweet Calculator is temperamental, however getting to know the most common issues can avoid some headache.

* It doesn't handle expressions without closing properly the parenthesis - evaluates `7(8` as `78`
* It can't handle multiple dots in a single number - `7..8` is acceptable

Any other issue, bug or donation contact [johnnymaikeo@gmail.com](mailto:johnnymaikeo@gmail.com).

## License
Sweet Calculator is available under GNU v3 license. See the [LICENSE](https://github.com/johnnymaikeo/sweet.calculator/blob/master/LICENSE.txt) file for more info.
