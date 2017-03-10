import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setSearchTerm } from './actionCreators'
const { string, func, object } = React.PropTypes

const Landing = React.createClass({
  contextTypes: {
    router: object
  },

  propTypes: {
    searchTerm: string,
    dispatch: func
  },

  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  },

  handleSearchSubmit (event) {
    console.log('hi')
    event.preventDefault()
    // this is how you programatically navigate
    // with React router
    this.context.router.transitionTo('/search')
  },

  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
        </form>
        <Link to='/search'>or Browse All</Link>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Landing)
