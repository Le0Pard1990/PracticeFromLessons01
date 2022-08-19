import TableItem from "../table-item/table-item"

const Table = ({data, onDelete}) => {

    const elements = data.map(item => {
        return (
            <TableItem onDelete={() => onDelete(item.id)} key={item.id} name={item.name} gender={item.gender} age={item.age}/>
        )
    })

    return (
    <table className="table">
        <thead>
            <th>ФИО</th>
            <th>Пол</th>
            <th>Возраст</th>
            <th>Дата регистрации</th>
        </thead>
        {elements}
    </table>
    )
}

export default Table

