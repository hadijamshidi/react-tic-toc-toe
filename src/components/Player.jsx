import {useState} from 'react';

export default function Player({name, symbol, isActive, onUpdateName}){
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function handleEditingClick(){
        setIsEditing((editing) => !editing);
        if (isEditing){
            onUpdateName(symbol, playerName);
        }
    }
    function handleChange(event){
        setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if (isEditing){
        editablePlayerName = <input required value={playerName} onChange={handleChange} />;
    } 
    return (
         <li className={isActive? 'active': undefined}>
            <span className="player">
            
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditingClick}>{isEditing? 'Save': 'Edit'}</button>
          </li>

    )

}