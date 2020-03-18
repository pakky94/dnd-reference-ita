import React, { Component } from 'react';
import Fuse from 'fuse.js';

import SpellViewList from './SpellViewList';

import Spells from '../data/spells.json';

class SearchView extends Component {
  state = {
    filter: "",
    selected_class: "",
  }
  fuseOptions;
  filteredSpells = [];

  componentDidMount() {
    this.fuseOptions = {
      // shouldSort: true,
      minMatchCharLength: 2,
      threshold: 0.4,
      keys: ['name']
    }
    // this.updateFilteredSpells();
  }

  onChangeFilter(text) {
    this.setState({...this.state, filter: text})
    // this.updateFilteredSpells();
  }

  onChangeClass(c) {
    this.setState({...this.state, selected_class: c})
    // this.updateFilteredSpells();
  }

  updateFilteredSpells() {
    var spells = this.state.selected_class === ""
      ? Spells
      : Spells.filter(s => s['classes'].indexOf(this.state.selected_class) > -1);
    // this.filteredSpells = spells.filter(s => s['name'].toLowerCase().includes(this.state.filter.toLowerCase()))
    if (this.state.filter === "") {
      this.filteredSpells = spells;
    } else {
      const options = {
        minMatchCharLength: 2,
        threshold: 0.4,
        keys: ['name']
      }
      var fuse = new Fuse(spells, options);
      this.filteredSpells = fuse.search(this.state.filter);
    }
  }

  render() {
    this.updateFilteredSpells();
    // var spells = Spells;
    // var spells = Spells.filter(s =>
    //   s.name.toLowerCase().includes(this.state.filter.toLowerCase()))

    return(
      <div className="SearchView">
        <div className="SearchPanel">
          <input className="Searchbar" id="searchbar" onChange={e => this.onChangeFilter(e.target.value)}/>
          <select className="ClassList" defaultValue="" onChange={e => this.onChangeClass(e.target.value)}>
            <option value="">Tutte</option>
            <option>Bardo</option>
            <option>Chierico</option>
            <option>Druido</option>
            <option>Mago</option>
            <option>Paladino</option>
            <option>Ranger</option>
            <option>Stregone</option>
            <option>Warlock</option>
          </select>
        </div>
        <SpellViewList spells={this.filteredSpells} />
      </div>
    )
  }
}

export default SearchView;
