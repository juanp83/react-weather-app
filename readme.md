# React Project Starter

Duplicate as a new repo, or build from scratch. Instructions below...


## Built-in commands

* Start dev server and load page
```
yarn start
```

* Build for production
```
yarn run build
```

* Initialize Firebase Project
```
yarn run firebase-init
```

* Deploy to firebase
```
yarn run deploy
```


## Duplicate

Create a new repo on github, then clone the template.

```
git clone --bare git@github.com:gooWee/react-template.git
```
```
git push --mirror [new repo]
```
```
cd..
```
```
git clone [new repo]
```


## Build from scratch

1. Make a new project folder and cd in

2. Run `yarn init`

3. Add React and ReactDOM
```
yarn add react react-dom
```

4. Create a file in root called `.gitignore`, and add the following:
```
node_modules
dist
.DS_store
```

5. Create an `app` folder inside root and add `index.css` and `index.js`

6. Create a `components` folder inside the `app` folder

7. Create an `App.js` file inside the `components` folder

8. Require React and React-DOM in `App.js`
```
var React = require('react');
var ReactDOM = require('react-dom');
```

9. Create an App component in `App.js`
```
class App extends React.Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}
```

10. Export App
```
module.exports = App;
```

11. Require React, React-DOM, App, and css in `index.js`
```
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
require('./index.css');
```

12. Render the component to the DOM.
```
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

13. Add some font control to `index.css`
```
body {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;
}
```

14. Add Webpack and Babel to your project.
```
yarn add --dev babel-core babel-loader babel-preset-env babel-preset-react css-loader style-loader html-webpack-plugin webpack webpack-dev-server
```

15. Create a `webpack.config.js` file in root, and add the config.
```
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = config;
```

16. Add babel presents to `package.json`
```
"babel": {
  "presets": ["env", "react"]
},
```

17. Create a `index.html` file in the app folder. Include html boilerplate and a div for the app.
```
<div id="app"></div>
```

18. Add the following scripts to `package.json`
```
"scripts": {
  "start": "webpack-dev-server --open",
  "build": "NODE_ENV='production' webpack -p",
  "firebase-init": "firebase login && firebase init",
  "deploy": "yarn run build && firebase deploy"
},
```

19. Add firebase tools
```
yarn add -dev firebase-tools
```
