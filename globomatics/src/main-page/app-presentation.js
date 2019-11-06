import React from "react";
import SearchResult from "../search-results";
import House from "../house";
import FeaturedHouse from "./featured-house";
import Header from "./header";
import HouseFilter from "./house-filter";

const AppPresentation = props => {
  let activeContainer = null;
  if (props.country) {
    activeContainer = (
      <SearchResult
        country={props.country}
        filteredHouses={props.filteredHouses}
        setActiveHouse={props.setActiveHouse}
      />
    );
  }

  if (props.activeHouse) {
    activeContainer = <House house={props.activeHouse} />;
  }

  if (!activeContainer) {
    activeContainer = <FeaturedHouse house={props.featuredHouse} />;
  }

  return (
    <div className="container">
      <Header subtitle="Providing houses all over the world" />
      <HouseFilter
        countries={props.countries}
        filterHouses={props.filterHouses}
      />
      {activeContainer}
    </div>
  );
};

export default AppPresentation;
