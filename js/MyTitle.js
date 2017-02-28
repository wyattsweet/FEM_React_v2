import React from 'react'
// ES6 Modules
// knows to pull in React from the React module

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

export default MyTitle
// ES6 modules
// exports the MyTitle variable anytime it's requested elsewhere
