import React,{Component} from 'react';
import CardList from './Cardlist';
import { robots } from './Robots';
import Searchbar from './Searchbar'
//import './App.css';
import Scroll from './Scroll';

class App extends Component{
    constructor(){
        super()       
         this.state={
            robots: [],
            searchfield: ''
        }       
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json)
        .then(users=>this.setState({robots:users}));
    }
    
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
      }

    render(){
        
       const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

        return(
            <div className='tc'>
                <h2>Robofriends</h2>
                <Searchbar searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
               
            </div>
         
        );
    }
}

export default App;