
import '../App.css';
import '../style/AmazingNumberButton.css';
import '../style/GreatOperationButton.css';
import '../style/BeautifullScreen.css';
import '../style/MagnificientEqualButton.css';
import TheTitle from './TheTitle'
// import BeautifullScreen from './BeautifullScreen'
// import AmazingNumberButton from './AmazingNumberButton'
import GreatOperationButton from './GreatOperationButton'
import MagnificientEqualButton from './MagnificientEqualButton'
import React from 'react';

function BeautifullScreen(props){

      return (

          <div className='containeur_containeurs_boutton'>
              <div className='containeur_boutton'>
                  <div id="ecran" className='mon_ecran'>{props.value}</div>
              </div>
          </div>
      )

} 

class AmazingNumberButton extends React.Component {

  constructor(props) {
      super(props);
      this.state={
          value: 0
      }
  }

  handleClick(i) {
    var number = i;
    var n = number.toString();
    this.setState({value: this.state.value + n});
  }

  renderSquare(i) {
      return <BeautifullScreen 
      value={this.state.value}
      onClick={() => this.handleClick(i)}
        />;
    }

  render(){
  return (
  
      <div className='containeur_containeurs_boutton'>
          <div>
            {this.renderSquare()}
          </div>
          <div className='containeur_boutton'>
            <button className='number_boutton'>0</button>
            <button className='number_boutton'  onClick={() => this.handleClick(1)}>1</button>
            <button className='number_boutton'>2</button>
            <button className='number_boutton'>3</button>
            <button className='number_boutton'>4</button>
            <button className='number_boutton'>5</button>
            <button className='number_boutton'>6</button>
            <button className='number_boutton'>7</button>
            <button className='number_boutton'>8</button>
            <button className='number_boutton'>9</button>
            <button className='number_boutton'>12</button>
            <button className='number_boutton'>.</button>
          </div>
      </div>
  
  )}

} 

class Calculator extends React.Component {





  render(){

    return (
      <div>
          <TheTitle />
          <AmazingNumberButton  click={this.test}/>
          <GreatOperationButton />
          <MagnificientEqualButton />
      </div>
    );
  }
  
  
}




export default Calculator


