import { Component } from 'react'



class AddBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            gender: '',
            age: '',
/*             check: 'checked' */
        }

    }

    onCheckGender = (e) => {
        if (e.target.id === "radio_man") {
        this.setState({
                gender: 'Муж'
            }
        )} else if (e.target.id === "radio_woman") {
            this.setState({
                gender: 'Жен'
        })
        }
    }

    onChangeValueName = (e) => {
        this.setState ({
            name: e.target.value
        })
    }

    onChangeValueAge = (e) => {
        this.setState({
            age: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAdd(this.state.name, this.state.age)
        this.setState({
            name: '',
            age: ''
        })
    }



    render() {
        return (
            <form onSubmit={this.onSubmit} className="add-box">
                <input className="add-input" type="text" value={this.state.name} onChange={this.onChangeValueName} placeholder="ФИО"/>
                <input className="add-inputage" type="text" value={this.state.age} onChange={this.onChangeValueAge} placeholder="Возраст"/>
                <div className="radio">
                    <input className="radio-input" type="radio" name="gender" /* checked={this.state.check} */   id="radio_man" onChange={this.onCheckGender}/>
                    <label className="radio-label" for="radio_man">Муж</label>
                </div>
                <div className="radio">
                    <input className="radio-input" type="radio" name="gender" id="radio_woman" onChange={this.onCheckGender}/>
                    <label className="radio-label" for="radio_woman">Жен</label>
                </div>
                <button className="btn btn-add" type="submit">Добавить</button>
            </form>
            )
    }
}



export default AddBox;


