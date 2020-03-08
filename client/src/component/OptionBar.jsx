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
                    
                <td className="">Today's Deals</td>
                <td className="">Best Sellers</td>
                <td className="">Customer Service</td>
                <td className="">Find Gifts</td>
                <td className="">Registry</td>
                <td className="">New Releases</td>
                <td className="">Gift Card</td>
                
                </thead>
                </table>
            </div>

            
        )
    }

}

export default OptionBar