import React from 'react';

class SpellView extends React.Component {
  render() {
    var spell = this.props.spell;

    var ritualText = "";
    if (spell.traits != null) {
      if (spell.traits.includes("rituale"))
      {
        ritualText = " (rituale)"
      }
    }

    // var componentsText = "";
    // if (spell.components != null) {
    //   componentsText = spell.components.join(", ");
    // }

    return (
      <div className="Spell-view" >
        <div className="Spell-view-name">{spell.name}</div>
        <div className="Spell-view-school">{spell.level === 0 ?
          "Trucchetto di " + spell.school :
          spell.school + " di " + spell.level + "º livello"}
        {ritualText}</div>
        <div className="Spell-traits">
          <b>Tempo di Lancio: </b>{spell["cast_time"]}<br/>
          <b>Gittata: </b>{spell["range"]}<br/>
          <b>Componenti: </b>{spell.components.join(", ")}<br/>
          <b>Durata: </b>{spell["duration"]}<br/>
          <b>Classi: </b>{spell["classes"].join(", ")}<br/>
        </div>
        <div className="Spell-description" dangerouslySetInnerHTML={{__html: spell.description}}/>
        <div className="Spell-view-source">{spell.source}</div>
      </div>
    )
  }
}

export default SpellView;
