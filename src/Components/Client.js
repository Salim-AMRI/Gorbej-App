import React, { useState } from "react";
import { connect } from "react-redux";
import { postProduct } from "../Action/productActions";
import Product from '../Components/product'

const Client = ({ postProduct }) => {
  const [productTitle, setProductTitle] = useState("");
  const [productType, setProductType] = useState("");
  const [productState, setProductState] = useState("Ancienne");
  const [productPic, setProductPic] = useState("");
  const [productDiscrip, setProductDiscrip] = useState("");
  const [productPrice, setProductPrice] = useState("");

  return (
    <div>
      <h1>Bienvenue dans votre espace</h1>
      <div className="Siin">
      <h2>Mes produits</h2>
        <div>
          Liste des Produits
          
        </div>
        <p>
          N.B : Les produits avec un arriere plan jaune sont les produits
          commandés par un client et en cours de reception
        </p>
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
          <input
            type="text"
            placeholder="Entrer le type "
            required
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
          />
          <p>Etat</p>
          <input
            type="text"
            required
            value={productState}
            onChange={(e) => setProductState("Neuve")}
          />
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
                  photo: productPic,
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  postProduct: (product) => dispatch(postProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Client);
