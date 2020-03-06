import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import '../styles.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        search: ''
        // value: ''
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }
    
    
    //eventhandler //clientside methods
    onChange(event){
        this.setState({value: event.target.value})
    }
    

    //eventHandler //clientside methodds
    handleSubmit(event){
        event.preventDefault()
        this.setState({value: this.state.value});
    }




    render() {
        return (
            
            <div className="container">
                <div className="Shake">
                <h1 className="Noz">Nozama</h1>
                <h4 className="Emirp">try Emirp</h4>
                </div>
                <form className='Form2' method='get'>
                    <div className='SearchDrp'>
                    <button onClick='myFunction()'className='SearchDropbtn'>Hello</button>
                    <div className='Searchdropdown-content'>
                        <a href="#">link 1</a>
                        <a href="#">link 2</a>
                        <a href="#">link 3</a>
                    </div>
                    </div>
                <input className="Searchy" type='text' placeholder='Search Nozama' />
                  <input className='Magnify' type='image' src="https://previews.123rf.com/images/oksananahorna/oksananahorna1803/oksananahorna180300036/97338917-vector-illustration-magnifying-glass-icon-magnify-icon.jpg"/>

            </form>
            <div className="Boom">
                <table>
                <tbody>
                    <th className='Globe'>
                        <button className="dropbtn">en</button>
                        <div className='dropdown-content'>
                            <a href="#">English</a>
                            <a href="#">Spanish</a>
                            <a href="#">French</a>
                            </div>
                    </th>  
                
                    <th className="SignIn">Hello, Sign in
                        <tr>Account & Lists</tr>
                    </th>
                 
                    <th>Returns
                        <tr>& Orders</tr>
                    </th>
                    <th>Try Emirp</th>
                </tbody>
                </table>
            </div>
            <div className="Flow">
                <tbody>
                <input className='Location' type='image' src='https://i.pinimg.com/originals/ce/87/be/ce87bec6960894a07cff91a3a4a7615e.png'/>
                    <th className='Address'>Hello, Select Your Address</th>
                  
                </tbody>
            </div>
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
            <div className="Kick">
                <tbody>
                    <th className="Sales">
                        Sale of the Day
                    </th>
                    <input className='Cart' type='image' src='https://images.vexels.com/media/users/3/136827/isolated/preview/9c9157b08f5e79284a1b4c78dbf86307-shopping-cart-round-icon-by-vexels.png'/>
                </tbody>
            </div>
            </div>
        
        )
    }
}

export default App;