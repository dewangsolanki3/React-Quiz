import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "./assets/style.css";
import ClassQuestion from './components/ClassQuestion.js';
import Result from './components/Result.js';
// import quizService from './quizService/index.js';
import quizService from './quizService/data.json'


class Quizapp extends Component {
    constructor(){
        super();
        this.state = {
            questionBank : [],
            score: 0,
            responses: 0,
            // token: null,  
            // abcCorrect:[]
        }
    }

// done================
    getQuestions = () => {
        this.setState({
            questionBank : quizService
        })
    };
// done==================
    componentDidMount(){
        this.getQuestions();
    }

    computeScore = (selectedAns , correctAns) => {
        if( selectedAns === correctAns ){
            this.setState({
                score :  this.state.score + 1  ,
                // token: true
            }) 
            console.log('bravo');           
        }

        // else{
        //     this.setState({
        //         // token : false ,
        //         // abcCorrect : this.state.abcCorrect.concat(correctAns) 
        //     }) 
        // }

        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5    // Ternary optional =======================
        })
        console.log(this.state.responses)
    }


    playAgain = () => {
        this.setState({
            score : 0 ,
            responses: 0 ,
            // abcCorrect: [],
            // token:null
        })
        this.getQuestions();
    }


    render(){
        console.log(this.state.responses)

        return(

            <div className = "container">
                {/* <h3>{this.state.token === false ? "Oops ! Correct Answer Was" + " " + this.state.abcCorrect.splice(0,this.state.abcCorrect.length): null }</h3> */}

                <div className="title"> QuizApp </div>
                
                {this.state.responses < 5 && this.state.questionBank.map(
                    // ( {question,answers,correct,questionId} = this.qBank ) => 
                    ( set ) => 
                    ( <ClassQuestion 
                        question={set.question}
                        options={set.answers} 
                        key={set.questionId} 
                        selectedOption = { (x) => this.computeScore(x , set.correct)  }
                        // correction = {this.state.abcCorrect} 
                        />
                    )                                          
                    )
                    
                }   

                     
        {this.state.responses === 5 ? <Result score={this.state.score} playAgain={this.playAgain}/> : null }

            </div>
        )
    }
}

ReactDOM.render(<Quizapp />, document.getElementById('root'));

















// Unnecessary codes - 
// line 30 - this.state.questionBank.length > 0 &&