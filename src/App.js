import React, { useEffect, useState } from "react";
import './App.css';

import StarRate from './components/StarRate';

function App() {
  const proxy = 'https://cors-anywhere.herokuapp.com/';

  // const [randomComic, setRandomComic] = useState(1);
  const [comicData, setComicData] = useState({});
  const [rateChange, setRateChange] = useState(false);
  const [rate, setRate] = useState(null);


  const rnd = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  };

  const fetchComic = async () => {
    let randomComic = 1;

    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");

      const response = await fetch(proxy + 'https://xkcd.com/info.0.json', {
        method: "GET",
        headers: myHeaders
      })

      const parseResponse = await response.json();

      console.log(parseResponse.num);

      randomComic = rnd(1, parseResponse.num)
      // setRandomComic(rnd(1, parseResponse.num));

    } catch (err) {
      console.log(err);
    }

    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");

      const response = await fetch(proxy + `https://xkcd.com/${randomComic}/info.0.json`, {
        method: "GET",
        headers: myHeaders
      })

      const parseResponse = await response.json();

      console.log(parseResponse);

      setComicData(parseResponse);

    } catch (err) {
      console.log(err);
    }

  }


  useEffect(() => {
    fetchComic();
  }, [])

  useEffect(() => {
    if (rate !== null) {
      fetchComic();
    }
  }, [rateChange])

  return (
    <>
      {Object.keys(comicData).length !== 0 ?
        (
          <div className="app" >
            <h1>{comicData.title}</h1>
            <img
              src={comicData.img}
              className="comic-content"
              alt={comicData.alt}
              title={comicData.alt}
            />
            <StarRate
              comicId={comicData.num}
              setRateChange={setRateChange}
              rateChange={rateChange}
              setRate={setRate}
            />
          </div>
        ) : (
          <div className="app" >
            <p>Cargando contenido...</p>
          </div>
        )
      }
    </>
  );
}

export default App;
