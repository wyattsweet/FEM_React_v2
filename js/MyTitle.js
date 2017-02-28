import React from 'react'
// ES6 Modules
// knows to pull in React from the React module

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style = { style }>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

export default MyTitle
