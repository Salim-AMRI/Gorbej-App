import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <div className="cover-img">
          <div>Prêts à faire du tri dans vos grenier ?</div>
        </div>
        <h1>Découvrir comment ça marche</h1>
        <h2>Vendre, c’est simple !</h2>
        <div className="vente">
          <div>
            <img
              src="https://www.vinted.fr/assets/how-it-works/normal/how-to-sell-step1-0f43594aac6324620b6a4b523964b81f7e480da3caf19f080817556ac3ba7336.png"
              alt="Mon article"
            />
            <h2>1. Mets en ligne gratuitement</h2>
            <p className="achat">
              Prends ton article en photo, décris-le et fixe ton prix. Clique
              sur “Ajouter” et c’est en ligne !
            </p>
          </div>
          <div>
            <img
              src="https://www.vinted.fr/assets/how-it-works/normal/how-to-sell-step2-718baa5263acd1520e6c5c2b5e5ea5084f683e7b3d7a79c23c3829a58fb584ae.png"
              alt="Mon colis"
            />
            <h2>2. Vends et envoie facilement</h2>
            <p className="achat">
              Vendu ! Emballe ton article et imprime le bordereau d’envoi. Tu as
              5 jours pour le déposer à la poste la plus proche de chez toi.
            </p>
          </div>
          <div>
            <img
              src="https://www.vinted.fr/assets/how-it-works/normal/how-to-sell-step3-b0bafc767c004484cf132375ea05e6e4ab854d70cba53a894a97801c3cd356c8.png"
              alt="Mon argent"
            />
            <h2>3. Jour de paie !</h2>
            <p className="achat">
              Il y a 0 frais de vente, ce que tu gagnes est à toi. Tu recevras
              l’argent quand l’acheteur aura validé la réception de l’article.
            </p>
          </div>
        </div>

        <h2>Achète en toute sécurité !</h2>
        <div className="vente">
          <div>
            <img
              src="https://www.vinted.fr/assets/how-it-works/normal/shopping-step1-c22b6e06e06468e108f4990f158e754e1370cb70747f9673d2a3a447b9c3a6a3.png"
              alt="Mon article"
            />
            <h2>1. Trouve-le</h2>
            <p className="achat">
              Trouve ton bonheur parmi des millions d’articleset des milliers de
              marques.
            </p>
          </div>
          <div>
            <img
              src="https://www.vinted.fr/assets/how-it-works/normal/shopping-step2-068fa54384178c08c67559ee9980755001b8ddd81da21af6ff52aa578df618d5.png"
              alt="Mon colis"
            />
            <h2>2. Achète-le</h2>
            <p className="achat">
              Echange avec le vendeur et achète en un simple clic.
            </p>
          </div>
          <div>
            <img
              src="https://www.vinted.fr/assets/how-it-works/normal/shopping-step3-db3e8ffdab43848faeb88ab9464db4f573582d90e55a9955eb559742e89d3224.png"
              alt="Mon argent"
            />
            <h2>3. Reçois-le</h2>
            <p className="achat">
              Suis l’arrivée de ton article grâce à la date de livraison
              estimée. Patience, ton article sera bientôt avec toi. Paie à la
              poste lors de la reception de votre colis.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>Tu es prêt(e) ?</h2>
        <Link to="/auto">
        <button className="re-size">Commencer à acheter</button> </Link>
        <Link to="/auto">
        <button className="re-size">Commencer à vendre</button></Link>
      </div>
    </div>
  );
};

export default Home;
