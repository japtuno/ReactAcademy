import React, { Component } from "react";
import "./main-page.css";
import AppPresentation from "./app-presentation";

class App extends Component {
  // // constructor(props) {
  // //   ////para iniciar o state
  // //   super(props);
  // //   this.state = {}; ////inicializamos o state, podemos passar valor por defeito.
  // // }

  ////Em alternativa, podemos usar
  state = {};

  componentDidMount() {
    ////lifecicle -> apos o render
    this.fetchHouses();
  }

  fetchHouses = () => {
    fetch("/houses.json")
      .then(rsp => rsp.json())
      .then(allHouses => {
        this.allHouses = allHouses;
        this.determineFeaturedHouse();
        this.determineUniqueCountries();
      });
  };

  determineFeaturedHouse = () => {
    if (this.allHouses) {
      const randomIndex = Math.floor(Math.random() * this.allHouses.length);
      const featuredHouse = this.allHouses[randomIndex];
      this.setState({ featuredHouse }); ////var que vão estar visiveis e passiveis de alterar o valor
    }
  };

  determineUniqueCountries = () => {
    const countries = this.allHouses
      ? Array.from(new Set(this.allHouses.map(c => c.country)))
      : [];
    countries.unshift(null); ////acrescenta null ao 1º elemento do array
    this.setState({ countries });
  };

  filterHouses = country => {
    this.setState({ activeHouse: null });
    const filteredHouses = this.allHouses.filter(h => h.country === country);
    this.setState({ filteredHouses });
    this.setState({ country });
  };

  setActiveHouse = house => {
    this.setState({ activeHouse: house });
  };

  render() {
    return(
      <AppPresentation country={this.state.country} filteredHouses={this.state.filteredHouses} 
      setActiveHouse={this.setActiveHouse} activeHouse={this.state.activeHouse} featuredHouse={this.state.featuredHouse} 
      countries={this.state.countries} filterHouses={this.filterHouses} />
    );
  }
}

export default App;
