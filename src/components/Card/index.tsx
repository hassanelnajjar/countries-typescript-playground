import { FC } from 'react';
import './style.css'
import {useHistory} from 'react-router-dom'

export interface ICountry{
	region:string,
	name:string,
	alpha3Code:string,
	population:number
	capital:string
	flag:string
	callingCodes:string[]
}

interface ICardProps {
	country:ICountry
}

const Card:FC<ICardProps> =(props) => {
	const { country } = props;
	const history = useHistory()
	const handleOpenCountryPage = (countryName:string,alphaCode:string) => ()=>{
		history.push(`/country/${countryName}`,{alphaCode})
	}
	return (
		<div className='country-card'>
			<div className='country-flag-div'>
				<img src={country.flag} className='country-flag-img' alt='country flag' />
			</div>
			<h2>{country.name}</h2>
			<div>
				<p>
					<span>Population:</span> {country.population}
				</p>
				<p>
					<span>Region:</span> {country.region}
				</p>
				<p>
					<span>Capital:</span> {country.capital}
				</p>
			</div>
		<button className='more-button' type='button' onClick={handleOpenCountryPage(country.name,country.alpha3Code)}>More</button>
		</div>
	);
}

export default Card
