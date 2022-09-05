import { useState } from 'react';
import { postData } from '../../Services/services';

import './employees-add-form.css';

const EmployeesAddForm = (props) => {

    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');


    const onValueChangeName = (e) => {
        setName(() => e.target.value)
    }

    const onValueChangeSalary = (e) => {
        setSalary(() => e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        //FormData будет использовать только те поля ввода, которые используют атрибут name.
        const formData = new FormData(e.target);
        const json = JSON.stringify(Object.fromEntries(formData.entries()));
        postData('http://localhost:3000/employees', json)
            .then(() => props.onAddItem(name, salary))
        setName(() => '');
        setSalary(() => '')
    }



    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex"
                onSubmit={onSubmit}>
                <input type="text"
                    className="form-control new-post-label"
                    name='name'
                    value={name}
                    onChange={onValueChangeName}
                    placeholder="Как его зовут?" />
                <input type="number"
                    className="form-control new-post-label"
                    name='salary'
                    value={salary}
                    onChange={onValueChangeSalary}
                    placeholder="З/П в $?" />

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;