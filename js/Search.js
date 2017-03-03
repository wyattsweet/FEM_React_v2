import React from 'react'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = React.createClass({
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
        <header>
          <h1>svideo</h1>
          <input type='text' placeholder='search' onChange={this.handleSearchTermChange} value={this.state.searchTerm} />
        </header>
        <div>
          {preload.shows

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
