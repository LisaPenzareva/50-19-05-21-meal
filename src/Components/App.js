import React, { Component } from "react";
import Meal from "./Meal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: null,
      isLoading: true,
    };
  }
  renderMeals() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return this.state.meals.map((meal) => (
      <Meal key={meal.idMeal} meal={meal} />
    ));
  }

  componentDidMount() {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
      .then((response) => response.json())
      .then((data) => this.setState({ isLoading: false, meals: data.meals }));
  }

  render() {
    return (
      <section className="container">
        <div className="row">{this.renderMeals()}</div>
      </section>
    );
  }
}

export default App;
