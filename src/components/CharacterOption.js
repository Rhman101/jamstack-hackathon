import React from 'react';

const CharacterOption = ({ avatar, charDesc, charName, handleCharacterSelect }) => (
  <div style={{ background: 'lavender', border: '1px solid purple', height: '400px', width: '250px', margin: '20px' }}>
    <div style={{ background: 'black' }} />
    <h4>{charName}</h4>
    <p>{charDesc}</p>
    <button onClick={handleCharacterSelect}>Select Character</button>
  </div>
);

export default CharacterOption;
