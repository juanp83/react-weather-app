# React project checklist
## Fork this repo or follow these steps

* Make a new project folder and cd in

* Run `yarn init`

* ```
yarn add react react-dom
```

* Create a file in root called `.gitignore`, and add the following:
```
node_modules
dist
.DS_store
```

* Create an `app` folder inside root and add `index.css` and `index.js`

* Create a `components` folder inside the `app` folder

* Create an `App.js` file inside the `components` folder

* Require React and React-DOM in `App.js`
```
var React = require('react');
var ReactDOM = require('react-dom');
```

* Create an App component in `App.js`
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

* Export App
```
module.exports = App;
```

* Require React, React-DOM, App, and css in `index.js`
```
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
require('./index.css');
```

* Render the component to the DOM.
```
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

* Add some font control to index.css
```
body {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;
}
```

* Add Webpack and Babel to your project.
```
yarn add --dev babel-core babel-loader babel-preset-env babel-preset-react css-loader style-loader html-webpack-plugin webpack webpack-dev-server
```

* Create a `webpack.config.js` file in root, and add the config.
```
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};
```

* Add babel presents to `package.json`
```
"babel": {
  "presets": ["env", "react"]
},
```

* Create a `index.html` file in the app folder. Include html boilerplate and a div for the app.
```
<div id="app"></div>
```

* Add a webpack script to `package.json`
```
"scripts": {
  "start": "webpack-dev-server --open"
},
```
