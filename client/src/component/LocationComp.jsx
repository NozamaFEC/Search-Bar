import React from 'react'
import ReactDOM from 'react-dom'

class LocationComp extends React.Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
            <div className="Flow">
                <tbody>
                <input className='Location' type='image' src='https://i.pinimg.com/originals/ce/87/be/ce87bec6960894a07cff91a3a4a7615e.png'/>
                    <th className='Address'>Hello, Select Your Address</th>
                  
                </tbody>
            </div>

            
        )
    }

}

export default LocationComp