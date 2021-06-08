import { FC } from 'react';
import './style.css'

interface ISearch {
	searchKeyWord: string;
	setSearchKeyWord: React.Dispatch<React.SetStateAction<string>>;
}

interface IFilter {
	filter: string;
	setFilter: React.Dispatch<React.SetStateAction<string>>;
}

interface ISearchFilter {
	filter: IFilter;
	search: ISearch;
}

const SearchFilter: FC<ISearchFilter> = (props) => {
	const {
		search: { searchKeyWord, setSearchKeyWord },
		filter: { filter, setFilter },
	} = props;

	return (
		<div className='search-filter'>
			<input
				type='search'
				value={searchKeyWord}
				onChange={(e) => setSearchKeyWord(e.target.value)}
				className='search-input'
				placeholder='Search for a country ...'
			/>
			<select
				name='filter'
				id='filter'
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
				className='filter-input'
				placeholder='Filter By Region'
			>
				<option value='' disabled>Filter By Region</option>
				<option value='Africa'>Africa</option>
				<option value='Americas'>Americas</option>
				<option value='Asia'>Asia</option>
				<option value='Europe'>Europe</option>
				<option value='Oceania'>Oceania</option>
			</select>
		</div>
	);
};

export default SearchFilter;
