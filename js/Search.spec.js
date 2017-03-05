import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Search from './search'
import ShowCard from './ShowCard'
import preload from '../public/data.json'
// import renderer from 'react-test-renderer'

// BAREBONES WAY OF DOING SNAPSHOT TEST WITHOUT
// ENZYME

// test('Search snapshot test', () => {
//  const component = renderer.create(<Search />)
//  const tree = component.toJSON()
//  expect(tree).toMatchSnapshot()
// })

test('Search snapshot test', () => {
  const component = shallow(<Search />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

test('search should render a ShowCard for each show', () => {
  const component = shallow(<Search />)
  expect(component.find(ShowCard).length).toEqual(preload.shows.length)
})

test('Search should render correct amount of shows based on search', () => {
  const searchWord = 'house'
  const component = shallow(<Search />)
  component.find('input').simulate('change', {target: {value: searchWord}})
  const showCount = preload.shows.filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0).length

  expect(component.find(ShowCard).length).toEqual(showCount)
})

// in enzyme you can use renderer but it's much slower. useful if you need to interact with DOM apis because shallow render doesn't have any dom apis available.

// static rendering is even slower, uses cheerio.
