import React, { Component } from 'react';

class ClassQuestion extends Component {

    state = {
        option : this.props.options,     // Renamed answer as option  =============
        disable : false
        // selectedOptions : this.props.selectedOptions    -============No nned =======
    }

    setAnswer = (e) => {
        this.setState({
            option : [e.target.innerText],
            disable : true
        })
        this.props.selectedOption(e.target.innerText)
    }

render() {
    console.log(this.state.answer)
console.log("Dewang" ,this.state.option)
return (
    <div className="questionBox">
    
    <div className ="question">
        {this.props.question}
    </div>
    {this.state.option.map( (x, index) => 
        <button 
            key={index}               // Just a key
            className="answerBtn"     // Just a CSS
            onClick = {this.setAnswer}
            disabled = {this.state.disable}
        > {x} </button> )}

    </div>

  )

    }
}

export default ClassQuestion
