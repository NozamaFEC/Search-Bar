import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'


class SignInComp extends React.Component {
    constructor(props){
        super(props)
    }





    render(){
        return(
            <div className="Boom">
                <table>
                <thead>
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
                </thead>
                </table>
            </div>
        )
    }

}
export default SignInComp;
