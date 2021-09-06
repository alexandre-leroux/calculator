import React from "react"

class AmazingNumberButton extends React.Component {

    constructor(props) {
        super(props);
        //creating ref
        this.ecran= React.createRef();
      }


    affiche = ()=>{

        this.props.click()
        // console.log('ok')
    }



    render(){
    return (
    
        <div className='containeur_containeurs_boutton'>
            <div className='containeur_boutton'>
               <button className='number_boutton'>0</button>
               <button className='number_boutton'>1</button>
               <button className='number_boutton'>2</button>
               <button className='number_boutton'>3</button>
               <button className='number_boutton'>4</button>
               <button  ref = {this.ecran}
                        onClick={this.affiche} className='number_boutton'>5</button>
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
    
    export default AmazingNumberButton