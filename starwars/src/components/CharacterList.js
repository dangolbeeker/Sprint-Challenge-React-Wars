import React from 'react'
import Character from './Character'

const CardList = (props) => {
 return (
  <div>
     <li>
         {props.characters.map( character => {
             return <Character key={character.created}
                           name={character.name} 
                           gender={character.gender}
                           height={character.height}
                           mass={character.mass}
                         hairColor={character.hair_color}
                           />
                    
                })}


            </li>
            
        </div>
    )
}

export default CardList;