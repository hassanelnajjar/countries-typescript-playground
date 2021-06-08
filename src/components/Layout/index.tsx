import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from '../List';
import SearchFilter from '../SearchFilter';
import Details from '../Details'
import Header from '../Header'

import {ICountry} from '../Card'

export default function Layout() {
	
	const [countries, setCountries] = useState<ICountry[]>([]);
	const [filter, setFilter] = useState('');
	const [searchKeyWord, setSearchKeyWord] = useState('');
	
	useEffect(() => {
		fetch('https://restcountries.eu/rest/v2/all')
			.then((res) => res.json())
			.then((countries) => setCountries(countries));
	}, []);

	return (
		<Router>
			<Header></Header>
			<Switch>
				<Route exact path='/'>
					<>
						<SearchFilter
							search={{ searchKeyWord, setSearchKeyWord }}
							filter={{ filter, setFilter }}
						></SearchFilter>
						<List
							countries={countries
								.filter(({ region }) => (filter ? region === filter : region))
								.filter(({ name }) =>
									searchKeyWord
										? name.toLowerCase().includes(searchKeyWord)
										: name
								)}
						></List>
					</>
				</Route>
				<Route exact path='/country/:name'>
								<Details ></Details>
				</Route>
			</Switch>
		</Router>
	);
}
