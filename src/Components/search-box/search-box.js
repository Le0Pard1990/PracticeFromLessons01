

const SearchBox = () => {
    return (
    <div className="search-box">
        <div className="change-box">
            <button className="btn btn-man" type="button">Мужчины</button>
            <button className="btn btn-woman" type="button">Женщины</button>
            <button className="btn btn-teenager" type="button">До 18 лет</button>
            <input type="text" placeholder="Фильтр по инициалам"/>
            <button className="btn" type="submit">Отфильтровать</button>
        </div>
    </div> 
    )
}

export default SearchBox