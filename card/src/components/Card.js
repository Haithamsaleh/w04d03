import React from 'react'
import { useParams } from "react-router-dom";
import { Cars } from "../../Cars";
import Search from './Search';


function card() {
    const { id } = useParams();

    const myItem = cities.find((car) => {
      return car.id === parseInt(id);
    });
    const [favButt, sFavButt] = useState(myItem.fav);
    const favorites = () => {
        if (myItem.fav === true) {
          myItem.fav = false;
          sFavButt(false);
        } else {
          myItem.fav = true;
          sFavButt(true);
        }
      };

    return (
        <div>
              <div >
      <div >
        <h1>{myItem.name}</h1>
        <img src={myItem.img} alt={`${myItem.name} car`} />
        <button  onClick={favorites}>
          {fButton ? "Remove From list" : "Add to thelist "}
        </button>
      </div>
    </div>
  );


        </div>
    )
}

export default card;
