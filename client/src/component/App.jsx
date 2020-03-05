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
                <input className='Location' type='image' src='https://i.pinimg.com/originals/ce/87/be/ce87bec6960894a07cff91a3a4a7615e.png'/>
                <tbody>
                    <th className='Address'>Hello</th>
                    <tr className='Address1'>Select Your Address</tr>
                </tbody>
            </div>
            <div className="Move">
                
                <tbody className="TheTable">
                    <table>
                <th className="">Today's Deals</th>
                <th className="">Best Sellers</th>
                <th className="">Customer Service</th>
                <th className="">Find Gifts</th>
                <th className="">Registry</th>
                <th className="">New Releases</th>
                <th className="">Gift Card</th>
                <th className="">Sell</th>
                <th className="">Nozama Basics</th>
                </table>
                </tbody>
            </div>
            <div className="Kick">
                <tbody>
                    <th className="Sales">
                        Sale of the Day
                    </th>
                </tbody>
            </div>
            </div>
        
        )
    }
}

export default App;