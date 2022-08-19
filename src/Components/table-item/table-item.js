import { Component } from "react";



class TableItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {name, age, gender, onDelete} = this.props
        let ident;
        if (gender === 'Муж') {
            ident = 'td-man'
        } else {
            ident = 'td-woman'
        }
    
        const date = new Date().toLocaleDateString();
            return (
                <tbody>
                    <td className={ident}>{name}</td>
                    <td className={ident}>{gender}</td>
                    <td className={ident}>{age}</td>
                    <td className={ident}>{date + ''}
                        <button onClick={onDelete} type='button'
                        className='btn-trash btn-sm'>
                        <i className="fas fa-trash"></i>
                        </button>
                    </td>
                </tbody>
           ) 
    }
}

export default TableItem