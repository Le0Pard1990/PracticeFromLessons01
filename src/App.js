import { Component } from 'react';

import './Structure/structure.css'
import './App.css';
import Header from './Components/header/header';
import AddBox from './Components/add-box/add-box';
import SearchBox from './Components/search-box/search-box';
import Table from './Components/table/table';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {name: 'Петров Петр Петрович', age: 25, gender:'Муж', id: 1},
        {name: 'Долгина Тамара Георгиевна', age: 65, gender: 'Жен', id: 2}
      ]
    }
      this.index = 3;

}

  deleteItem = (id) => {
      this.setState(({data}) => {
          return {
          data: data.filter(item => item.id !== id)
          }
        }
      )
    }

  addItem = (name, age, gender) => {
    const newItem = {
      name,
      age,
      gender,
      id: this.index++
    }
    this.setState(({data}) => {
      const newArr = data.slice()
      newArr.push(newItem)
      return {
        data: newArr
      }

    })
  }

render() {
    return (
      <div className="App">
        <Header/>
        <AddBox 
        onAdd={this.addItem}
        data={this.state.data}/>
        <SearchBox/>
        <Table 
        data={this.state.data}
        onDelete={this.deleteItem}/>
      </div>
    );
  }
}






export default App;
