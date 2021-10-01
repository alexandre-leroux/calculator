
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







function TouchNumber () {

  var chiffre = [];
  for (var i = 0; i < 10; i++) {
    chiffre.push(<button className='number_boutton' key={i}>{i}</button>);
  }
  return chiffre;

}







function BeautifullScreen({chiffre}){

      return (
          <div className='containeur_containeurs_boutton'>
              <div className='containeur_boutton'>
                  <div id="ecran" className='mon_ecran'>{chiffre}</div>
              </div>
          </div>
      )
} 



function ChiffreAffiche(){

  const [chiffre, setChiffre] = useState('0')

  const affichage = function (a) {
    setChiffre(c => c + a)
  }

  return [chiffre, affichage]
}


function TouchOperation () {

  const [chiffre, affichage] = ChiffreAffiche()

  const handleClick = function(a){
    affichage(a)
  }

  var operateurs = ['/', '*', '-', '+'];
  const BouttonOperateur = operateurs.map(a => <button onClick={()=>{handleClick(a)}} key={a.toString()} className='number_boutton'>{a}</button>)

  return <div>
    <BeautifullScreen chiffre={chiffre}></BeautifullScreen>
    {BouttonOperateur}

  </div>


}










function TouchEgal () {

  var egal = ['=', 'DEL'];
  const bouttonOperateur = egal.map(c => <button key={c.toString()} className='number_boutton'>{c}</button>)
  return bouttonOperateur;

}

function Calculator () {

  return <div>
    <TouchNumber/>
    <TouchOperation/>
    <TouchEgal/>
  </div>


}




export default Calculator


