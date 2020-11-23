import React, { Component } from "react";
import { connect } from "react-redux";
import { getFoodsFromApi, selectFood } from "../Action/menuActions";

class Produit extends Component {
  componentDidMount() {
    this.props.getAllFoods();
  }
  $;

  render() {
    const { foods } = this.props;
    const foodMenu = foods.length ? (
      foods.map((el) => {
        return (
          <div className="carte" key={el.id}>
            <h2>{el.name}</h2>
            <img className="menu" src={el.photo} alt="Mon Menu" />
            <p>{el.compo}</p>
            <p>{el.prix} DNT</p>
            <button
              title="Click et savour"
              onClick={() =>
                this.props.selectFood({
                  photo: el.photo,
                  name: el.name,
                  compo: el.compo,
                  qtite: 1,
                  prix: el.prix,
                })
              }
            >
              Ajouter
            </button>
          </div>
        );
      })
    ) : (
      <p>La brocante est encore vide.</p>
    );
    return (
      <div>
        <h1>Brocante du jour</h1>
        <div className="top">{foodMenu}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    foods: state.foods.foods,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllFoods: () => dispatch(getFoodsFromApi()),
  selectFood: (data) => dispatch(selectFood(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Produit);
