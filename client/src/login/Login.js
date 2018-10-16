import React from 'react';
import { Input } from "/Users/williamcooper/workspace/bet/client/src/components/Form/Input.js";
import { FormBtn } from "/Users/williamcooper/workspace/bet/client/src/components/Form/FormBtn.js";
import { Col, Row } from "/Users/williamcooper/workspace/bet/client/src/components/Grid";
import './login.css';

class Login extends React.Component {
    
    //push
    // goToHome  = () => {
    //     this.props.history.push('/home');
    // };

    //replace
    replaceURL = () => {
        this.props.history.replace('/home');
    };

    frontDoor = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <div className="container-fluid">
            <div className="box">
            <Row>
            <Col size="md-4" />
            <Col size="md-4" >
                <form className="logIn">
                    <h1 className="title"> Bet! </h1>
                    <break></break>
                    <break></break>
                    <p>User Name: <Input name="LogIn" placeholder="(required)" /></p> 
                    <p>Password: <Input name="Password" placeholder="(required)" /> </p>
                    <div className="button-container">
                <FormBtn onClick={this.replaceURL}>Log In</FormBtn>
                <FormBtn onClick={this.frontDoor}>Sign Up</FormBtn>
                    </div>
                </form>
            </Col>
            <Col size="md-4" />
        </Row>
            </div>
      </div>
        );
      }
    }
export default Login;