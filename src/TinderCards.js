import React, {useState} from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'


function TinderCards() {
    const [people, setPeople]= useState([
        {
            name : "Elon Musk",
            url : "https://www.gstatic.com/tv/thumb/persons/487130/487130_v9_ba.jpg"
        },
        {
            name: "Jeff bezoes",
            url:"https://www.gstatic.com/tv/thumb/persons/532529/532529_v9_bb.jpg"
        },
    ]);
    const swiped = (direction, nameToDelete) =>{
        console.log("removing:"+ nameToDelete);
        //setLastDirection (direction);
    };
    const outofFrame=(name)=>{
        console.log(name+"left the screen");
    };

    return (
        <div className='tinderCards'>
        <div className='tinderCards_cardContainer'>
        {people.map((person) => (
            <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up','down']}
            onSwipe={(dir)=> swiped(dir,person.name)}
            onCardLeftScreen={() => outofFrame(person.name)}
            >
            <div
             style={{ backgroundImage:`url(${person.url})`}} 
             className="card"
             >
             <h3>{person.name}</h3>
             </div>
            </TinderCard>
        ))}
        </div>
            
            
        </div>
    );
}

export default TinderCards
