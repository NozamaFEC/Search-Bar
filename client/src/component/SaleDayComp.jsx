import React from 'react'
import ReactDOM from 'react-dom'

class SaleDayComp extends React.Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
            <div className="Kick">
                <tbody>
                    <th className="Sales">
                        Sale of the Day
                    </th>
                    <input className='Cart' type='image' src='https://images.vexels.com/media/users/3/136827/isolated/preview/9c9157b08f5e79284a1b4c78dbf86307-shopping-cart-round-icon-by-vexels.png'/>
                </tbody>
            </div>

        )
    }

}

export default SaleDayComp