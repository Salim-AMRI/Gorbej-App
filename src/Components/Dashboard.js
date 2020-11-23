import React, { Component } from "react";
import { connect } from "react-redux";
import { GetUsersFromApi } from "../Action/userActions";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
//import { Link } from "react-router-dom";

class Dashboard extends Component {
  state = {
    el: null,
  };

  componentDidMount() {
    this.props.getAllUser();
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
    const { user } = this.props;
    const toutUsers = user.length ? (
      user.map((el) => {
        return (
          <div className="carte" key={el.id}>
            <h2 onClick={() => this.openModal(el)}>{el.name}</h2>
          </div>
        );
      })
    ) : (
      <p>La liste des clients n'est pas encore prête</p>
    );
    return (
      <div>
        <h1>TOUT LES CLIENTS</h1>
        <Fade bottom cascade={true}>
          <div className="top">{toutUsers}</div>
        </Fade>
        {/* <div>
          <Link to="/enCours">
            <button>Commandes en cours</button>
          </Link>
        </div> */}
        {el && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <button className="close-modal" onClick={this.closeModal}>
              x
            </button>
            <Zoom>
              <div className="produit-description">
                <h1 className="titre-modal">{el.name}</h1>
                <div className="produit-description-detail">
                  <p className="titre-modal">{el.cin}</p>
                  <p className="titre-modal">{el.adress}</p>
                  <p className="titre-modal">{el.tel}</p>
                  <p className="titre-modal">{el.mail}</p>
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
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllUser: () => dispatch(GetUsersFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
