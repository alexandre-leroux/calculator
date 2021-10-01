
import '../App.css';
import '../style/AmazingNumberButton.css';
import TheTitle from './TheTitle'
import React, { useState } from 'react';

// function ItSOverNineThousand(props){
  //       return (
  //           <div className='ItSOverNineThousand'>
  //               <p>{props.value}</p>
  //           </div>
  //       )
  // } 


function BeautifullScreen(valeurInitiale){

  const [valeur, setValeur] = useState(valeurInitiale = 8)
  console.log(valeur)
      return (
          <div className='containeur_containeurs_boutton'>
              <div className='containeur_boutton'>
                  <div id="ecran" className='mon_ecran'>{valeur}</div>
              </div>
          </div>
      )
} 

function TouchNumber () {

  var chiffre = [];
  for (var i = 0; i < 10; i++) {
    chiffre.push(<button className='number_boutton' key={i}>{i}</button>);
  }
  return chiffre;

}

function TouchOperation () {

  var operateurs = ['/', '*', '-', '+'];
  const bouttonOperateur = operateurs.map(c => <button className='number_boutton'>{c}</button>)
  return bouttonOperateur;

}

function Calculator () {

  return <div>
    <BeautifullScreen/>
    <TouchNumber/>
    <TouchOperation/>

  </div>


}




export default Calculator


