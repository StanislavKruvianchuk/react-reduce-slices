import { useDispatch, useSelector } from 'react-redux';
import { 
    setTitleFilter, 
    setAuthorFilter, 
    setOnlyFavoriteFilter, 
    selectTitleFilter, 
    selectAuthorFilter, 
    selectOnlyFavoriteFilter,
    resetFilters 
} from '../../redux/slices/filterSlice';
import './Filter.css'

const Filter = () => {
    const dispatch = useDispatch()
    const titleFilter = useSelector(selectTitleFilter)
    const authorFilter = useSelector(selectAuthorFilter)
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)

    const handleTitleFilterChange = (e) => {
        dispatch(setTitleFilter(e.target.value))
    }

    const handleAuthorFilterChange = (e) => {
        dispatch(setAuthorFilter(e.target.value))
    }

    const hadleOnlyFavoriteFilterChange = () => {
        dispatch(setOnlyFavoriteFilter())
    }

    const handleResetFilters = () => {
        dispatch(resetFilters())
    }

    return (
        <div className="app-block filter">
            <div className='filter-row'>
                <div className="filter-group">
                    <input type="text" value={titleFilter} placeholder="Filter by title..." onChange={handleTitleFilterChange}/>
                </div>
                <div className="filter-group">
                    <input type="text" value={authorFilter} placeholder="Filter by author..." onChange={handleAuthorFilterChange}/>
                </div>
            </div>
            <div className='filter-group'>
                <label>
                    <input type="checkbox" checked={onlyFavoriteFilter} onChange={hadleOnlyFavoriteFilterChange} />
                    Only Favorite
                </label>
            </div>
            <button type="button" onClick={handleResetFilters}>Reset Filters</button>
        </div>
    )
}

export default Filter