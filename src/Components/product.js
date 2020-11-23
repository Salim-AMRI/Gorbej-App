import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductFromApi, selectProduct } from "../Action/productActions";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import formatPrix from "./Prix";
import Filter from "./Filter";

class Product extends Component {
  state = {
    el: null,
  };

  componentDidMount() {
    this.props.getAllProduct();
  }

  openModal = (el) => {
    this.setState({ el });
  };

  closeModal = () => {
    this.setState({
      el: null,
    });
  };

  render() {
    const { el } = this.state;
    const { produits } = this.props;
    const toutProduct = produits.length ? (
      produits.map((el) => {
        return (
          <div className="carte" key={el.id}>
            <h2>{el.titre}</h2>

            <img
              className="menu"
              src={el.photo}
              alt={el.titre}
              onClick={() => this.openModal(el)}
            />

            <p>{el.type}</p>
            <p>{el.etat}</p>
            <p>{formatPrix(el.prix)}</p>

            <button
              title="Click et savour"
              onClick={() =>
                this.props.selectProduct({
                  photo: el.photo,
                  type: el.type,
                  etat: el.etat,
                  titre: el.titre,
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
      <p>Les articles en vitrine n'est pas encore prêt</p>
    );
    return (
      <div>
        <h1>Articles en Vitrine</h1>
        <Filter />
        <Fade bottom cascade={true}>
          <div className="top">{toutProduct}</div>
        </Fade>
        {el && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <button className="close-modal" onClick={this.closeModal}>
              x
            </button>
            <Zoom>
              <div className="produit-description">
                <img src={el.photo} alt={el.titre}></img>
                <div className="produit-description-detail">
                  <p className="titre-modal">{el.titre}</p>
                  <p>
                    <strong>Description : </strong> {el.description}
                  </p>
                  <p>
                    <strong>Etat : </strong> {el.etat}
                  </p>
                  <p>
                    <strong>Prix : </strong> {formatPrix(el.prix)}
                  </p>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    produits: state.produits,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllProduct: () => dispatch(getProductFromApi()),
  selectProduct: (data) => dispatch(selectProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
