import React, { Component } from "react";
import logo from "./logo.svg";
import "./main-page.css";
import Header from "./header";
import FeaturedHouse from "./featured-house";
import HouseFilter from "./house-filter";
import SearchResult from "../search-results";
import House from "../house";

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
    let activeContainer = null;
    if (this.state.country) {
      activeContainer = (
        <SearchResult
          country={this.state.country}
          filteredHouses={this.state.filteredHouses}
          setActiveHouse={this.setActiveHouse}
        />
      );
    }

    if (this.state.activeHouse) {
      activeContainer = <House house={this.state.activeHouse} />;
    }

    if (!activeContainer) {
      activeContainer = <FeaturedHouse house={this.state.featuredHouse} />;
    }

    return (
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <HouseFilter
          countries={this.state.countries}
          filterHouses={this.filterHouses}
        />
        {activeContainer}
      </div>
    );
  }
}

export default App;
