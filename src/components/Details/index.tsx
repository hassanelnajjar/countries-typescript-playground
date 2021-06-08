import React,{ FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ICountry } from '../Card';
import './style.css';
import Loading from '../Loading';
import BorderButton from '../BorderButton'

interface LocationState {
	alphaCode: string;
}

interface ICurrencies {
	name: string;
}

interface ILanguages {
	name: string;
}

interface ICountryData extends ICountry {
	nativeName: string;
	subregion: string;
	topLevelDomain: string[];
	currencies: ICurrencies[];
	languages: ILanguages[];
	borders: string[];
}

const defaultCountryData: ICountryData = {
	alpha3Code: '',
	borders: [''],
	callingCodes: [''],
	capital: '',
	currencies: [{ name: '' }],
	flag: '',
	languages: [{ name: '' }],
	name: '',
	nativeName: '',
	population: 0,
	region: '',
	subregion: '',
	topLevelDomain: [''],
};

const Details: FC = () => {
	const { state } = useLocation<LocationState>();
	const [loading, setLoading] = useState(true);
	const [countryData, setCountryData] = useState<ICountryData>(
		defaultCountryData
	);
	console.log(state.alphaCode)
	useEffect(() => {
		console.log('new effect')
		fetch(`https://restcountries.eu/rest/v2/alpha/${state.alphaCode}`)
			.then((res) => res.json())
			.then((countryData) => {
				setCountryData(countryData);
				setLoading(false);
			});
	}, [state.alphaCode]);
	
	return (
		<>
			{loading ? (
					<Loading/>
				
			) : (
				<div className='country-details'>
					<div className='flag-container'>
						<img
							src={countryData.flag}
							alt='flag'
							className='country-details-flag-img'
						/>
					</div>
					<div className='country-details-container'>
						<h2>{countryData.name}</h2>
						<div>
							<p>
								<span className='bold-text'>Native Name :</span> {countryData.nativeName}
							</p>
							<p>
								<span className='bold-text'>Population :</span>
								{countryData.population}
							</p>
							<p>
								<span className='bold-text'>Region :</span>
								{countryData.region}
							</p>
							<p>
								<span className='bold-text'>Sub Region :</span> {countryData.subregion}
							</p>
							<p>
								<span className='bold-text'>Capital :</span> {countryData.capital}
							</p>
							<p>
								<span className='bold-text'>Top Level Domain :</span>
								{React.Children.toArray(countryData.topLevelDomain.map((level) => (
									<span>{level}</span>
								)))}
							</p>
							<p>
								<span className='bold-text'>Currencies :</span>
								{React.Children.toArray(countryData.currencies.map((currency) => (
									<span>{currency.name}</span>
								)))}
							</p>
							<p>
								<span className='bold-text'>Languages :</span>
								{React.Children.toArray(countryData.languages.map((language) => (
									<span>{language.name}</span>
								)))}
							</p>
						</div>
						<div>
							<p>
								<span className='bold-text'>Border Countries :</span>
								<BorderButton key={countryData.alpha3Code} borders={countryData.borders}></BorderButton>

							</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Details;
