import React ,{Component} from 'react';
class Student extends Component{
    state = {
        name: "Srushti",
        city: "Ahmednagar"
    }
    render(){
        return(
            <h1>Hello{this.state.name}, I am from
            {this.state.city}
            </h1>
             
            
        
        );
    }
    
}
export default Student; 