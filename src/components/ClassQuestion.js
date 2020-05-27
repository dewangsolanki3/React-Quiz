import React, { Component } from 'react';

class ClassQuestion extends Component {

    state = {
        answer : this.props.options,
        // selectedOptions : this.props.selectedOptions    -============No nned =======
    }

    setAnswer = (e) => {
        this.setState({
            answer : [e.target.innerText],
        })

        this.props.selectedOption(e.target.innerText)
    }

    render() {
        console.log("Dewang" ,this.state.answer)
        return (
            <div className="questionBox">
    <div className ="question">
      {this.props.question}
    </div>
    {this.state.answer.map( (x, index) => 
      <button 
          key={index}               // Just a key
          className="answerBtn"     // Just a CSS
          onClick = {this.setAnswer}
      > {x} </button> )}

  </div>

  )

    }
}

export default ClassQuestion
