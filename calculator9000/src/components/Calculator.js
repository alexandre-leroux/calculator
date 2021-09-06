
import '../App.css';
import '../style/AmazingNumberButton.css';
import '../style/GreatOperationButton.css';
import '../style/BeautifullScreen.css';
import '../style/MagnificientEqualButton.css';
import TheTitle from './TheTitle'
import BeautifullScreen from './BeautifullScreen'
import AmazingNumberButton from './AmazingNumberButton'
import GreatOperationButton from './GreatOperationButton'
import MagnificientEqualButton from './MagnificientEqualButton'
import React from 'react';

function BeautifulScreen2(){
  return (

    <div className='containeur_containeurs_boutton'>
        <div className='containeur_boutton'>
            <div className='mon_ecran'></div>

        </div>
    </div>
)
}

let expression = 'Happy';


class Calculator extends React.Component {



  test = (expression) => {
    console.log('test')
     expression = '0';
    console.log(expression)
    this.ecran.value ="focus"

  }

  render(){

    return (
      <div>
          <TheTitle />

          <BeautifullScreen 
            valuedefault= {expression}
             />
             <BeautifulScreen2 />
          <AmazingNumberButton  click={this.test}/>
          <GreatOperationButton />
          <MagnificientEqualButton />
      </div>
    );
  }
  
  
}




export default Calculator


