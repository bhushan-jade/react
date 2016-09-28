# React POC.

##IDE (optional)
* https://nuclide.io/docs/editor/setup/#linux

## Prerequisites (Need to Have Atom already installed With Git too)

1. Node.js install `npm install nodejs`

##### Miscellenous : 
```sudo update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10 ```

2. NPM
	- `npm init` (in your application direcory)
		> Here You specify the required asked information else skip by pressing enter.
		> It will prompt
		> At end will genrate `package.json`  
3. Gulp
	- `npm install --save gulp gulp-connect gulp-open`
	- `npm install --save-dev gulp-connect@2.2.0` (optional)
		> Here `--save` wil add reference into package.json.
		> `gulp gulp-connect gulp-open` These are gulp packages

    - create `gulpfile.js` file has comments which describes the details.
    - run command `gulp` if any error it will show exception else it will start server.
4. Browserify 
    * `npm install --save browserify reactify vinyl-source-stream`
        * `browserify` bundles js   
        * `reactify` Transform React JSX to Js
        * `vinyl-source-stream` Use Conventional text Streams with gulp
5. Bootstrap, Jqyery, Gulp concat

    *`npm install --save bootstrap jquery gulp-concat`
        * `bootstrap`
        * `jquery`
        * `gulp-concat` concat files
    
6. ESLint => notifiy errors
    * `npm install --save gulp-eslint`
    * `npm install --save gulp-eslint@0.15.0` (optional)
    
7. React Core Libraries `npm install --save react@0.13.3 react-router@0.13.3 flux@2.0.3`
    
    



