import React,{ FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ICountry } from '../Card';
import './style.css';
interface IBorderPros {
	borders: string[];
}

interface ICountryBorder{
	name:string,
	alpha3Code:string
}

const BorderButton: FC<IBorderPros> = (props) => {
	const { borders } = props;
	const history = useHistory()
	const [bordersName, setBorderNames] = useState<Array<ICountryBorder>>([]);
	const handleBorderClick = (name:string,countryCode:string) => () =>{
		
		history.push(`/country/${name}`,{alphaCode:countryCode})

	}

	useEffect(() => {
		const bordersString = borders.join(';');
		fetch(`https://restcountries.eu/rest/v2/alpha?codes=${bordersString}`)
			.then((res) => res.json())
			.then((result: ICountry[]) => {
				if (result.length)
					setBorderNames(result.map((country) => ({name:country.name,alpha3Code:country.alpha3Code})));
			});
	}, [borders]);
	return (
		<>
			{React.Children.toArray(bordersName.map((border) => (
				<button className='border-btn' type='button' onClick={handleBorderClick(border.name,border.alpha3Code)}>
					{border.name}
				</button>
			)))}
		</>
	);
};

export default BorderButton;
