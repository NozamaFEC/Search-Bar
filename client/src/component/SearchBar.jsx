import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import axios from 'axios';



class SearchBar extends React.Component {
    constructor(props){
        super(props)
    }



    myFunction() {
        event.preventDefault();
        document.getElementById("myDropDown").classList.toggle("show");
      }


      clickMe(event) {
        if (!event.target.matches('.SearchDropbtn')) {
          var dropdowns = document.getElementsByClassName("Searchdropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }

    render(){
        return(<form className='Form2' method='get'>
        <div className='SearchDrp'>
        <button  onClick={this.myFunction} className='SearchDropbtn'>What's New</button>
         <div id="myDropDown" className='Searchdropdown-content'>
            <a href="#">Eletronics</a>
            <a href="#">Sports</a>
            <a href="#">Toys</a>
         </div>
        </div>
    <input className="Searchy" type='text' placeholder='Search Nozama' />
      <input className='Magnify' type='image' src="https://previews.123rf.com/images/oksananahorna/oksananahorna1803/oksananahorna180300036/97338917-vector-illustration-magnifying-glass-icon-magnify-icon.jpg"/>

</form>)
    }
}

export default SearchBar;