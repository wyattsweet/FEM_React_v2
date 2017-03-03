# A Complete Intro to React

Welcome to a complete intro to React! The site actual workshop material for this repo can be found [here][gh-page]. On the master branch you will find the completed project. On the start branch you will find the barebones boilerplater of the project designed to help you get started.

## Contributing

Please contribute, file issues, and make PRs. More than anything I'm sure there are typos abounding.

## License

MIT

[gh-page]: http://btholt.github.io/complete-intro-to-react/

## Wyatt's Course Notes

Yarn - NPM Installs are not “deterministic”, meaning you can’t run it from any state and end up in the same state. Yarn lets you install dependencies in any order or way and you always end up with the same structure in the same way. Installs are much faster. Highly recommended for apps, Falls apart when building libraries.

`$ yarn — - help`
`$ yarn upgrade-interactive`


<br/>
## **React**

cycle.js is reactive not to be confused with React.

What happened to MVC on the front-end? 

MVC works well on the back-end? The first attempt to move mvc to the front-end was with Backbone. Kind of quickly falls apart because it gets blurry what should go where. Angular and Ember started shifting more towards UI concerns but still have problem of not knowing where it should go or when you have a bug and not knowing where it is. React throws out MVC and shoves all the concerns together but in very small pieces. 


<br/>
## **React and React-dom**

Separarte libraries so you can target different libraries using the base react library, react dom is the renderer for the dom, basically the glue layer between your react code and the browser.

createClass is a blueprint for a new type of element. Then you can render it out as many times as you like. 
createElement is one instance only of that element

components in React are nothing but functions, everything in React is a function call.

global “React” variable comes from adding the react.js script

global “ReactDOM” var comes from adding the react-don script

Every React component must have a render function and that function must return markup. Render method must be a pure function meaning it should not modify any state or do anything that has any lasting effect.


<br/>

No need for semicolons but need to use a lint tool to catch edge cases



**Props**

Props are read only properties that are passed down from parent to child


<br/>
## **Tooling**

* **Standard** – Linting tool. ESLint with a standard set of rules (wrapped ESLint). ESLint without any configuration so it enforces one set of rules. Prohibits you from using semicolons.
	* Project called semistandard which is the same set of rules but forces you to use semicolons. 
	* Run `$ standard` in the project directory to lint code. 
	* Run `$ standard --fix` to automatically have standard fix those errors for you.

* **Webpack** – We're using Webpack2. Highly recommended tool for new apps. Core concept is it takes all the modules you create and combines it into one file to make available to send down. 
	* It has loaders which allows you to do something with a file in between compilation. similar to browserify, rollup. 
	* compile code to public/bundle.js you'd run `$ webpack FILE1.js FILE2.js public/bundle.js`. 
	* To compile for production. minified version of React and doesn't include debugging tools `NODE_ENV=production webpack -p FILE1.js FILE2.js public/bundle.js`
	* `webpack --watch` watches and automatically builds anytime you save your file
	* If you have an npm build script running `webpack` you can say `npm run build -- --watch`

* **Babel** – Takes future JS (ES6) and compiles it to ES5. Started as that but has now become a platform for transforming one type of code into another type of code. **Everyone is using it in production**. Battle tested, everyone should use it, safe to use in production.
	* concept of a plugin and concept of a preset. Preset is just a group of plugins.
	* Need to create `.babelrc` file in root dir of project. To compile ES6 to ES5 it would look something like this 

```
{
  "presets": [
    "react",
    ["es2015", {"modules": false, "loose": true}]
  ]
}
```

`React` is for transforming JSX. `es2015` includes ES6 to ES5 transformation and `{"modules": false}` tells babel to not transform the es6 module imports because we want webpack2 to take care of it. We want Webpack to do it because webpack2 and rollup will do "treeshaking" which only includes code that's being run. Uglify strips out code that's not being run.

`loose: true` doesn't force Babel to adhere to every JS spec, so it cuts down on package size at the expense of not polyfilling for **every** potential edgecase, which you'll probably never hit. Loose only includes the fast polyfills and cuts down on bundle size a lot.

You wouldn't want to `es2015` in production. You'd only want to ship the individual ES6 plugins you're using.

```
{
  "plugins": [
	"specific es6 plugin"
  ]
}

```

* Now you can run `$ webpack --module-bind='js=babel' js/ClientApp.js public/bundle.js` the `--module-bind='js=babel` part now runs all js files through babel before compiling them using a loader.

## Progression of Tools

Babel first compiles ES6 to ES5, webpack compiles modules, and Uglify (included in Webpack) gets rid of all unused code.


## JSX

HTML inside of your JavaScript. It's OK because we're already writing JavaScript code to mimick markup, why not just write markup? 

Components you create must be uppercase such as `<MyTitle ... />`

If it's lower case it will litterally put that on the dom such as `<div>`

They did this because **web coomponents** are coming...

React you can use React.createClass or ES6 classes.

Can't return two siblings same way your can't return two elements in JavaScript like `return a, b`. It doesn't work in React neither does – 

```
return (
	<div>
	...
	</div>
	<div>
	...
	</div>	
)
```

## Webpack 

**CSS config**

```
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      }
```
`style-loader` doesn't need a config but `css-loader` does so we're passing an option. 

**style vs css loader**

If you include css loader you have to include the style loader. Styles loader will inject styles into bundle.js. Seperate CSS file and we're going to bundle CSS into bundle.js, so we're not going to include CSS. 

bad practice because JS is loading before CSS, but ok for workshop. NetFlix stylesheet is included seperately. `options: {url: false}` makes it so images are not inlined in bundle.js. Now CSS is imported like JS.


```
  devServer: {
    publicPath: '/public/'
  }
```

Identifies to webpack where the static directory is.


<br/>
## React Router V4

Still in Alpha at the time of course recording.

**Higher Order Component** 
Doesn't show the user anything, it only encapsulates behavior. This is what `<HashRouter>` and `<match>` is doing in out app. `HashRouter` is typically root component. 

`<Match exactly pattern='/' component={Landing} />` This line says anytime this pattern `/` is seen exactly in the URL load the Landing component. 

*Don't use devServer in production*

Great benefit of React is that Best practices in React are just JS best practices. Such as using .map in React, which transcends React because it's a JS function. Versus ng-repeat from Angular doesn't translate outside of Angular.

ES6 Template strings is string concatination – public/${variable}

A good place to break a component into another component is when your doing a lot of markup inside a map, it's a "code smell" and a good place to split it up into a new component.

`const { poster, title, uear, description } = this.props.show`

* ES6 feature called destructuring

Key error in React - React requires key so it doesn't need to blow up and rebuild components every time the state changes. Can be very expensive with deeply nested, complex components. 

## Proptypes
* Proptypes are not required but they are helpful because when somebody else comes along and wants to add ShowCard somewhere they can see it takes show with these properties.

Fine to leave in. Netflix cuts them out in production and React doesn't check them in production, but they're basically no bites and totally fine to leave in.

`shape` allows you to declare what all the elements inside the object will be.

## State
State is the enemy with all apps, meaning bugs are usually related to state. The only thing that can modify the state of a component is within the component itself. React uses one way data flow meaning data only flows down from parent to children and it never flows up.

* `event` in event handler events is a React synthetic dom event which is their imitation of their dom event, but the api is the same.
* The only way to change state is through the `setState` function.
* setState is a async function that schedules an update

## ES6
* Enchanced object literal syntax - instead of writing a function as

```JS
var getState = function () {

}

```
You can write

```JS
getState () {

}
```

It means the same thing.

## Testing

**Unit testing** - Jest, created by Facebook, built on Jasmine 2. Does snapshot tests, similar to git diff, will fail and show you when something changes.

```
import React from 'react'
import Search from './search'
import renderer from 'react-test-renderer'

test('Search snapshot test', () => {
  const component = renderer.create(<Search />)    
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

```
 
Personal opinion of Brian is to have search.spec.js and search.js within the same file.

Libray **Enzyme** library created at Airbnb, not officially blessed at the testing framework for React, but it's pretty much required if your testing React code. It's used to do a "shallow render" so if something changes in showCard it doesn't fail in Search.spec.

Important components and display components it's a good idea to write one.

**very cool sidenote** `$ npm t` corresponds to `$npm run test`

For integration tests you use Selenium. 

<br/>

<br/>

<br/>

<br/>
