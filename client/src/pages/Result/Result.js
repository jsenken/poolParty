import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { logoutUser } from '../../actions/authentication';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import "./result.css";


class Result extends Component {
    state = {
      pools: {},
      answers: {},
      answer: {},
      entries: 
      [
        {
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
       }
      ],
      // poolname: "",
      // username: "",
      // answer1: "",
      // answer2: "",
      // answer3: "",
      // answer4: "",
      // answer5: "",
      score: 0,
    };
  
    componentDidMount() {
      this.loadAnswer();
      this.loadPools();
      this.loadAnswers();
    }
  
    loadAnswer = () => {
      API.getAnswer(this.props.match.params.id)
      .then(res => this.setState({ answer: res.data,
        poolname: ""
      }))
      .catch(err => console.log(err));
    };

    loadPools = () => {
      API.getPools()
        .then(res =>
          this.setState({ pools: res.data, 
            name: ""
          })
        )
        .then(this.filterPools)
        .catch(err => console.log(err));
    };

  
    filterPools = () => {
      let choice = {};
      // console.log(this.state.pools);
      // console.log(this.state.answer);
      for ( let k = 0; k < this.state.pools.length; k++) {
        if (this.state.pools[k].name === this.state.answer.poolname){
          choice= this.state.pools[k];
        }
      }
      this.setState({pools: choice})
      this.increaseScore();
    }
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    increaseScore = () => {
      let score = 0;
      if (this.state.answer.answer1 === this.state.pools.answer1) {
        score = score + 10;
        // console.log(score);
      }
      if (this.state.answer.answer2 === this.state.pools.answer2) {
        score = score + 10;
        // console.log(score);

      }
      if (this.state.answer.answer3 === this.state.pools.answer3) {
        score = score + 10;
        // console.log(score);

      }
      if (this.state.answer.answer4 === this.state.pools.answer4) {
        score = score + 10;
        // console.log(score);

      }
      if (this.state.answer.answer5 === this.state.pools.answer5) {
        score = score + 10;
        // console.log(score);

      }
      this.setState({score: score})
      // console.log(score)
      // console.log(this.state.pools.name)
      API.updateAnswer(this.props.match.params.id,{

        score: this.state.score
      })
      this.loadAnswers();
    }

    loadAnswers = () => {
      console.log(this.state.answer.poolname)
      API.getAnswers()
        .then(res =>
          this.setState({ answers: res.data, 
          })
        )
        .then(this.next)
        .catch(err => console.log(err));
    };

    next = () => {
      // console.log(this.state.answers)
      let  array = [];
      for ( let i = 0; i < this.state.answers.length; i++) {
        // console.log(this.state.answers[i].poolname)
        // console.log(this.state.answer.poolname)
        if (this.state.answers[i].poolname === this.state.answer.poolname) {
          console.log(this.state.answers[i].username)
          console.log(this.state.answers[i].score)
          array.push(this.state.answers[i]);
        }
      }
      array.sort(this.compare)

      // console.log(array)
      if (array !== undefined && array.length > 0 ) {
        this.setState({entries: array})
        console.log(this.state.entries)
      }

      console.log(`this is the entries obj: ${this.state.entries}`)    
   
    }

    compare = (a,b) => {
      console.log("this worked")
      const scoreA = a.score;
      const scoreB = b.score;
      let comparison = 0;
      if (scoreA > scoreB) {
        comparison = -1;
      } else if (scoreA < scoreB) {
        comparison = 1;
      }
      return comparison
    }

    rankings = () => {
    }



  redirect = () => {
    this.props.history.push(`/userHome`)
  }

  render() {

    return (
      <Container fluid>
      <Row>
        <Col size="md-3">
          <Row>
            <h1>Leaderboard</h1>
          </Row>
          <Row>
            <ol>
              {this.state.entries.map(entry => (
                <li>
                  {entry.username} - {entry.score}
                </li>
              ))}
            </ol>
          </Row>
        </Col>
        <div class ="col-md-9 data" >
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>
                  {this.state.answer.username}'s answers for {this.state.answer.poolname}
                </h1>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
{/* Section Header */}

              <div className="row header1">
                <Col size="md-6">
                    <h1> Anthem/Coin Toss</h1>
                </Col>
                <Col size="md-3"><h4>Your Answer:</h4></Col>
                <Col size="md-3"><h4>Correct Answer:</h4></Col>
              </div>
                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask1} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer1}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer1} </h4>
                    </Col>
                  </Row>
                  <hr></hr>
                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask2} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer2}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer2} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask3} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer3}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer3} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask4} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer4}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer4} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask5} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer5}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer5} </h4>
                    </Col>
                  </Row>
{/* Section Header */}

              <div className="row header3">
                <Col size="md-6">
                    <h1> 1st Quarter</h1>
                </Col>
                <Col size="md-3"><h4>Your Answer:</h4></Col>
                <Col size="md-3"><h4>Correct Answer:</h4></Col>
              </div>
                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask6} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer6}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer6} </h4>
                    </Col>
                  </Row>
                  <hr></hr>
                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask7} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer7}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer7} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask8} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer8}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer8} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask9} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer9}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer9} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask10} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer10}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer10} </h4>
                    </Col>
                  </Row>
{/* Section Header */}

<div className="row header4">
                <Col size="md-6">
                    <h1> 2nd Quarter</h1>
                </Col>
                <Col size="md-3"><h4>Your Answer:</h4></Col>
                <Col size="md-3"><h4>Correct Answer:</h4></Col>
              </div>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask11} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer11}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer11} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask12} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer12}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer12} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask13} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer13}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer13} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask14} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer14}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer14} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask15} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer15}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer15} </h4>
                    </Col>
                  </Row>
{/* Section Header */}

<div className="row header5">
                <Col size="md-6">
                    <h1> Halftime</h1>
                </Col>
                <Col size="md-3"><h4>Your Answer:</h4></Col>
                <Col size="md-3"><h4>Correct Answer:</h4></Col>
              </div>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask16} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer16}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer16} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask17} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer17}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer17} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask18} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer18}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer18} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask19} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer19}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer19} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask20} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer20}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer20} </h4>
                    </Col>
                  </Row>
{/* Section Header */}

              <div className="row header6">
                <Col size="md-6">
                    <h1> 3rd Quarter</h1>
                </Col>
                <Col size="md-3"><h4>Your Answer:</h4></Col>
                <Col size="md-3"><h4>Correct Answer:</h4></Col>
              </div>
                  
                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask21} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer21}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer21} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask22} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer22}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer22} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask23} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer23}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer23} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask24} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer24}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer24} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask25} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer25}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer25} </h4>
                    </Col>
                  </Row>
{/* Section Header */}

<div className="row header7">
                <Col size="md-6">
                    <h1> 4th Quarter</h1>
                </Col>
                <Col size="md-3"><h4>Your Answer:</h4></Col>
                <Col size="md-3"><h4>Correct Answer:</h4></Col>
              </div>
                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask26} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer26}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer26} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask27} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer27}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer27} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask28} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer28}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer28} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask29} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer29}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer29} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask30} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer30}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer30} </h4>
                    </Col>
                  </Row>
{/* Section Header */}

<div className="row header8">
                <Col size="md-6">
                    <h1> At Any Point</h1>
                </Col>
                <Col size="md-3"><h4>Your Answer:</h4></Col>
                <Col size="md-3"><h4>Correct Answer:</h4></Col>
              </div>

                  <Row>
                  <Col size="md-6">
                    <h4> {this.state.pools.ask31} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer31}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer31} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask32} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer32}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer32} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask33} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer33}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer33} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask34} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer34}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer34} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask35} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer35}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer35} </h4>
                    </Col>
                  </Row>
{/* Section Header */}

<div className="row header9">
                <Col size="md-6">
                    <h1> Game Totals</h1>
                </Col>
                <Col size="md-3"><h4>Your Answer:</h4></Col>
                <Col size="md-3"><h4>Correct Answer:</h4></Col>
              </div>                  
                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask36} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer36}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer36} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask37} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer37}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer37} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask38} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer38}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer38} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask39} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer39}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer39} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask40} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer40}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer40} </h4>
                    </Col>
                  </Row>
{/* Section Header */}

<div className="row header10">
                <Col size="md-6">
                    <h1> Crossover</h1>
                </Col>
                <Col size="md-3"><h4>Your Answer:</h4></Col>
                <Col size="md-3"><h4>Correct Answer:</h4></Col>
              </div>
                  <Row>
                  <Col size="md-6">
                    <h4> {this.state.pools.ask41} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer41}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer41} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask42} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer42}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer42} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask43} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer43}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer43} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask44} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer44}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer44} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask45} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer45}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer45} </h4>
                    </Col>
                  </Row>
{/* Section Header */}

<div className="row header11">
                <Col size="md-6">
                    <h1> TV</h1>
                </Col>
                <Col size="md-3"><h4>Your Answer:</h4></Col>
                <Col size="md-3"><h4>Correct Answer:</h4></Col>
              </div>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask46} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer46}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer46} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask47} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer47}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer47} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask48} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer48}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer48} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask49} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer49}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer49} </h4>
                    </Col>
                  </Row>
{/* Section Header */}

<div className="row header12">
                <Col size="md-6">
                    <h1>Post Game</h1>
                </Col>
                <Col size="md-3"><h4>Your Answer:</h4></Col>
                <Col size="md-3"><h4>Correct Answer:</h4></Col>
              </div>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask50} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer50}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer50} </h4>
                    </Col>
                  </Row>

                  <Row>
                  <Col size="md-6">
                    <h4> {this.state.pools.ask15} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer51}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer51} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask52} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer52}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer52} </h4>
                    </Col>
                  </Row>
                  <hr></hr>

                  <Row>
                    <Col size="md-6">
                    <h4> {this.state.pools.ask53} </h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.answer.answer53}</h4>
                    </Col>
                    <Col size="md-3">
                    <h4>{this.state.pools.answer53} </h4>
                    </Col>
                  </Row>    
                  <hr></hr>
             
            </Col>
          </Row>
        </div>
      </Row>
        <Row>
          <Col size="md-2">
            <Link to="/"><span className="poolDirect">← Back to Pools</span></Link>
          </Col>
          
        </Row>
      </Container>
    );
  }
}
Result.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Result));
