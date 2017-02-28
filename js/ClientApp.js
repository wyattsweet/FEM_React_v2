import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
//        React.createElement(myTitle),
//        React.createElement(myTitle),
//        React.createElement(myTitle),
//        React.createElement(myTitle)

//        replace the above with convenient createFactory method
        MyTitleFactory({title: 'props bro', color: 'peru'}),
        MyTitleFactory({title: 'death to the semicolons', color: 'mediumaquqmarine'}),
        MyTitleFactory({title: 'blah blah', color: 'rebeccapurple'}),
        MyTitleFactory({title: 'foobaa', color: 'dodgerblue'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
