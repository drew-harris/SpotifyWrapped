import ArtistCard from "./ArtistCard"
import {useState, useEffect} from 'react';
const MainApp = ({token}) => {

  const [loading, setLoading] = useState(true);
  const [objList, setObjs] = useState([]);
  const [listOfCards, setListOfCards] = useState([]);


  useEffect( () => {
    const convertToCards = () => {
      if(objList.length > 1) {
        var addedList = [];
        objList.forEach((element, index, array) => {
          addedList.push(
            <ArtistCard obj={element} id={index}/>
          );
        });

        setListOfCards(addedList);
      }
    };
    const fetchFavs = async (type) => {
      const result = await fetch('https://api.spotify.com/v1/me/top/artists', {
        headers: {
            'Authorization': 'Bearer ' + token 
        }
      });

      const objArray = await result.json();
      setObjs(objArray.items);
    };

    
    if(objList.length < 3) {
      fetchFavs();
    }
    convertToCards();
    setLoading(false);
  },[objList]);

  // RENDERING
  if (loading) {
    return <h1>Loading</h1>
  }
  return(
    <div>
      {listOfCards}
    </div>
  )

};

export default MainApp;
