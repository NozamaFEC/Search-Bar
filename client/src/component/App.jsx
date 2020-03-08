import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import '../styles.css'
//import DropBox from '/NOZAMA/component/DropBox.jsx'
import NozamaHeaderComp from './NozamaHeaderComp.jsx';
import SearchBar from './SearchBar.jsx'
import SiginInComp from './SignInComp.jsx'
import LocationComp from './LocationComp.jsx';
import OptionBar from './OptionBar.jsx';
import SaleDayComp from './SaleDayComp.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        search: ''
        // value: ''
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        //this.clickMe = this.clickMe.bind(this)
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

    //  myFunction(props) {
    //     document.getElementById("myDropDown").classList.toggle("show");
    //   }


    //   clickMe(event) {
    //     if (!event.target.matches('.SearchDropbtn')) {
    //       var dropdowns = document.getElementsByClassName("Searchdropdown-content");
    //       var i;
    //       for (i = 0; i < dropdowns.length; i++) {
    //         var openDropdown = dropdowns[i];
    //         if (openDropdown.classList.contains('show')) {
    //           openDropdown.classList.remove('show');
    //         }
    //       }
    //     }
    //   }




    render() {
        return (
            
            <div className="container">
               <NozamaHeaderComp />
               <SearchBar />
               <SiginInComp /> 
               <LocationComp />
               <OptionBar />
               <SaleDayComp />
            
            </div>
        
        )
    }
}

export default App;