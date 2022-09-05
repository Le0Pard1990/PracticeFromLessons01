import { useState, useEffect } from 'react';
import { getResource, deleteData } from '../../Services/services';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


function App() {

  const [data, setData] = useState([]);
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [maxId, setMaxId] = useState(data.length)

  useEffect(() => {
    console.log('useEffect');
    getEmployesList();
  }, [])

  const getEmployesList = () => {
    getResource('http://localhost:3000/employees')
      .then(data => setData(data));
  }

  const deleteItem = (id) => {
    deleteData('http://localhost:3000/employees', id)
      .then(() => {
        getEmployesList();
      });
    console.log('deleteItem');
    /* setData((data) => data.filter(item => item.id !== id)); */
  }

  const toggleIncrease = (id) => {
    setData((data) => {
      return data.map(item => {
        if (item.id === id) {
          return {...item, increase: !item.increase}
        } else {return item}
      })
    })
  }

  const addItem = (name, salary) => {
    console.log('addItem')

    setMaxId(maxId => maxId + 1)
    const newItem = {
      name: name,
      salary: salary,
      increase: false,
      id: maxId
    }

    if (newItem.name.length === 0 || newItem.salary.length === 0) {
      return data
    } else {getEmployesList()}
  }

  const updateSearch = (term) => {
    setTerm(term);
  }

  const searchEmployes = (items, term) => {
    if (term.length === 0) {
      return items
    };

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    });
  }

  const filterSelect = (filter) => {
    setFilter(filter);
  }

  const filterPost = (items, filter) => {
    switch (filter) {
      case 'increase':
        return items.filter(item => item.increase);
      case 'moreThan1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items;
    }
  }

  const visibleData =  filterPost(searchEmployes(data, term), filter)
  const employees = data.length
  const increased = data.filter((item) => item.increase === true).length

  return (
    <div className="app">
        <AppInfo 
        employees={employees}
        increased={increased}/>

        <div className="search-panel">
            <SearchPanel onUpdateSearch={updateSearch}/>
            <AppFilter
            filter={filter}
            onFilterSelect={filterSelect}/>
        </div>
        
        <EmployeesList 
        data={visibleData}
        onDeleteItem={deleteItem}
        onToggleIncrease={toggleIncrease}/>
        <EmployeesAddForm 
        onAddItem={addItem}
        data={data}/>
    </div>
  );
}

export default App;
