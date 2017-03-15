import React from 'react'
import { connect } from 'react-redux'
import ShowCard from './ShowCard'
import Header from './Header'
const { arrayOf, shape, string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    })),

    searchTerm: string
  },

  render () {
    return (
      <div className='search'>
        {/* true is implied below on showSearch */}
        <Header showSearch />
        <div>
          {this.props.shows
            // Cool es6 one liners
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
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

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

// purely for testing purposes
export const Unwrapped = Search

export default connect(mapStateToProps)(Search)
