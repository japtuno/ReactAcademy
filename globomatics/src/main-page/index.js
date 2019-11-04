import React, { Component } from "react";
import logo from "./logo.svg";
import "./main-page.css";
import Header from "./header";
import FeaturedHouse from "./featured-house";

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
      });
  };

  determineFeaturedHouse = () => {
    if (this.allHouses) {
      ////const randomIndex = Math.floor(Math.random() * this.allHouses.lenght);
      ////const featuredHouse = this.allHouses[randomIndex];
      const featuredHouse = this.allHouses[1];
      this.setState({ featuredHouse }); ////var que vão estar visiveis e passiveis de alterar o valor
    }
  };

  render() {
    return (
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <FeaturedHouse house={this.state.featuredHouse} />
      </div>
    );
  }
}

export default App;
