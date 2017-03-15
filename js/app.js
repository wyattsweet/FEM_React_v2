
import React from 'react'
import { Match } from 'react-router'
// convenience method for plugging redux into React
import { Provider } from 'react-redux'
import store from './store'
import AsyncRoute from './AsyncRoute'
import preload from '../public/data.json'

// hacky way of detecting if you're in node
// global is the window of node

if (global) {
  global.System = { import () {} }
}

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Match
          exactly
          pattern='/'
          component={(props) => <AsyncRoute props={props}
            loadingPromise={System.import('./Landing')} />}
        />
        <Match
          pattern='/search'
          component={(props) => <AsyncRoute
            props={Object.assign({shows: preload.shows}, props)}
            loadingPromise={System.import('./search')} />}
        />
        <Match
          pattern='/details/:id'
          component={(props) => {
            const shows = preload.shows.filter((show) => props.params.id === show.imdbID)
            return <AsyncRoute
              props={Object.assign({show: shows[0]}, props)}
              loadingPromise={System.import('./Details')}
            />
          }} />
      </div>
    </Provider>
  )
}

export default App
