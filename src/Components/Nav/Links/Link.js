import React from "react";

function Link() {
  return (
    <div className="link">
      {/*<a href="/admin">Mon Espace</a>*/}
      <a href="/client">Mon Espace</a>
      <a href="/home">Produits</a>
      {/*<a href="/auto">Connexion</a>*/}
      <a href="/signup" onClick={()=>{localStorage.removeItem("_id")}}>Deconnexion</a>
    </div>
  );
}

export default Link;
