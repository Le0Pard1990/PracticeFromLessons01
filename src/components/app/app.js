import { useState } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


function App() {

  const [data, setData] = useState([
    {name: 'John C.', salary: 800, increase: false, id: 1},
    {name: 'Alex M.', salary: 3000, increase: true, id: 2},
    {name: 'Carl W.', salary: 500, increase: false, id: 3},
    ]);
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [maxId, setMaxId] = useState(4)

  const deleteItem = (id) => {
    console.log('deleteItem')
    setData((data) => data.filter(item => item.id !== id))
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
    } else {
      setData((data) => {
        const newArr = data.slice();
        newArr.push(newItem);
        return newArr
      })
    }
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
