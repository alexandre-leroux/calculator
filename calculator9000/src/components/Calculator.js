
import '../App.css';
import '../style/AmazingNumberButton.css';
import '../style/GreatOperationButton.css';
import '../style/BeautifullScreen.css';
import '../style/MagnificientEqualButton.css';
import TheTitle from './TheTitle'
// import MagnificientEqualButton from './MagnificientEqualButton'
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
          value: '0',
          egal: 0
      }
  }

  egal(){

    const calcul = this.state.value
    const result = eval(calcul)
    this.setState({value: result})
    this.setState({egal: 1})
  
  }

  handleClick(i) {

    let u = this.state.value
    let checkegal = this.state.egal

    if(u === '0'){
      var number = i;
      var n = number.toString();
      this.setState({value:  n});
      console.log('dans if 0')
      u++
    }
    else if(checkegal === 1){
      var number = i;
      var n = number.toString();
      this.setState({value:  n});
      this.setState({egal:  0});
      console.log('dans if 12')
      u++
    }
    else {
      var number = i;
      var n = number.toString();
      this.setState({value: this.state.value + n});
      console.log('dans else')
    }
  }

  zero(){
    this.setState({value:'0'});
  }


  BeautifullScreen(i) {
      return <BeautifullScreen 
                value={this.state.value}
                onClick={() => this.handleClick(i)}
            />;
    }

  AmazingNumberButton(){

    return  <div className='containeur_boutton'>
                <button className='number_boutton'  onClick={() => this.handleClick(0)}>0</button>
                <button className='number_boutton'  onClick={() => this.handleClick(1)}>1</button>
                <button className='number_boutton'  onClick={() => this.handleClick(2)}>2</button>
                <button className='number_boutton'  onClick={() => this.handleClick(3)}>3</button>
                <button className='number_boutton'  onClick={() => this.handleClick(4)}>4</button>
                <button className='number_boutton'  onClick={() => this.handleClick(5)}>5</button>
                <button className='number_boutton'  onClick={() => this.handleClick(6)}>6</button>
                <button className='number_boutton'  onClick={() => this.handleClick(7)}>7</button>
                <button className='number_boutton'  onClick={() => this.handleClick(8)}>8</button>
                <button className='number_boutton'  onClick={() => this.handleClick(9)}>9</button>
                <button className='number_boutton'  onClick={() => this.handleClick('.')}>.</button>
              </div>
    }

  GreatOperationButton() {

    return (
    
        <div className='containeur_containeurs_boutton'>
            <div className='containeur_boutton'>
              <button className='operateur_boutton'  onClick={() => this.handleClick('/')}>/</button>
              <button className='operateur_boutton'  onClick={() => this.handleClick('*')}>*</button>
              <button className='operateur_boutton'  onClick={() => this.handleClick('-')}>-</button>
              <button className='operateur_boutton'  onClick={() => this.handleClick('+')}>+</button>   
            </div>
        </div>
    )


}

MagnificientEqualButton() {
  return (
  
      <div className='containeur_containeurs_boutton'>
      <div className='containeur_boutton'>
              
             <button className='boutton_del' onClick={() => this.zero()}>del</button>
             <button className='boutton_egal'  onClick={() => this.egal()}>=</button>
   
          </div>
      </div>
  
  )
  
  } 


  render(){
  return (
  
      <div className='containeur_containeurs_boutton'>
          <div>
            {this.BeautifullScreen()}
          </div>
          <div>
            {this.AmazingNumberButton()}
          </div>
          <div>
            {this.GreatOperationButton()}
          </div>
          <div>
            {this.MagnificientEqualButton()}
          </div>
      </div>
  
  )}

} 

class Calculator extends React.Component {


  render(){

    return (
      <div>
          <TheTitle />
          <AmazingNumberButton />
      </div>
    );
  }
  
  
}




export default Calculator


