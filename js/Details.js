import React from 'react'

const Details = React.createClass({
  render () {
    return (
      <div className='details'>
        <pre><code>
          {JSON.stringify(this.props, null, 4)}
        </code></pre>
      </div>
    )
  }
})

// stateless functional component
// const Details = () => {
//  return <h1>blahhhh</h1>
// }

export default Details
