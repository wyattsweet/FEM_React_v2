import reducers from './reducers'

test('@init', () => {
  let state
  state = reducers(undefined, {})
  expect(state).toEqual({searchTerm:'',omdbData:{}})
})

test('SET_SEARCH_TERM', () => {
  let state
  state = reducers({searchTerm:'',omdbData:{}}, {type:'SET_SEARCH_TERM',searchTerm:'house'})
  expect(state).toEqual({searchTerm:'house',omdbData:{}})
})

test('reducers', () => {
  let state
  state = reducers({searchTerm:'',omdbData:{}}, {type:'ADD_OMDB_DATA',imdbID:'tt4061080',omdbData:{Title:'Love',Year:'2016–',Rated:'TV-MA',Released:'19 Feb 2016',Runtime:'50 min',Genre:'Comedy, Drama, Romance',Director:'N/A',Writer:'Judd Apatow, Lesley Arfin, Paul Rust',Actors:'Gillian Jacobs, Paul Rust, Claudia O\'Doherty, Jordan Rock',Plot:'A program that follows a couple who must navigate the exhilarations and humiliations of intimacy, commitment and other things they were hoping to avoid.',Language:'English',Country:'USA',Awards:'1 nomination.',Poster:'https://images-na.ssl-images-amazon.com/images/M/MV5BMjU1NjQ3Mjk4Ml5BMl5BanBnXkFtZTgwMzQ2Mzg0MTI@._V1_SX300.jpg',Metascore:'N/A',imdbRating:'7.7',imdbVotes:'15,939',imdbID:'tt4061080',Type:'series',totalSeasons:'2',Response:'True'}})
  expect(state).toEqual({searchTerm:'',omdbData:{tt4061080:{Title:'Love',Year:'2016–',Rated:'TV-MA',Released:'19 Feb 2016',Runtime:'50 min',Genre:'Comedy, Drama, Romance',Director:'N/A',Writer:'Judd Apatow, Lesley Arfin, Paul Rust',Actors:'Gillian Jacobs, Paul Rust, Claudia O\'Doherty, Jordan Rock',Plot:'A program that follows a couple who must navigate the exhilarations and humiliations of intimacy, commitment and other things they were hoping to avoid.',Language:'English',Country:'USA',Awards:'1 nomination.',Poster:'https://images-na.ssl-images-amazon.com/images/M/MV5BMjU1NjQ3Mjk4Ml5BMl5BanBnXkFtZTgwMzQ2Mzg0MTI@._V1_SX300.jpg',Metascore:'N/A',imdbRating:'7.7',imdbVotes:'15,939',imdbID:'tt4061080',Type:'series',totalSeasons:'2',Response:'True'}}})
})

