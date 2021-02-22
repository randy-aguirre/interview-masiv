import React from "react";

const StarRate = ({ comicId, rateChange, setRateChange, setRate }) => {


    const submitRate = async (rate) => {

        //con el Id y el puntaje se hace fetch POST
        //al endpoint asignado de las calificaciones del público
        console.log(`${rate}/5 para el comic ${comicId}`);

        setRate(rate);
        setRateChange(!rateChange);
    }


    return (
        <div>
            <ul>
                <li id="star-1-on" onClick={() => submitRate(1)}>⭐️</li>
                <li id="star-2-on" onClick={() => submitRate(2)}>⭐️</li>
                <li id="star-3-on" onClick={() => submitRate(3)}>⭐️</li>
                <li id="star-4-on" onClick={() => submitRate(4)}>⭐️</li>
                <li id="star-5-on" onClick={() => submitRate(5)}>⭐️</li>
                <li id="star-2-off">☆</li>
                <li id="star-3-off">☆</li>
                <li id="star-4-off">☆</li>
                <li id="star-5-off">☆</li>
            </ul>
        </div>
    )
}

export default StarRate
