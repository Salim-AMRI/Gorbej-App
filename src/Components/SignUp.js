import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { GetUsersFromApi } from "../Action/userActions";

class SignUp extends Component {
  verif() {
    console.log(this.state)
    const x = this.props.user.filter((el) => el.name === this.state.name && el.pass=== this.state.pass);

    if (x.length === 0) 
    {alert("Données invalides")}
    else
    {window.location.pathname = "/home";}
  }
  componentDidMount() {
    this.props.getAlluser();
    console.log("eeddd", this.props.users);
  }
  render() {
    return (
      <div>
        <div className="Sin">
          <div className="Siin">
            <h1>s'Authentifier</h1>
            <Link to="/cxn">
              <button className="btn"> Inscription</button>
            </Link>{" "}
            <div>
              <span>Nom d'utilisateur</span>
              <input
                type="text"
                placeholder="Entrer le nom d'utilisateur"
                required
                onChange={(e) => this.setState({ name: e.target.value })}
              />
              <span>Mot de passe</span>
              <input
                type="password"
                placeholder="Entrer le mot de passe"
                onChange={(e) => this.setState({ pass: e.target.value })}
              />
              <button onClick={() => this.verif()}>Se connecter</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  getAlluser: () => dispatch(GetUsersFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
