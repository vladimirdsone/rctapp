import React from "react";

const Movies = props => (
    <div>
        { props.title &&
        <div>  
            <img src={props.img} />          
            <p>Название: {props.title}</p>
            <p>Год выпуска: {props.year}</p>
            <p>Жанр: {props.genre}</p>
            <p>Режиссер: {props.director}</p>
        </div>
        }
        <p>{ props.error}</p>
    </div>   
);
export default Movies;