import React from 'react'
import ShowCard from './ShowCard'
import Header from './Header'
const { arrayOf, shape, string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    }))
  },

  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})

// Below works, but should not be used. Want to leave it in just as
// a reminder that forceUpdate() exists. Integrating with other libraries
// would be the only time to use forceUpdate().

//    this.state.searchTerm = event.target.value
//    this.forceUpdate()
  },
  render () {
    return (
      <div className='search'>
        {/* true is implied below on showSearch */}
        <Header
          showSearch
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <div>
          {this.props.shows
            // Cool es6 one liners
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => {
              return (
                <ShowCard key={show.imdbID} {...show} />
            )
            })}
        </div>
      </div>
    )
  }
})

export default Search
