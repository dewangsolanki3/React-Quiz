 import React, {useState , Component} from "react";

const QuestionBox = ( {question, options, selectedOption, correction} ) => {       // question,options - props
  const [answer, setAnswer] = useState(options);        // Hooks
  console.log(correction);
  
  return(
    <div className="questionBox">
    <div className ="question">
      {question}
    </div>
    {answer.map( (x, index) => 
      <button 
          key={index}               // Just a key
          className="answerBtn"     // Just a CSS
          onClick = { () => {
            setAnswer([x])          // x is in [] coz it is getting mapped through an ARRAY
            selectedOption(x)
            }
          }

      > {x} </button> )}


      {/* {correction.map( (y , index) => {
        return(
        <h3 
        key={index}
        > {" Oops ! Correct Answer Was" + " " } {y} </h3> )
 
      })
     } */}

  </div>

  )
}
export default QuestionBox;





// My Class method ~ A Bug

// class QuestionBox extends Component {

// render(){
//   const answer = this.props.options;                      // prop
//   let setAnswer = ([x]) => {                              //
//     this.setState({                                       //  SCENE
//       options:answer[x]                                   //
//     })                                                    //
    
//   }
//   return(
//     <div className="questionBox">
//     <div className ="question">
//       {this.props.question}                              {/* prop */}
//     </div>
//     {answer.map( (x, index) => <button 
//           key={index}               // Just a key
//           className="answerBtn"     // Just a CSS
//           onClick = { () => {
//             setAnswer([x])          // x is in [] coz it is getting mapped through an ARRAY
//             this.props.selectedOption(x)                  // prop
//             }
//           }

//           > {x} </button> )}

//   </div>

//         )
//       }
// }

// export default QuestionBox;
























// Quizbee method

// import React, {useState} from "react";

// const QuestionBox = ({question, options, selected}) => {
//   const [answer, setAnswer] = useState(options);
//   return (
//     <div className="questionBox">
//       <div className="question">{question}</div>
//       {answer.map((text, index) => (
//         <button
//           key={index}               // Just a key
//           className="answerBtn"     // Just a CSS
//           onClick={() => {          // Just an onClick
//             setAnswer([text]);      
//             selected(text);
//           }}
//         >
//           {text}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default QuestionBox;
