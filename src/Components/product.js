import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductFromApi, selectProduct } from "../Action/productActions";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import formatPrix from "./Prix";
import { Link } from "react-router-dom";

class Product extends Component {
  state = {
    el: null,
    products: [],
    type: "",
    etat: "",
    tri: "",
    filter: [],
  };

  componentDidMount() {
    this.props.getAllProduct();
    setTimeout(() => {
      this.setState({
        products: this.props.produits,
      });
    }, 1000);
  }

  // Modal part

  openModal = (el) => {
    this.setState({ el });
  };

  closeModal = () => {
    this.setState({
      el: null,
    });
  };

  // Filter part

  filterType = (e) => {
    console.log(e.target.value);
    if (e.target.value === "" || e.target.value === "TOUT") {
      this.setState({
        type: e.target.value,
        filter: [],
      });
    } else {
      this.setState({
        type: e.target.value,
        filter: this.props.produits.filter(
          (produit) => produit.type.indexOf(e.target.value) >= 0
        ),
      });
    }
  };

  // filterEtat = (e) => {
  //   console.log(e.target.value);
  //   if (e.target.value === "" || e.target.value === "TOUT") {
  //     this.setState({
  //       etat: e.target.value,
  //       filter: [],
  //     });
  //   } else {
  //     this.setState({
  //       etat: e.target.value,
  //       filter: this.props.produits.filter(
  //         (produit) => produit.etat.indexOf(e.target.value) >= 0
  //       ),
  //     });
  //   }
  // };

  sortPrix = (e) => {
    const tri = e.target.value;
    console.log(e.target.value);
    this.setState((state) => ({
      tri: tri,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          tri === "Moins"
            ? a.prix > b.prix
              ? 1
              : -1
            : tri === "Plus"
            ? a.prix < b.prix
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    }));
  };

  render() {
    const { el } = this.state;

    return (
      <div>
        <h1>Articles en Vitrine</h1>
        <div className="filter">
          <div className="filter-type">
            Categorie :{"  "}
            <select onChange={this.filterType}>
            <option value="">TOUT</option>
            <option value="Vetement">Vetement</option>
            <option value="Jouet">Jouet</option>
            <option value="Meuble">Meuble</option>
            <option value="Decoration">Decoration</option>
            </select>{" "}
          </div>
          {/* <div className="filter-etat">
            Etat :{"  "}
            <select onChange={this.filterEtat}>
              <option value="">TOUT</option>
              <option value="Neuve">Neuve</option>
              <option value="Ancienne">Ancienne</option>
            </select>{" "}
          </div> */}
          <div className="filter-prix">
            Prix :{"  "}
            <select onChange={this.sortPrix}>
              <option value="">TOUT</option>
              <option value="Moins">Moins cher</option>
              <option value="Plus">Plus cher</option>
            </select>{" "}
          </div>
        </div>
        <Fade bottom cascade={true}>
          <div className="top">
            {this.state.products.length > 0 ? (
              this.state.filter.length > 0 ? (
                this.state.filter.map((el) => (
                  <div className="carte" key={el._id}>
                      <p>
                        <strong>{el.disponibilité}</strong>
                      </p>

                      <img
                        className="menu"
                        src={el.photo}
                        alt={el.titre}
                        onClick={() => this.openModal(el)}
                      />
                      <h2>{el.titre}</h2>
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
                ))
              ) : (
                this.state.products.map((el) => {
                  return (
                    <div className="carte" key={el._id}>
                      <p>
                        <strong>{el.disponibilité}</strong>
                      </p>

                      <img
                        className="menu"
                        src={el.photo}
                        alt={el.titre}
                        onClick={() => this.openModal(el)}
                      />
                      <h2>{el.titre}</h2>
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
              )
            ) : (
              <p>Les articles en vitrine n'est pas encore prêt</p>
            )}
          </div>
        </Fade>
        <div>
          <Link to="/panier">
            <button className="re-size"> Consulter votre panier </button>
          </Link>
        </div>
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
                    <strong>Sexe : </strong> {el.sex}
                  </p>
                  <p>
                    <strong>Etat : </strong> {el.etat}
                  </p>
                  <p>
                    <strong>Prix : </strong> {formatPrix(el.prix)}
                  </p>
                  <p>
                    <strong>Disponibilité : </strong> {el.disponibilité}
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
