import React from "react"

class BeautifullScreen extends React.Component{



render(){

    return (

        <div className='containeur_containeurs_boutton'>
            <div className='containeur_boutton'>
                <div className='mon_ecran'>{this.props.valuedefault}</div>

            </div>
        </div>
    )
}





} 

export default BeautifullScreen