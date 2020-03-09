import React from 'react'
import ReactDOM from 'react-dom'

class OptionBar extends React.Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
            <div className="Move">
                <table>
                <thead className="TheTable">
                    
                <td className="eng">Today's Deals</td>
                <td className="eng">Best Sellers</td>
                <td className="eng">Customer Service</td>
                <td className="eng">Find Gifts</td>
                <td className="eng">Registry</td>
                <td className="eng">New Releases</td>
                <td className="eng">Gift Card</td>
                
                </thead>
                </table>
            </div>

            
        )
    }

}

export default OptionBar