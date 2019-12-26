import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "./assets/style.css";
import QuestionBox from './components/QuestionBox.js';
import Result from './components/Result.js';
import quizService from './quizService/index.js';


class Quizapp extends Component {
    constructor(){
        super();
        this.state = {
            questionBank : [],
            score: 0,
            responses: 0,
            token: null,
            abcCorrect:[]
        }
    }

    getQuestions = () => {
        quizService().then( Nquestions => {
            this.setState({
                questionBank : Nquestions
            });
            console.log(this.state.questionBank)
        
        });
    };

    componentDidMount(){
        this.getQuestions();
    }

    computeScore = (selectedAns , correctAns) => {
        if( selectedAns === correctAns ){
            
            this.setState({
                score :  this.state.score + 1  ,
                token: true
            }) 
            console.log('bravo');
             
        }

        else{
            this.setState({
                token : false ,
                abcCorrect : this.state.abcCorrect.concat(correctAns) 
            }) 
            // console.log('Shit ! ans was' + ' ' + correctAns);      
     
        }
        // console.log(this.state.abc); 

        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        })
        console.log(this.state.responses)
        
    }


    playAgain = () => {
        this.setState({
            score : 0 ,
            responses: 0 ,
            abcCorrect: [],
            token:null
        })
        this.getQuestions();
    }


    render(){
        return(

            <div className = "container">
                <button onClick={this.getQuestions}>New Questions</button>
                 <h3>{this.state.token === false ? "Oops ! Correct Answer Was" + " " + this.state.abcCorrect.splice(0,this.state.abcCorrect.length): null }</h3>

                <div className="title"> QuizApp </div>
                {/* {this.state.abc === true ? console.log('right') : <RightBox rightAns={this.state.abcCorrect}/> }  */}
                {this.state.responses < 5 && this.state.questionBank.map(
                    ( {question,answers,correct,questionId} = this.qBank ) => 
                    ( <QuestionBox 
                        question={question}
                        options={answers} 
                        key={questionId} 
                        selectedOption = { (x) => this.computeScore(x , correct)  }
                        correction = {this.state.abcCorrect} />
                    )
                        
                        
                    // OR YOU CAN SIMPLY USE h4 TAG INSTEAD OF <QuestionBox/> -
                    /* <h4 key={questionId} >{question}</h4> */
/* You cannot use key as index bcz here the data is an Object with 4 keys ./components/QuestionBox.js  */
                                            
                    )
                    
                }   

        {/* console.log('Shit ! ans was' + ' ' + this.state.abcCorrect) */}
                     
        {this.state.responses === 5 ? <Result score={this.state.score} playAgain={this.playAgain}/> : null }


            </div>
        )
    }
}

ReactDOM.render(<Quizapp />, document.getElementById('root'));

















// Unnecessary codes - 
// line 30 - this.state.questionBank.length > 0 &&