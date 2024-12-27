// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  OnChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const SearchResult = destinationsList.filter(eachDeatination =>
      eachDeatination.name
        .toLowerCase()
        .includes(searchInput.toLocaleLowerCase()),
    )

    return (
      <div className="destination-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-box">
          <input
            type="search"
            onChange={this.OnChangeSearchInput}
            value={searchInput}
            placeholder="Search"
            className="searchbox"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-icon"
            alt="search icon"
          />
        </div>
        <ul className="destination-items-list">
          {SearchResult.map(eachDestination => (
            <DestinationItem
              key={eachDestination.id}
              destinationDetails={eachDestination}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
