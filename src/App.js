import React from 'react';
import Info from "./components/info";
import Form from "./components/form";
import Movies from "./components/movies";

const API_KEY = "7f016ba1";

class App extends React.Component {

  state = {
    title: undefined,
    year: undefined,
    genre: undefined,
    img: undefined,
    director: undefined,
    error: undefined
  }

  gettingMovies = async (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    
    if (title) {
      const api_url = await
        fetch(`http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`); 
      const data = await api_url.json();
      console.log(data);

      this.setState({
        title: data.Title,
        year: data.Released,
        genre: data.Genre,
        director: data.Director,
        img: data.Poster,
        error: undefined
      });
    } else {

      this.setState({
        title: undefined,
        year: undefined,
        genre: undefined,
        director: undefined,
        img: undefined,
        error: "Не введено название"

      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Info />
        <Form moviesMethod={this.gettingMovies} />
        <Movies
          title={this.state.title}
          year={this.state.year}
          genre={this.state.genre}
          director={this.state.director}
          img={this.state.img}
          error={this.state.error}          
        />
      </div>
    )
  }
}


export default App;
