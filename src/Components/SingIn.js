import React, { useState } from "react";
import { connect } from "react-redux";
import { postUser } from "../Action/userActions";
import { Link } from "react-router-dom";

const SingIn = ({ addPerson }) => {
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userRole, setUserRole] = useState("Client");

  return (
    <div className="Sin">
      <div className="Siin">
        <h1>Inscription</h1>

        <Link to="/auto">
          <button className="btn"> Authentification</button>
        </Link>

        <form>
          <span>Nom d'utilisateur</span>
          <input
            type="text"
            placeholder="Entrer le nom d'utilisateur"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <span>Mail</span>
          <input
            type="text"
            placeholder="Entrer le mail "
            required
            value={userMail}
            onChange={(e) => setUserMail(e.target.value)}
          />
          <span>Mot de passe</span>
          <input
            type="password"
            placeholder="Entrer le mot de passe"
            minLength="8"
            required
            value={userPass}
            onChange={(e) => setUserPass(e.target.value)}
          />
          <span>Je suis</span>
          <input
            type="text"
            required
            value={userRole}
            onChange={(e) => setUserRole("Administrateur")}
          />
          <Link to ="/carte" className="margin">
            <button
              onClick={() =>
                addPerson({
                  name: userName,
                  mail: userMail,
                  pass: userPass,
                  role: userRole,
                })
              }
            >
              S'inscrire
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addPerson: (user) => dispatch(postUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingIn);
