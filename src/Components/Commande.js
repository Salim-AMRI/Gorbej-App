import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deletePanierFromApi,
  getPanierFromApi,
  updatePanierFromAPI,
} from "../Action/orderActions";

class Order extends Component {
  state = {
    Quantité: 1,
  };
  componentDidMount() {
    this.props.getAllPanier();
  }

  decriment = (el) => {
    let up = { ...el };
    if (up.qtite > 1) {
      up.qtite -= 1;
    }
    this.props.updatePanier(up);
  };

  incriment = (el) => {
    let up = { ...el };
    up.qtite += 1;
    this.props.updatePanier(up);
  };

  render() {
    const prixPanier = (
      <span>
        {this.props.panier.reduce(
          (a, el) => a + Number.parseFloat(el.prix * el.qtite),
          0
        )}
      </span>
    );
    const foodPanier = this.props.panier.length ? (
      this.props.panier.map((el) => {
        return (
          <div className="carte" key={el.id}>
            <span
              title="Opps! Supprimer!"
              style={{ fontSize: "x-large", cursor: "pointer" }}
              role="img"
              aria-label="Opps! Supprimer!"
              onClick={() => {
                this.props.delete(el.id);
              }}
            >
              🗑️
            </span>

            <h2>{el.name}</h2>

            <img className="menu" src={el.photo} alt="select food" />
            <p>Prix : {el.prix} DNT </p>
            <div>
              Quantité :{" "}
              <span
                className="qte"
                aria-label="Enlever 1"
                onClick={() => this.decriment(el)}
              >
                ◄
              </span>
              {el.qtite}{" "}
              <span
                className="qte"
                aria-label="Ajouter 1"
                onClick={() => this.incriment(el)}
              >
                ►
              </span>{" "}
            </div>
            <p>Total : {el.prix * el.qtite} DNT</p>
          </div>
        );
      })
    ) : (
      <h2>
        Votre liste de commande est vide
        <br />
        Veuillez choisir remplir votre panier...
      </h2>
    );
    return (
      <div>
        <h1>Vous avez Commandé ...</h1>
        <div className="top">{foodPanier}</div>
        <h2>
          Prix Total de la Commande : <span>{prixPanier}</span> TND
        </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    panier: state.panier,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllPanier: () => dispatch(getPanierFromApi()),
  delete: (id) => dispatch(deletePanierFromApi(id)),
  updatePanier: (el) => dispatch(updatePanierFromAPI(el)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
