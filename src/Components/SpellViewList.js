import React, { Component } from 'react';
import SpellView from './SpellView';

class SpellViewList extends Component {
  render() {
    var {spells} = this.props;
    // var spells = spells.slice(0, 11);

    return (
      <div>
        {
          spells.map((spell, index) =>
          <SpellView spell={spell} key={index} />)
        }
      </div>
    )
  }
}

export default SpellViewList;
