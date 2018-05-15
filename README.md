Crazy video game with the theme of the Olympic Games

![Home page](https://github.com/juliendasilva/Fun-Lympic/blob/master/assets/home.png)

(The project presentation is available here)[https://github.com/juliendasilva/Fun-Lympic/blob/master/Fun'Lympic_Presentation.pdf]

## Techno
Webpack
Phaser.js
Vue.js
Netlify
Heroku
Node.js

# Setup
You'll need to install a few things before you have a working copy of the project.

## 1. Install node.js and npm:

https://nodejs.org/en/


## 2. Install dependencies (optionally you can install [yarn](https://yarnpkg.com/)):

Navigate to the cloned repo's directory.

Run:

```npm install``` 

or if you chose yarn, just run ```yarn```

## 3. Run the development server:

Run:

```npm run dev```

This will run a server so you can run the game in a browser. It will also start a watch process, so you can change the source and the process will recompile and refresh the browser automatically.

To run the game, open your browser and enter http://localhost:3000 into the address bar.


## Build for deployment:

Run:

```npm run deploy```

This will optimize and minimize the compiled bundle.

## Deploy for cordova:
Make sure to uncomment the cordova.js file in the src/index.html and to update config.xml with your informations. (name/description...)

More informations about the cordova configuration:
https://cordova.apache.org/docs/en/latest/config_ref/

There is 3 platforms actually tested and supported : 
- browser
- ios
- android

First run (ios example):

```
npm run cordova
cordova platform add ios
cordova run ios
```

Update (ios example):

```
npm run cordova
cordova platform update ios
cordova run ios
```

This will optimize and minimize the compiled bundle.

## Credits
Big thanks to this great repo:

https://github.com/lean/phaser-es6-webpack

## Contributors

https://github.com/juliendasilva
https://github.com/Alexandre-cibot
https://github.com/Henka-nk
https://github.com/JrBour