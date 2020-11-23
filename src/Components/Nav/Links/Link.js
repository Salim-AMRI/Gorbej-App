import React from "react";

function Link() {
  return (
    <div className="link">
      <a href="/admin">Administrateur</a>
      <a href="/client" className="client-link">Client</a>
      <a href="/">Accueil</a>
      <a href="/home">Produits</a>
      <a href="/panier">Panier</a> 
      <a href="/cnx">Connexion</a>
      <a href="/signup">Deconnexion</a>
    </div>
  );
}

export default Link;
