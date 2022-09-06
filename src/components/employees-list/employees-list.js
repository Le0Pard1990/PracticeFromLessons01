import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = (props) => {
    const elements = props.data.map(item => {
        
        return (
            <EmployeesListItem 
            key={item.id}
            name={item.name}
            salary={item.salary}
            increase={item.increase}
            onDeleteItem={() => props.onDeleteItem(item.id)}
            onToggleIncrease={() => props.onToggleIncrease(item.id)}/> 
        )
    }) 
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;