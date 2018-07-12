import React, {Component} from "react";
import TodoListItem from "./TodoListItem"
import "./TodoList.css"

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
    }
    render(){
        return(
        <div className="todoListMain">
            <div className="header">
                <form onSubmit={this.addItem}>
                    <input ref={(todo) => this._inputElement = todo} type="text" placeholder="Enter Task"/>
                    <button type="submit">Add</button>
                </form>
            </div>
            <TodoListItem entries={this.state.items}/>
        </div>
        );
    }
    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }

        console.log(this.state.items);

        e.preventDefault();
    }
}

export default TodoList;