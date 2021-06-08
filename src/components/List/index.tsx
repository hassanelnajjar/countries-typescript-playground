import React,{FC} from 'react'

import Card from '../Card'
import './style.css'
import {ICountry} from '../Card'

interface IListProps{
countries:ICountry[]
}
const List:FC<IListProps> = (props)=>{
  const {countries} = props
  return <div className='countries-list'>{React.Children.toArray(countries.map((country) => <Card key={country.alpha3Code} country={country}/>))}</div>
}

export default List