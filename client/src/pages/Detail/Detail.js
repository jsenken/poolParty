import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Ask from "../../components/Ask/Ask"
// import PayPalBtn from "../../components/PayPalBtn/PayPalBtn";
// import Option from "../../components/Option/Option"
import { FormBtn } from "../../components/Form";
// import CardBtn from "../../components/CardBtn/CardBtn";
import { logoutUser } from '../../actions/authentication';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import "./Detail.css";
import patriots from '../../media/patriots-logo.png';
import saints from '../../media/saints-logo.png';



class Detail extends Component {
  state = {
    pool: {},
    poolname: "",
    groupname:"",
    username: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: "",
    answer6: "",
    answer7: "",
    answer8: "",
    answer9: "",
    answer10: "",
    answer11: "",
    answer12: "",
    answer13: "",
    answer14: "",
    answer15: "",
    answer16: "",
    answer17: "",
    answer18: "",
    answer19: "",
    answer20: "",
    answer21: "",
    answer22: "",
    answer23: "",
    answer24: "",
    answer25: "",
    answer26: "",
    answer27: "",
    answer28: "",
    answer29: "",
    answer30: "",
    answer31: "",
    answer32: "",
    answer33: "",
    answer34: "",
    answer35: "",
    answer36: "",
    answer37: "",
    answer38: "",
    answer39: "",
    answer40: "",
    answer41: "",
    answer42: "",
    answer43: "",
    answer44: "",
    answer45: "",
    answer46: "",
    answer47: "",
    answer48: "",
    answer49: "",
    answer50: "",
    answer51: "",
    answer52: "",
    answer53: ""
  };
  // When this component mounts, grab the pool with the _id of this.props.match.params.id
  // e.g. localhost:3000/pools/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getPool(this.props.match.params.id)
      .then(res => this.setState({ pool: res.data }))
      .then(this.findUserName)
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  redirect = () => {
    this.props.history.push(`/userHome`)
  }


  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.username)
    if (this.state.answer1) {
      API.saveAnswers({
        poolname: this.state.pool.name,
        username: this.state.username,
        answer1: this.state.answer1,
        answer2: this.state.answer2,  
        answer3: this.state.answer3,
        answer4: this.state.answer4,
        answer5: this.state.answer5,
        answer6: this.state.answer6,
        answer7: this.state.answer7,
        answer8: this.state.answer8,
        answer9: this.state.answer9,
        answer10: this.state.answer10,
        answer11: this.state.answer11,
        answer12: this.state.answer12,
        answer13: this.state.answer13,
        answer14: this.state.answer14,
        answer15: this.state.answer15,
        answer16: this.state.answer16,
        answer17: this.state.answer17,
        answer18: this.state.answer18,
        answer19: this.state.answer19,
        answer20: this.state.answer20,
        answer21: this.state.answer21,
        answer22: this.state.answer22,
        answer23: this.state.answer23,
        answer24: this.state.answer24,
        answer25: this.state.answer25,
        answer26: this.state.answer26,
        answer27: this.state.answer27,
        answer28: this.state.answer28,
        answer29: this.state.answer29,
        answer30: this.state.answer30,
        answer31: this.state.answer31,
        answer32: this.state.answer32,
        answer33: this.state.answer33,
        answer34: this.state.answer34,
        answer35: this.state.answer35,
        answer36: this.state.answer36,
        answer37: this.state.answer37,
        answer38: this.state.answer38,
        answer39: this.state.answer39,
        answer40: this.state.answer40,
        answer41: this.state.answer41,
        answer42: this.state.answer42,
        answer43: this.state.answer43,
        answer44: this.state.answer44,
        answer45: this.state.answer45,
        answer46: this.state.answer46,
        answer47: this.state.answer47,
        answer48: this.state.answer48,
        answer49: this.state.answer49,
        answer50: this.state.answer50,
        answer51: this.state.answer51,
        answer52: this.state.answer52,
        answer53: this.state.answer53,
        score: 0,
      })
      
      this.redirect()
    }
  };

  findUserName = () => {
    const { user } = this.props.auth;
    console.log(user.userName)
    this.setState({username: user.userName})
  }

  changeAnswer1a = ()  => {
    this.setState({ answer1:this.state.pool.option1a })

};

  changeAnswer1b = ()  => {
    this.setState({ answer1:this.state.pool.option1b })

};

changeAnswer2a = ()  => {
  this.setState({ answer2:this.state.pool.option2a })

};

changeAnswer2b = ()  => {
  this.setState({ answer2:this.state.pool.option2b })

};

changeAnswer3a = ()  => {
  this.setState({ answer3:this.state.pool.option3a })

};

changeAnswer3b = ()  => {
  this.setState({ answer3:this.state.pool.option3b })

};

changeAnswer4a = ()  => {
  this.setState({ answer4:this.state.pool.option4a })

};

changeAnswer4b = ()  => {
  this.setState({ answer4:this.state.pool.option4b })

};

changeAnswer5a = ()  => {
  this.setState({ answer5:this.state.pool.option5a })
};
changeAnswer5b = ()  => {
  this.setState({ answer5:this.state.pool.option5b })
};

changeAnswer6a = ()  => {
  this.setState({ answer6:this.state.pool.option6a })
};
changeAnswer6b = ()  => {
  this.setState({ answer6:this.state.pool.option6b })
};
changeAnswer6c = ()  => {
  this.setState({ answer6:this.state.pool.option6c })
};
changeAnswer6d = ()  => {
  this.setState({ answer6:this.state.pool.option6d})
};
changeAnswer6e = ()  => {
  this.setState({ answer6:this.state.pool.option6e })
};
changeAnswer6f = ()  => {
  this.setState({ answer6:this.state.pool.option6f })
};
changeAnswer7a = ()  => {
  this.setState({ answer7:this.state.pool.option7a })
};
changeAnswer7b = ()  => {
  this.setState({ answer7:this.state.pool.option7b })
};

changeAnswer8a = ()  => {
  this.setState({ answer8:this.state.pool.option8a })
};
changeAnswer8b = ()  => {
  this.setState({ answer8:this.state.pool.option8b })
};

changeAnswer9a = ()  => {
  this.setState({ answer9:this.state.pool.option9a })
};
changeAnswer9b = ()  => {
  this.setState({ answer9:this.state.pool.option9b })
};

changeAnswer10a = ()  => {
  this.setState({ answer10:this.state.pool.option10a })
};
changeAnswer10b = ()  => {
  this.setState({ answer10:this.state.pool.option10b })
};

changeAnswer11a = ()  => {
  this.setState({ answer11:this.state.pool.option11a })
};
changeAnswer11b = ()  => {
  this.setState({ answer11:this.state.pool.option11b })
};
changeAnswer11c = ()  => {
  this.setState({ answer11:this.state.pool.option11c })
};

changeAnswer12a = ()  => {
  this.setState({ answer12:this.state.pool.option12a })
};
changeAnswer12b = ()  => {
  this.setState({ answer12:this.state.pool.option12b })
};

changeAnswer13a = ()  => {
  this.setState({ answer13:this.state.pool.option13a })
};
changeAnswer13b = ()  => {
  this.setState({ answer13:this.state.pool.option13b })
};

changeAnswer14a = ()  => {
  this.setState({ answer14:this.state.pool.option14a })
};
changeAnswer14b = ()  => {
  this.setState({ answer14:this.state.pool.option14b })
};

changeAnswer15a = ()  => {
  this.setState({ answer15:this.state.pool.option15a })
};
changeAnswer15b = ()  => {
  this.setState({ answer15:this.state.pool.option15b })
};

changeAnswer16a = ()  => {
  this.setState({ answer16:this.state.pool.option16a })
};
changeAnswer16b = ()  => {
  this.setState({ answer16:this.state.pool.option16b })
};
changeAnswer16c = ()  => {
  this.setState({ answer16:this.state.pool.option16c })
};
changeAnswer16d = ()  => {
  this.setState({ answer16:this.state.pool.option16d })
};
changeAnswer16e = ()  => {
  this.setState({ answer16:this.state.pool.option16e })
};

changeAnswer17a = ()  => {
  this.setState({ answer17:this.state.pool.option17a })
};
changeAnswer17b = ()  => {
  this.setState({ answer17:this.state.pool.option17b })
};

changeAnswer18a = ()  => {
  this.setState({ answer18:this.state.pool.option18a })
};
changeAnswer18b = ()  => {
  this.setState({ answer18:this.state.pool.option18b })
};

changeAnswer19a = ()  => {
  this.setState({ answer19:this.state.pool.option19a })
};
changeAnswer19b = ()  => {
  this.setState({ answer19:this.state.pool.option19b })
};

changeAnswer20a = ()  => {
  this.setState({ answer20:this.state.pool.option20a })
};
changeAnswer20b = ()  => {
  this.setState({ answer20:this.state.pool.option20b })
};
changeAnswer20c = ()  => {
  this.setState({ answer20:this.state.pool.option20c })
};
changeAnswer20d = ()  => {
  this.setState({ answer20:this.state.pool.option20d })
};
changeAnswer20e = ()  => {
  this.setState({ answer20:this.state.pool.option20e })
};
changeAnswer20f = ()  => {
  this.setState({ answer20:this.state.pool.option20f })
};
changeAnswer20g = ()  => {
  this.setState({ answer20:this.state.pool.option20g })
};
changeAnswer20h = ()  => {
  this.setState({ answer20:this.state.pool.option20h })
};

changeAnswer21a = ()  => {
  this.setState({ answer21:this.state.pool.option21a })
};
changeAnswer21b = ()  => {
  this.setState({ answer21:this.state.pool.option21b })
};
changeAnswer21c = ()  => {
  this.setState({ answer21:this.state.pool.option21c })
};

changeAnswer22a = ()  => {
  this.setState({ answer22:this.state.pool.option22a })
};
changeAnswer22b = ()  => {
  this.setState({ answer22:this.state.pool.option22b })
};
changeAnswer22c = ()  => {
  this.setState({ answer22:this.state.pool.option22c })
};
changeAnswer22d = ()  => {
  this.setState({ answer22:this.state.pool.option22d })
};
changeAnswer22e = ()  => {
  this.setState({ answer22:this.state.pool.option22e })
};

changeAnswer23a = ()  => {
  this.setState({ answer23:this.state.pool.option23a })
};
changeAnswer23b = ()  => {
  this.setState({ answer23:this.state.pool.option23b })
};

changeAnswer24a = ()  => {
  this.setState({ answer24:this.state.pool.option24a })
};
changeAnswer24b = ()  => {
  this.setState({ answer24:this.state.pool.option24b })
};

changeAnswer25a = ()  => {
  this.setState({ answer25:this.state.pool.option25a })
};
changeAnswer25b = ()  => {
  this.setState({ answer25:this.state.pool.option25b })
};

changeAnswer26a = ()  => {
  this.setState({ answer26:this.state.pool.option26a })
};
changeAnswer26b = ()  => {
  this.setState({ answer26:this.state.pool.option26b })
};

changeAnswer27a = ()  => {
  this.setState({ answer27:this.state.pool.option27a })
};
changeAnswer27b = ()  => {
  this.setState({ answer27:this.state.pool.option27b })
};

changeAnswer28a = ()  => {
  this.setState({ answer28:this.state.pool.option28a })
};
changeAnswer28b = ()  => {
  this.setState({ answer28:this.state.pool.option28b })
};

changeAnswer29a = ()  => {
  this.setState({ answer29:this.state.pool.option29a })
};
changeAnswer29b = ()  => {
  this.setState({ answer29:this.state.pool.option29b })
};

changeAnswer30a = ()  => {
  this.setState({ answer30:this.state.pool.option30a })
};
changeAnswer30b = ()  => {
  this.setState({ answer30:this.state.pool.option30b })
};

changeAnswer31a = ()  => {
  this.setState({ answer31:this.state.pool.option31a })
};
changeAnswer31b = ()  => {
  this.setState({ answer31:this.state.pool.option31b })
};

changeAnswer32a = ()  => {
  this.setState({ answer32:this.state.pool.option32a })
};
changeAnswer32b = ()  => {
  this.setState({ answer32:this.state.pool.option32b })
};
changeAnswer33a = ()  => {
  this.setState({ answer33:this.state.pool.option33a })
};
changeAnswer33b = ()  => {
  this.setState({ answer33:this.state.pool.option33b })
};

changeAnswer34a = ()  => {
  this.setState({ answer34:this.state.pool.option34a })
};
changeAnswer34b = ()  => {
  this.setState({ answer34:this.state.pool.option34b })
};

changeAnswer35a = ()  => {
  this.setState({ answer35:this.state.pool.option35a })
};
changeAnswer35b = ()  => {
  this.setState({ answer35:this.state.pool.option35b })
};

changeAnswer36a = ()  => {
  this.setState({ answer36:this.state.pool.option36a })
};
changeAnswer36b = ()  => {
  this.setState({ answer36:this.state.pool.option36b })
};

changeAnswer37a = ()  => {
  this.setState({ answer37:this.state.pool.option37a })
};
changeAnswer37b = ()  => {
  this.setState({ answer37:this.state.pool.option37b })
};

changeAnswer38a = ()  => {
  this.setState({ answer38:this.state.pool.option38a })
};
changeAnswer38b = ()  => {
  this.setState({ answer38:this.state.pool.option38b })
};
changeAnswer39a = ()  => {
  this.setState({ answer39:this.state.pool.option39a })
};
changeAnswer39b = ()  => {
  this.setState({ answer39:this.state.pool.option39b })
};
changeAnswer40a = ()  => {
  this.setState({ answer40:this.state.pool.option40a })
};
changeAnswer40b = ()  => {
  this.setState({ answer40:this.state.pool.option40b })
};
changeAnswer41a = ()  => {
  this.setState({ answer41:this.state.pool.option41a })
};
changeAnswer41b = ()  => {
  this.setState({ answer41:this.state.pool.option41b })
};
changeAnswer42a = ()  => {
  this.setState({ answer42:this.state.pool.option42a })
};
changeAnswer42b = ()  => {
  this.setState({ answer42:this.state.pool.option42b })
};
changeAnswer43a = ()  => {
  this.setState({ answer43:this.state.pool.option43a })
};
changeAnswer43b = ()  => {
  this.setState({ answer43:this.state.pool.option43b })
};
changeAnswer44a = ()  => {
  this.setState({ answer44:this.state.pool.option44a })
};
changeAnswer44b = ()  => {
  this.setState({ answer44:this.state.pool.option44b })
};
changeAnswer45a = ()  => {
  this.setState({ answer45:this.state.pool.option45a })
};
changeAnswer45b = ()  => {
  this.setState({ answer45:this.state.pool.option45b })
};
changeAnswer46a = ()  => {
  this.setState({ answer46:this.state.pool.option46a })
};
changeAnswer46b = ()  => {
  this.setState({ answer46:this.state.pool.option46b })
};
changeAnswer47a = ()  => {
  this.setState({ answer47:this.state.pool.option47a })
};
changeAnswer47b = ()  => {
  this.setState({ answer47:this.state.pool.option47b })
};
changeAnswer48a = ()  => {
  this.setState({ answer48:this.state.pool.option48a })
};
changeAnswer48b = ()  => {
  this.setState({ answer48:this.state.pool.option48b })
};
changeAnswer48c = ()  => {
  this.setState({ answer48:this.state.pool.option48c })
};
changeAnswer48d = ()  => {
  this.setState({ answer48:this.state.pool.option48d })
};
changeAnswer48e = ()  => {
  this.setState({ answer48:this.state.pool.option48e })
};
changeAnswer48f = ()  => {
  this.setState({ answer48:this.state.pool.option48f })
};

changeAnswer49a = ()  => {
  this.setState({ answer49:this.state.pool.option49a })
};
changeAnswer49b = ()  => {
  this.setState({ answer49:this.state.pool.option49b })
};
changeAnswer49c = ()  => {
  this.setState({ answer49:this.state.pool.option49c })
};
changeAnswer49d = ()  => {
  this.setState({ answer49:this.state.pool.option49d })
};
changeAnswer49e = ()  => {
  this.setState({ answer49:this.state.pool.option49e })
};
changeAnswer50a = ()  => {
  this.setState({ answer50:this.state.pool.option50a })
};
changeAnswer50b = ()  => {
  this.setState({ answer50:this.state.pool.option50b })
};
changeAnswer50c = ()  => {
  this.setState({ answer50:this.state.pool.option50c })
};
changeAnswer51a = ()  => {
  this.setState({ answer51:this.state.pool.option51a })
};
changeAnswer51b = ()  => {
  this.setState({ answer51:this.state.pool.option51b })
};
changeAnswer51c = ()  => {
  this.setState({ answer51:this.state.pool.option51c })
};
changeAnswer51d = ()  => {
  this.setState({ answer51:this.state.pool.option51d })
};
changeAnswer52a = ()  => {
  this.setState({ answer52:this.state.pool.option52a })
};
changeAnswer52b = ()  => {
  this.setState({ answer52:this.state.pool.option52b })
};
changeAnswer52c = ()  => {
  this.setState({ answer52:this.state.pool.option52c })
};
changeAnswer52d = ()  => {
  this.setState({ answer52:this.state.pool.option52d })
};
changeAnswer52e = ()  => {
  this.setState({ answer52:this.state.pool.option52e })
};
changeAnswer52f = ()  => {
  this.setState({ answer52:this.state.pool.option52f })
};
changeAnswer53a = ()  => {
  this.setState({ answer53:this.state.pool.option53a })
};
changeAnswer53b = ()  => {
  this.setState({ answer53:this.state.pool.option53b })
};
changeAnswer53c = ()  => {
  this.setState({ answer53:this.state.pool.option53c })
};
changeAnswer53d = ()  => {
  this.setState({ answer53:this.state.pool.option53d })
};
changeAnswer53e = ()  => {
  this.setState({ answer53:this.state.pool.option53e })
};




  render() {

    const { user } = this.props.auth;


    return (
      <Container fluid>
        <Row>
          <Col size="md-3">
            <img class="helmet" alt="pats" src={patriots}></img>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>
                {this.state.pool.name}
              </h1>
            </Jumbotron>
          </Col>
          <Col size="md-3">
            <img class="helmet" alt="saints" src={saints}></img>
          </Col>
        </Row>
        <Row>
          <Col size ="md-12">
            <h1>{user.userName}'s Entry</h1>
          </Col>
        </Row>
{/* Section Header */}
        <Row>
          <Col size="md-12">
            <div className ="header1">
              <h1> Anthem/Coin Toss</h1>
            </div>
          </Col>
        </Row>
{/* Question 1 */}
        <Row>
          <Col size ="md-1"><h2>1</h2></Col>
          <Col size ="md-6">
            <Ask
            name={this.state.pool.ask1}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer1a}
              >
            {this.state.pool.option1a}
            </button>
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer1b}
              >
            {this.state.pool.option1b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer1} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question 2 */}
        <Row>
          <Col size ="md-1"><h2>2</h2></Col>
          <Col size ="md-6">
            <Ask
            name={this.state.pool.ask2}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer2a}
              >
            {this.state.pool.option2a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer2b}
              >
            {this.state.pool.option2b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer2} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>3</h2></Col>
          <Col size ="md-6">
            <Ask
            name={this.state.pool.ask3}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer3a}
              >
            {this.state.pool.option3a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer3b}
              >
            {this.state.pool.option3b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer3} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>4</h2></Col>
          <Col size ="md-6">
            <Ask
            name={this.state.pool.ask4}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer4a}
              >
            {this.state.pool.option4a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer4b}
              >
            {this.state.pool.option4b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer4} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>5</h2></Col>
          <Col size ="md-5">
            <Ask
            name={this.state.pool.ask5}
            />              
          </Col>
          <Col size ="md-3">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer5a}
              >
            {this.state.pool.option5a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer5b}
              >
            {this.state.pool.option5b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer5} </h2>
          </Col>
        </Row>
{/* Section Header */}
        <Row>
          <Col size="md-12">
            <div className ="header3">
              <h1> 1st Quarter</h1>
            </div>
          </Col>
        </Row>
{/* Question */}
        <Row>
          <Col size ="md-1"><h2>6</h2></Col>
          <Col size ="md-6">
            <Ask
            name={this.state.pool.ask6}
            />              
          </Col>
          <Col size ="md-3">
          <Row>
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer6a}
              >
            {this.state.pool.option6a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer6b}
              >
            {this.state.pool.option6b}
            </button>  
            <div className="divider"></div>     
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer6c}
              >
            {this.state.pool.option6c}
            </button>   
            </Row>
            <Row>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer6d}
              >
            {this.state.pool.option6d}
            </button>    
            <div className="divider"></div>   
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer6e}
              >
            {this.state.pool.option6e}
            </button>    
            <div className="divider"></div>   
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer6f}
              >
            {this.state.pool.option6f}
            </button>     
            </Row>  
          </Col>
          <Col size="md-2">
          <h2> Answer: {this.state.answer6} </h2>
          </Col>
        </Row>
        <hr></hr>
{/* Question */}
        <Row>
          <Col size ="md-1"><h2>7</h2></Col>
          <Col size ="md-5">
            <Ask
            name={this.state.pool.ask7}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer7a}
              >
            {this.state.pool.option7a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer7b}
              >
            {this.state.pool.option7b}
            </button> 
          </Col>
          <Col size="md-4">      
          <h2> Answer: {this.state.answer7} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>8</h2></Col>
          <Col size ="md-6">
            <Ask
            name={this.state.pool.ask8}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer8a}
              >
            {this.state.pool.option8a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer8b}
              >
            {this.state.pool.option8b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer8} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>9</h2></Col>
          <Col size ="md-5">
            <Ask
            name={this.state.pool.ask9}
            />              
          </Col>
          <Col size ="md-4">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer9a}
              >
            {this.state.pool.option9a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer9b}
              >
            {this.state.pool.option9b}
            </button>       
          </Col>
          <Col size="md-2">
          <h2> Answer: {this.state.answer9} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>10</h2></Col>
          <Col size ="md-7">
            <Ask
            name={this.state.pool.ask10}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer10a}
              >
            {this.state.pool.option10a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer10b}
              >
            {this.state.pool.option10b}
            </button>       
          </Col>
          <Col size="md-2">
          <h2> Answer: {this.state.answer10} </h2>
          </Col>
        </Row>
{/* Section Header */}
        <Row>
          <Col size="md-12">
            <div className ="header4">
              <h1> 2nd Quarter</h1>
            </div>
          </Col>
        </Row>
{/* Question */}
        <Row>
          <Col size ="md-1"><h2>11</h2></Col>
          <Col size ="md-4">
            <Ask
            name={this.state.pool.ask11}
            />              
          </Col>
          <Col size ="md-4">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer11a}
              >
            {this.state.pool.option11a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer11b}
              >
            {this.state.pool.option11b}
            </button>       
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer11c}
              >
            {this.state.pool.option11c}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer11} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>12</h2></Col>
          <Col size ="md-5">
            <Ask
            name={this.state.pool.ask12}
            />              
          </Col>
          <Col size ="md-3">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer12a}
              >
            {this.state.pool.option12a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer12b}
              >
            {this.state.pool.option12b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer12} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>13</h2></Col>
          <Col size ="md-6">
            <Ask
            name={this.state.pool.ask13}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer13a}
              >
            {this.state.pool.option13a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer13b}
              >
            {this.state.pool.option13b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer13} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>14</h2></Col>
          <Col size ="md-6">
            <Ask
            name={this.state.pool.ask14}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer14a}
              >
            {this.state.pool.option14a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer14b}
              >
            {this.state.pool.option14b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer14} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>15</h2></Col>
          <Col size ="md-6">
            <Ask
            name={this.state.pool.ask15}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer15a}
              >
            {this.state.pool.option15a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer15b}
              >
            {this.state.pool.option15b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer15} </h2>
          </Col>
        </Row>
{/* Section Header */}
        <Row>
          <Col size="md-12">
            <div className ="header5">
              <h1> Halftime Show</h1>
            </div>
          </Col>
        </Row>
{/* Question */}
        <Row>
          <Col size ="md-1"><h2>16</h2></Col>
          <Col size ="md-3">
            <Ask
            name={this.state.pool.ask16}
            />              
          </Col>
          <Col size ="md-5">
            <Row>
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer16a}
              >
            {this.state.pool.option16a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer16b}
              >
            {this.state.pool.option16b}
            </button>    
            <div className="divider"></div>
              <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer16c}
              >
            {this.state.pool.option16c}
            </button>   
            </Row>
            <Row>    
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer16d}
              >
            {this.state.pool.option16d}
            </button>    
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer16e}
              >
            {this.state.pool.option16e}
            </button>    
            </Row>    
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer16} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>17</h2></Col>
          <Col size ="md-6">
            <Ask
            name={this.state.pool.ask17}
            />              
          </Col>
          <Col size ="md-3">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer17a}
              >
            {this.state.pool.option17a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer17b}
              >
            {this.state.pool.option17b}
            </button>       
          </Col>
          <Col size="md-2">
          <h2> Answer: {this.state.answer17} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>18</h2></Col>
          <Col size ="md-6">
            <Ask
            name={this.state.pool.ask18}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer18a}
              >
            {this.state.pool.option18a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer18b}
              >
            {this.state.pool.option18b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer18} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>19</h2></Col>
          <Col size ="md-6">
            <Ask
            name={this.state.pool.ask19}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer19a}
              >
            {this.state.pool.option19a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer19b}
              >
            {this.state.pool.option19b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer19} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>20</h2></Col>
          <Col size ="md-5">
            <Ask
            name={this.state.pool.ask20}
            />              
          </Col>
          <Col size ="md-4">
          <Row>
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer20a}
              >
            {this.state.pool.option20a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer20b}
              >
            {this.state.pool.option20b}
            </button>
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer20c}
              >
            {this.state.pool.option20c}
            </button>       
            </Row>
            <Row>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer20d}
              >
            {this.state.pool.option20d}
            </button>  
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer20e}
              >
            {this.state.pool.option20e}
            </button>          
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer20f}
              >
            {this.state.pool.option20f}
            </button>    
            </Row> 
            <Row>           
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer20g}
              >
            {this.state.pool.option20g}
            </button>
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer20h}
              >
            {this.state.pool.option20h}
            </button>       
            </Row>  
          </Col>
          <Col size="md-2">
          <h2> Answer: {this.state.answer20} </h2>
          </Col>
        </Row>
{/* Section Header */}
        <Row>
          <Col size="md-12">
            <div className ="header6">
              <h1> 3rd Quarter</h1>
            </div>
          </Col>
        </Row>
{/* Question */}
        <Row>
          <Col size ="md-1"><h2>21</h2></Col>
          <Col size ="md-5">
            <Ask
            name={this.state.pool.ask21}
            />              
          </Col>
          <Col size ="md-4">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer21a}
              >
            {this.state.pool.option21a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer21b}
              >
            {this.state.pool.option21b}
            </button>    
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer21c}
              >
            {this.state.pool.option21c}
            </button>     
          </Col>
          <Col size="md-2">
          <h2> Answer: {this.state.answer21} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>22</h2></Col>
          <Col size ="md-4">
            <Ask
            name={this.state.pool.ask22}
            />              
          </Col>
          <Col size ="md-4">
          <Row>
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer22a}
              >
            {this.state.pool.option22a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer22b}
              >
            {this.state.pool.option22b}
            </button>       
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer22c}
              >
            {this.state.pool.option22c}
            </button>     
            </Row>
            <Row>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer22d}
              >
            {this.state.pool.option22d}
            </button>     
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer22e}
              >
            {this.state.pool.option22e}
            </button>  
            </Row> 
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer22} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>23</h2></Col>
          <Col size ="md-7">
            <Ask
            name={this.state.pool.ask23}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer23a}
              >
            {this.state.pool.option23a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer23b}
              >
            {this.state.pool.option23b}
            </button>       
          </Col>
          <Col size="md-2">
          <h2> Answer: {this.state.answer23} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>24</h2></Col>
          <Col size ="md-7">
            <Ask
            name={this.state.pool.ask24}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer24a}
              >
            {this.state.pool.option24a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer24b}
              >
            {this.state.pool.option24b}
            </button>       
          </Col>
          <Col size="md-2">
          <h2> Answer: {this.state.answer24} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>25</h2></Col>
          <Col size ="md-3">
            <Ask
            name={this.state.pool.ask25}
            />              
          </Col>
          <Col size ="md-4">
          <Row>
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer25a}
              >
            {this.state.pool.option25a}
            </button>   
            </Row>
            <Row>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer25b}
              >
            {this.state.pool.option25b}
            </button>     
            </Row>   
          </Col>
          <Col size="md-4">
          <h2> Answer: {this.state.answer25} </h2>
          </Col>
        </Row>
{/* Section Header */}
        <Row>
          <Col size="md-12">
            <div className ="header7">
              <h1> 4th Quarter</h1>
            </div>
          </Col>
        </Row>
{/* Question */}
        <Row>
          <Col size ="md-1"><h2>26</h2></Col>
          <Col size ="md-6">
            <Ask
            name={this.state.pool.ask26}
            />              
          </Col>
          <Col size ="md-3">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer26a}
              >
            {this.state.pool.option26a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer26b}
              >
            {this.state.pool.option26b}
            </button>       
          </Col>
          <Col size="md-2">
          <h2> Answer: {this.state.answer26} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>27</h2></Col>
          <Col size ="md-7">
            <Ask
            name={this.state.pool.ask27}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer27a}
              >
            {this.state.pool.option27a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer27b}
              >
            {this.state.pool.option27b}
            </button>       
          </Col>
          <Col size="md-2">
          <h2> Answer: {this.state.answer27} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>28</h2></Col>
          <Col size ="md-7">
            <Ask
            name={this.state.pool.ask28}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer28a}
              >
            {this.state.pool.option28a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer28b}
              >
            {this.state.pool.option28b}
            </button>       
          </Col>
          <Col size="md-2">
          <h2> Answer: {this.state.answer28} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>29</h2></Col>
          <Col size ="md-7">
            <Ask
            name={this.state.pool.ask29}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer29a}
              >
            {this.state.pool.option29a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer29b}
              >
            {this.state.pool.option29b}
            </button>       
          </Col>
          <Col size="md-2">
          <h2> Answer: {this.state.answer29} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>30</h2></Col>
          <Col size ="md-5">
            <Ask
            name={this.state.pool.ask30}
            />              
          </Col>
          <Col size ="md-3">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer30a}
              >
            {this.state.pool.option30a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer30b}
              >
            {this.state.pool.option30b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer30} </h2>
          </Col>
        </Row>
{/* Section Header */}
        <Row>
          <Col size="md-12">
            <div className ="header8">
              <h1> At Any Point</h1>
            </div>
          </Col>
        </Row>
{/* Question */}
        <Row>
          <Col size ="md-1"><h2>31</h2></Col>
          <Col size ="md-7">
            <Ask
            name={this.state.pool.ask31}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer31a}
              >
            {this.state.pool.option31a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer31b}
              >
            {this.state.pool.option31b}
            </button>       
          </Col>
          <Col size="md-2">
          <h2> Answer: {this.state.answer31} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>32</h2></Col>
          <Col size ="md-7">
            <Ask
            name={this.state.pool.ask32}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer32a}
              >
            {this.state.pool.option32a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer32b}
              >
            {this.state.pool.option32b}
            </button>       
          </Col>
          <Col size="md-2">
          <h2> Answer: {this.state.answer32} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>33</h2></Col>
          <Col size ="md-3">
            <Ask
            name={this.state.pool.ask33}
            />              
          </Col>
          <Col size ="md-4">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer33a}
              >
            {this.state.pool.option33a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer33b}
              >
            {this.state.pool.option33b}
            </button>       
          </Col>
          <Col size="md-4">
          <h2> Answer: {this.state.answer33} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>34</h2></Col>
          <Col size ="md-6">
            <Ask
            name={this.state.pool.ask34}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer34a}
              >
            {this.state.pool.option34a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer34b}
              >
            {this.state.pool.option34b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer34} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>35</h2></Col>
          <Col size ="md-6">
            <Ask
            name={this.state.pool.ask35}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer35a}
              >
            {this.state.pool.option35a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer35b}
              >
            {this.state.pool.option35b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer35} </h2>
          </Col>
        </Row>
{/* Section Header */}
        <Row>
          <Col size="md-12">
            <div className ="header9">
              <h1> Game Totals</h1>
            </div>
          </Col>
        </Row>
{/* Question */}
        <Row>
          <Col size ="md-1"><h2>36</h2></Col>
          <Col size ="md-5">
            <Ask
            name={this.state.pool.ask36}
            />              
          </Col>
          <Col size ="md-3">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer36a}
              >
            {this.state.pool.option36a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer36b}
              >
            {this.state.pool.option36b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer36} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>37</h2></Col>
          <Col size ="md-6">
            <Ask
            name={this.state.pool.ask37}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer37a}
              >
            {this.state.pool.option37a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer37b}
              >
            {this.state.pool.option37b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer37} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>38</h2></Col>
          <Col size ="md-6">
            <Ask
            name={this.state.pool.ask38}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer38a}
              >
            {this.state.pool.option38a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer38b}
              >
            {this.state.pool.option38b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer38} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>39</h2></Col>
          <Col size ="md-5">
            <Ask
            name={this.state.pool.ask39}
            />              
          </Col>
          <Col size ="md-3">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer39a}
              >
            {this.state.pool.option39a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer39b}
              >
            {this.state.pool.option39b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer39} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>40</h2></Col>
          <Col size ="md-5">
            <Ask
            name={this.state.pool.ask40}
            />              
          </Col>
          <Col size ="md-3">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer40a}
              >
            {this.state.pool.option40a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer40b}
              >
            {this.state.pool.option40b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer40} </h2>
          </Col>
        </Row>
{/* Section Header */}
        <Row>
          <Col size="md-12">
            <div className ="header10">
              <h1> Crossover Props</h1>
            </div>
          </Col>
        </Row>
{/* Question */}
        <Row>
          <Col size ="md-1"><h2>41</h2></Col>
          <Col size ="md-3">
            <Ask
            name={this.state.pool.ask41}
            />              
          </Col>
          <Col size ="md-5">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer41a}
              >
            {this.state.pool.option41a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer41b}
              >
            {this.state.pool.option41b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer41} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>42</h2></Col>
          <Col size ="md-3">
            <Ask
            name={this.state.pool.ask42}
            />              
          </Col>
          <Col size ="md-5">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer42a}
              >
            {this.state.pool.option42a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer42b}
              >
            {this.state.pool.option42b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer42} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>43</h2></Col>
          <Col size ="md-3">
            <Ask
            name={this.state.pool.ask43}
            />              
          </Col>
          <Col size ="md-5">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer43a}
              >
            {this.state.pool.option43a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer43b}
              >
            {this.state.pool.option43b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer43} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>44</h2></Col>
          <Col size ="md-3">
            <Ask
            name={this.state.pool.ask44}
            />              
          </Col>
          <Col size ="md-5">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer44a}
              >
            {this.state.pool.option44a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer44b}
              >
            {this.state.pool.option44b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer44} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>45</h2></Col>
          <Col size ="md-3">
            <Ask
            name={this.state.pool.ask45}
            />              
          </Col>
          <Col size ="md-5">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer45a}
              >
            {this.state.pool.option45a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer45b}
              >
            {this.state.pool.option45b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer45} </h2>
          </Col>
        </Row>
{/* Section Header */}
        <Row>
          <Col size="md-12">
            <div className ="header11">
              <h1> Commercials/Broadcast Props</h1>
            </div>
          </Col>
        </Row>
{/* Question */}
        <Row>
          <Col size ="md-1"><h2>46</h2></Col>
          <Col size ="md-5">
            <Ask
            name={this.state.pool.ask46}
            />              
          </Col>
          <Col size ="md-3">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer46a}
              >
            {this.state.pool.option46a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer46b}
              >
            {this.state.pool.option46b}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer46} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>47</h2></Col>
          <Col size ="md-7">
            <Ask
            name={this.state.pool.ask47}
            />              
          </Col>
          <Col size ="md-2">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer47a}
              >
            {this.state.pool.option47a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer47b}
              >
            {this.state.pool.option47b}
            </button>       
          </Col>
          <Col size="md-2">
          <h2> Answer: {this.state.answer47} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>48</h2></Col>
          <Col size ="md-5">
            <Ask
            name={this.state.pool.ask48}
            />              
          </Col>
          <Col size ="md-3">
          <Row>
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer48a}
              >
            {this.state.pool.option48a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer48b}
              >
            {this.state.pool.option48b}
            </button> 
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer48c}
              >
            {this.state.pool.option48c}
            </button>        
            </Row>
            <Row>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer48d}
              >
            {this.state.pool.option48d}
            </button>        
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer48e}
              >
            {this.state.pool.option48e}
            </button>     
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer48f}
              >
            {this.state.pool.option48f}
            </button>  
            </Row>   
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer48} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>49</h2></Col>
          <Col size ="md-5">
            <Ask
            name={this.state.pool.ask49}
            />              
          </Col>
          <Col size ="md-3">
          <Row>
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer49a}
              >
            {this.state.pool.option49a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer49b}
              >
            {this.state.pool.option49b}
            </button>     
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer49c}
              >
            {this.state.pool.option49c}
            </button>     
            </Row>
            <Row>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer49d}
              >
            {this.state.pool.option49d}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer49e}
              >
            {this.state.pool.option49e}
            </button>   
            </Row>
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer49} </h2>
          </Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>50</h2></Col>
          <Col size ="md-5">
            <Ask
            name={this.state.pool.ask50}
            />              
          </Col>
          <Col size ="md-3">
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer50a}
              >
            {this.state.pool.option50a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer50b}
              >
            {this.state.pool.option50b}
            </button>     
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer50c}
              >
            {this.state.pool.option50c}
            </button>       
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer50} </h2>
          </Col>
        </Row>
{/* Section Header */}
        <Row>
          <Col size="md-12">
            <div className ="header12">
              <h1> Post Game Celebration</h1>
            </div>
          </Col>
        </Row>
{/* Question */}
        <Row>
          <Col size ="md-1"><h2>51</h2></Col>
          <Col size ="md-5">
            <Ask
            name={this.state.pool.ask51}
            />              
          </Col>
          <Col size ="md-3">
          <Row>
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer51a}
              >
            {this.state.pool.option51a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer51b}
              >
            {this.state.pool.option51b}
            </button>       
            </Row>
            <Row>           
              <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer51c}
              >
            {this.state.pool.option51c}
            </button>    
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer51d}
              >
            {this.state.pool.option51d}
            </button>    
            </Row>  
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer51} </h2>
          </Col>
          <Col size ="md-1"></Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>52</h2></Col>
          <Col size ="md-5">
            <Ask
            name={this.state.pool.ask52}
            />              
          </Col>
          <Col size ="md-3">
          <Row>
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer52a}
              >
            {this.state.pool.option52a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer52b}
              >
            {this.state.pool.option52b}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer52c}
              >
            {this.state.pool.option52c}
            </button> 
            </Row>
            <Row>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer52d}
              >
            {this.state.pool.option52d}
            </button> 
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer52e}
              >
            {this.state.pool.option52e}
            </button> 
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer52f}
              >
            {this.state.pool.option52f}
            </button> 
            </Row>
          </Col>
          <Col size="md-3">
          <h2> Answer: {this.state.answer52} </h2>
          </Col>
          <Col size ="md-1"></Col>
        </Row>
        <hr></hr>

{/* Question */}
        <Row>
          <Col size ="md-1"><h2>53</h2></Col>
          <Col size ="md-6">
            <Ask
            name={this.state.pool.ask53}
            />              
          </Col>
          <Col size ="md-3">
          <Row>
          <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer53a}
              >
            {this.state.pool.option53a}
            </button>   
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer53b}
              >
            {this.state.pool.option53b}
            </button>       
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer53c}
              >
            {this.state.pool.option53c}
            </button> 
            </Row>
            <Row>           
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer53d}
              >
            {this.state.pool.option53d}
            </button> 
            <div className="divider"></div>
            <button type="button" className="btn btn-primary"
              onClick={this.changeAnswer53e}
              >
            {this.state.pool.option53e}
            </button> 
            </Row> 
          </Col>
          <Col size="md-2">
          <h2> Answer: {this.state.answer53} </h2>
          </Col>
        </Row>
      

        <hr></hr>


        <Row>
          <Col size="md-4"></Col>
          {/* Entry Fee: $5.00
          <PayPalBtn></PayPalBtn> */}
          <Col size="md-4">
            <FormBtn
                    // disabled={!(this.state.author && this.state.title)}
                    onClick={this.handleFormSubmit}
                  >
                    Submit Your Answers
            </FormBtn>
          </Col>
          <Col size="md-4"></Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Pools</Link>
          </Col>
          <Col size="md-2">
          </Col>
        </Row>
      </Container>
    );
  }
}
Detail.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Detail));
