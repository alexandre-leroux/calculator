import React from "react"

class BeautifullScreen extends React.Component{

    constructor(props){
        super(props)
        this.state ={value: 0}
    }

    render(){

        return (

            <div className='containeur_containeurs_boutton'>
                <div className='containeur_boutton'>
                    <div id="ecran" className='mon_ecran'>{this.state.value}</div>

                </div>
            </div>
        )
    }





} 

export default BeautifullScreen