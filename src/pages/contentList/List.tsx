import React from 'react'

import LocationList from 'components/lists/LocationList'
import CharacterList from 'components/lists/CharacterList'

interface PageName {
  name: string
}

function List({ name }: PageName): JSX.Element {
  if (name === 'character') return <CharacterList />
  return <LocationList />
}

export default List
