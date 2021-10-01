
import '../App.css';
import '../style/AmazingNumberButton.css';
import TheTitle from './TheTitle'
import React, { useState } from 'react';



function BeautifullScreen({chiffre, setChiffre}){

      return  <div className='containeur_containeurs_boutton'>
              <div className='containeur_boutton'>
                  <div id="ecran" className='mon_ecran'>{chiffre}</div>
              </div>
          </div>
      
} 



function TouchOperation ({chiffre, setChiffre}) {

  var operateurs = ['/', '*', '-', '+'];
  const BouttonOperateur = operateurs.map((a,index) => <button onClick={()=>setChiffre(chiffre + a)} key={`${a}-${index}`} className='number_boutton'>{a}</button>)

  return <div>
    
    {BouttonOperateur}

  </div>

}

function TouchNumber ({chiffre, setChiffre}) {

  var bouttonChiffre = [];
  for (var i = 0; i < 10; i++) {
    bouttonChiffre.push(<button onClick={(e)=>setChiffre(chiffre + e.target.innerHTML)} className='number_boutton' key={i}>{i}</button>);
  }
  return bouttonChiffre;

}


function egalDel (chiffre, setChiffre) {

  console.log(chiffre)
  const result = eval(chiffre)
  setChiffre(result)
 
}

function TouchEgal ({chiffre, setChiffre}){

  var operateursEgal = ['=', 'DEL'];
  const operateursEgaldel = operateursEgal.map((a,index) => <button onClick={()=>egalDel(chiffre, setChiffre)} key={`${a}-${index}`} className='number_boutton'>{a}</button>)

  return <div>
    
    {operateursEgaldel}

  </div>
}

function Calculator () {

  const [chiffre, setChiffre] = useState('0')

  return <div>
    <BeautifullScreen chiffre={chiffre} setChiffre={setChiffre}/>
    <TouchOperation chiffre={chiffre} setChiffre={setChiffre}/>
    <TouchNumber chiffre={chiffre} setChiffre={setChiffre}/>
    <TouchEgal chiffre={chiffre} setChiffre={setChiffre}/>
  </div>


}




export default Calculator


