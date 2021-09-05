
import '../App.css';
import '../style/AmazingNumberButton.css';
import '../style/GreatOperationButton.css';
import '../style/BeautifullScreen.css';
import '../style/MagnificientEqualButton.css';
// import TheTitle from './TheTitle'
import BeautifullScreen from './BeautifullScreen'
import AmazingNumberButton from './AmazingNumberButton'
import GreatOperationButton from './GreatOperationButton'
import MagnificientEqualButton from './MagnificientEqualButton'
import React from 'react';


 class Thetitle extends React.Component {
  render(){
    return(
    <h1>
    Calculator 9000
  </h1>
  );
}}

class Calculator extends React.Component {


  render(){

    return (
      <div>
          <Thetitle />

          <BeautifullScreen 
            valuedefault= {0}
             />
          <AmazingNumberButton />
          <GreatOperationButton />
          <MagnificientEqualButton />
      </div>
    );
  }
  
  
}




export default Calculator


