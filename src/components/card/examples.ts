const examples = {
  character: {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
      'https://rickandmortyapi.com/api/episode/3',
      'https://rickandmortyapi.com/api/episode/4',
      'https://rickandmortyapi.com/api/episode/5',
      'https://rickandmortyapi.com/api/episode/6',
      'https://rickandmortyapi.com/api/episode/7',
      'https://rickandmortyapi.com/api/episode/8',
      'https://rickandmortyapi.com/api/episode/9',
      'https://rickandmortyapi.com/api/episode/10',
      'https://rickandmortyapi.com/api/episode/11',
      'https://rickandmortyapi.com/api/episode/12',
      'https://rickandmortyapi.com/api/episode/13',
      'https://rickandmortyapi.com/api/episode/14',
      'https://rickandmortyapi.com/api/episode/15',
      'https://rickandmortyapi.com/api/episode/16',
      'https://rickandmortyapi.com/api/episode/17',
      'https://rickandmortyapi.com/api/episode/18',
      'https://rickandmortyapi.com/api/episode/19',
      'https://rickandmortyapi.com/api/episode/20',
      'https://rickandmortyapi.com/api/episode/21',
      'https://rickandmortyapi.com/api/episode/22',
      'https://rickandmortyapi.com/api/episode/23',
      'https://rickandmortyapi.com/api/episode/24',
      'https://rickandmortyapi.com/api/episode/25',
      'https://rickandmortyapi.com/api/episode/26',
      'https://rickandmortyapi.com/api/episode/27',
      'https://rickandmortyapi.com/api/episode/28',
      'https://rickandmortyapi.com/api/episode/29',
      'https://rickandmortyapi.com/api/episode/30',
      'https://rickandmortyapi.com/api/episode/31',
      'https://rickandmortyapi.com/api/episode/32',
      'https://rickandmortyapi.com/api/episode/33',
      'https://rickandmortyapi.com/api/episode/34',
      'https://rickandmortyapi.com/api/episode/35',
      'https://rickandmortyapi.com/api/episode/36',
      'https://rickandmortyapi.com/api/episode/37',
      'https://rickandmortyapi.com/api/episode/38',
      'https://rickandmortyapi.com/api/episode/39',
      'https://rickandmortyapi.com/api/episode/40',
      'https://rickandmortyapi.com/api/episode/41',
      'https://rickandmortyapi.com/api/episode/42',
      'https://rickandmortyapi.com/api/episode/43',
      'https://rickandmortyapi.com/api/episode/44',
      'https://rickandmortyapi.com/api/episode/45',
      'https://rickandmortyapi.com/api/episode/46',
      'https://rickandmortyapi.com/api/episode/47',
      'https://rickandmortyapi.com/api/episode/48',
      'https://rickandmortyapi.com/api/episode/49',
      'https://rickandmortyapi.com/api/episode/50',
      'https://rickandmortyapi.com/api/episode/51',
    ],
    url: 'https://rickandmortyapi.com/api/character/1',
  },
  location: {
    id: 1,
    name: 'Earth (C-137)',
    type: 'Planet',
    dimension: 'Dimension C-137',
    residents: [
      'https://rickandmortyapi.com/api/character/38',
      'https://rickandmortyapi.com/api/character/45',
      'https://rickandmortyapi.com/api/character/71',
      'https://rickandmortyapi.com/api/character/82',
      'https://rickandmortyapi.com/api/character/83',
      'https://rickandmortyapi.com/api/character/92',
      'https://rickandmortyapi.com/api/character/112',
      'https://rickandmortyapi.com/api/character/114',
      'https://rickandmortyapi.com/api/character/116',
      'https://rickandmortyapi.com/api/character/117',
      'https://rickandmortyapi.com/api/character/120',
      'https://rickandmortyapi.com/api/character/127',
      'https://rickandmortyapi.com/api/character/155',
      'https://rickandmortyapi.com/api/character/169',
      'https://rickandmortyapi.com/api/character/175',
      'https://rickandmortyapi.com/api/character/179',
      'https://rickandmortyapi.com/api/character/186',
      'https://rickandmortyapi.com/api/character/201',
      'https://rickandmortyapi.com/api/character/216',
      'https://rickandmortyapi.com/api/character/239',
      'https://rickandmortyapi.com/api/character/271',
      'https://rickandmortyapi.com/api/character/302',
      'https://rickandmortyapi.com/api/character/303',
      'https://rickandmortyapi.com/api/character/338',
      'https://rickandmortyapi.com/api/character/343',
      'https://rickandmortyapi.com/api/character/356',
      'https://rickandmortyapi.com/api/character/394',
    ],
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  episode: {
    id: 1,
    name: 'Pilot',
    air_date: 'December 2, 2013',
    episode: 'S01E01',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/35',
      'https://rickandmortyapi.com/api/character/38',
      'https://rickandmortyapi.com/api/character/62',
      'https://rickandmortyapi.com/api/character/92',
      'https://rickandmortyapi.com/api/character/127',
      'https://rickandmortyapi.com/api/character/144',
      'https://rickandmortyapi.com/api/character/158',
      'https://rickandmortyapi.com/api/character/175',
      'https://rickandmortyapi.com/api/character/179',
      'https://rickandmortyapi.com/api/character/181',
      'https://rickandmortyapi.com/api/character/239',
      'https://rickandmortyapi.com/api/character/249',
      'https://rickandmortyapi.com/api/character/271',
      'https://rickandmortyapi.com/api/character/338',
      'https://rickandmortyapi.com/api/character/394',
      'https://rickandmortyapi.com/api/character/395',
      'https://rickandmortyapi.com/api/character/435',
    ],
    url: 'https://rickandmortyapi.com/api/episode/1',
  },
};
export default examples;
