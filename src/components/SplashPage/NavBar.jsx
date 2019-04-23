import React from 'react';
import Modal from 'react-modal';
import SignupFormContainer from '../Session/SignupFormContainer';
import LoginForm from '../Session/LoginForm';

const modalStyle = {
    content: {
        border: '1px solid #EBEBEB',
        borderRadius: '4px',
        backgroundColor: '#F6F8FA',
        bottom: 'auto',
        minHeight: '10rem',
        left: '50%',
        padding: '2rem',
        position: 'fixed',
        right: 'auto',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        minWidth: '20rem',
        width: '40%',
        maxWidth: '60rem',
        textAlign: 'center'
    }
}

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalType: '',
            modalIsOpen: false
        }
    }

    openModal(e) {
        Modal.setAppElement('#splash-page-container');
        if (e.target.textContent === "Sign Up") {
            this.setState({ 
                modalType: "signup",
                modalIsOpen: true
            })
        } else if (e.target.textContent === "Login") {
            this.setState({ 
                modalType: "login",
                modalIsOpen: true
            })
        }
    };

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar-container">
                    <img src="https://wrklyf.com/branding/wrklyf-logo.png" className="logo-image" alt=""/>
                    <div>
                        <button onClick={this.openModal.bind(this)}>Sign Up</button>
                        <button onClick={this.openModal.bind(this)}>Login</button>
                    </div>
                </nav>
                <Modal 
                    closeTimeoutMS={500}
                    isOpen={this.state.modalIsOpen} 
                    onRequestClose={this.closeModal.bind(this)}
                    style= { modalStyle }
                >
                    { this.state.modalType === "signup" ? <SignupFormContainer/> : <LoginForm/> }
                </Modal>
            </React.Fragment>
        )
    }
};

export default NavBar;