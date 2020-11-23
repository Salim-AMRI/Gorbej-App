import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  postProduct,
  getProductByUserFromApi,
  deleteProductFromApi,
  editeProductFromApi,
} from "../Action/productActions";
import formatPrix from "./Prix";
//import ModalEdite from "./EditeProd";

const Client = ({
  postProduct,
  getProduct,
  userProds,
  deleteProduct,
  editeProduct,
}) => {
  useEffect(() => {
    getProduct();
    console.log("userPPPPP : ", userProds);
  }, []);
  const [productTitle, setProductTitle] = useState("");
  const [productType, setProductType] = useState("");
  const [productState, setProductState] = useState("");
  const [productSex, setProductSex] = useState("");
  const [productPic, setProductPic] = useState("");
  const [productDisp, setProductDispo] = useState("");
  const [productDiscrip, setProductDiscrip] = useState("");
  const [productPrice, setProductPrice] = useState("");

  return (
    <div>
      <h1>Bienvenue dans votre espace</h1>

      <div className="Siin">
        <img
          src="https://i.unimedias.fr/2017/02/23/istock-545550406.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=227&w=405"
          alt="client space"
        ></img>
      </div>

      <div className="Siiin">
        <h2>Mes produits</h2>
        <div>Liste des Produits</div>
        <div className="Siiin-dispo">
          {userProds ? (
            userProds.map((e) => (
              <div className="carte" key={e._id}>
                <div className="carte-space">
                <span
                title="Article vendu"
                style={{ fontSize: "x-large", cursor: "pointer" }}
                role="img"
                aria-label="Article vendu"
                onClick={() => {
                  deleteProduct(e._id);
                }}
              >
                🗑️
              </span>
                </div>
                <img className="menu" src={e.photo} alt={e.titre} />
                <h2>{e.titre}</h2>
                <p>Prix : {formatPrix(e.prix)} </p>
                

                {/* <ModalEdite e={e} /> */}

                {/* <button
                onClick={() => {
                  this.props.delete(e._id);
                }}
              >
                🗑
              </button> */}
              </div>
            ))
          ) : (
            <div>Pas d'article mise en vente</div>
          )}
        </div>
      </div>

      
      <div className="Siin">
        <h2>Ajouter Produit</h2>
        <form>
          <p>Produit</p>
          <input
            type="text"
            placeholder="Entrer le nom de l'article"
            required
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
          />
          <p>Type</p>
          <select onChange={(e) => setProductType(e.target.value)}>
            <option value="">--</option>
            <option value="Vetement">Vetement</option>
            <option value="Jouet">Jouet</option>
            <option value="Meuble">Meuble</option>
            <option value="Decoration">Decoration</option>
          </select>
          <p>Etat</p>
          <select onChange={(e) => setProductState(e.target.value)}>
            <option value="--">--</option>
            <option value="Ancienne">Ancienne</option>
            <option value="Neuve">Neuve</option>
          </select>
          <p>Sexe</p>
          <select onChange={(e) => setProductSex(e.target.value)}>
            <option value="--">--</option>
            <option value="Fille">Fille</option>
            <option value="Garçon">Garçon</option>
            <option value="Unisex">Unisex</option>
          </select>
          <p>Statut</p>
          <select onChange={(e) => setProductDispo(e.target.value)}>
            <option value="--">--</option>
            <option value="Disponible">Disponible</option>
            <option value="Vendu">Vendu</option>
          </select>
          <p>Photo</p>
          <input
            type="text"
            placeholder="Donner le lien du photo "
            required
            value={productPic}
            onChange={(e) => setProductPic(e.target.value)}
          />
          <p>Description</p>
          <input
            type="text"
            placeholder="Entrer la description du produit"
            required
            value={productDiscrip}
            onChange={(e) => setProductDiscrip(e.target.value)}
          />
          <p>Prix</p>
          <input
            type="Number"
            placeholder="Entrer le prix"
            required
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <div>
            <button
              onClick={() =>
                postProduct({
                  titre: productTitle,
                  type: productType,
                  etat: productState,
                  sex: productSex,
                  photo: productPic,
                  disponibilité: productDisp,
                  description: productDiscrip,
                  prix: productPrice,
                })
              }
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userProds: state.userprod,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postProduct: (product) => dispatch(postProduct(product)),
  getProduct: () => dispatch(getProductByUserFromApi()),
  deleteProduct: (_id) => dispatch(deleteProductFromApi(_id)),
  editeProduct: (el) => dispatch(editeProductFromApi(el)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Client);
