import React from "react";

const Form = props => (
    <form onSubmit={props.moviesMethod}>
        <input type="text" name="title" placeholder="название фильма"/>
        <button>Информация</button>
    </form>
);
export default Form;