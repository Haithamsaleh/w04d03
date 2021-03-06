import React from 'react'
import Search from './Search'

const cars = [
    {
        id: 0,
        name: 'ford',
        img: 'https://logos-world.net/wp-content/uploads/2021/03/Ford-Logo.png',
        fav: false,

    },

    {
        id: 1,
        name: 'BMW',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png',
        fav: false,

    },

    {
        id: 2,
        name: 'GMC',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/GMC-Logo.svg/2560px-GMC-Logo.svg.png',
        fav: false,

    }
]
function Cards() {
    return (
        <div className="c0">
{cars.map((car)=>{
    return <div className="c1">
        <h1>{car.name}</h1>
        <img className="photo" src={car.img}  alt={`img for ${car.name} `}  />
    </div>
})}
        </div>
    )
}

export default Cards;
