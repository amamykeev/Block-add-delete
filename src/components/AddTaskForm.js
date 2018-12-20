import React from 'react';

export default class AddTaskForm extends React.Component {
    constructor(props) {
        super(props);
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        return (
            <div className="todoWrapper">
                <button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id) }>Delete</button>{this.props.todo.text}
            </div>
        );
    }
}