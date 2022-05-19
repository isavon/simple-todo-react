import React, { useState } from 'react';
import { Row } from 'antd';
import '../styles/App.css';
import * as types from '../constants';
import BeginForm from './BeginForm';
import TodoList from './TodoList';
import CompletedList from './CompletedList';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [completed, setCompleted] = useState([]);

    const create = (newTodo) => {
        setTodos([...todos, newTodo]);
    }

    const toggle = (type, id) => {
        switch (type) {
            case types.TYPE_TODOS:
                setCompleted([...completed, todos.find(item => item.id == id)]);
                setTodos(todos.filter(todo => todo.id !== id));
                break;

            case types.TYPE_COMPLETED:
                setTodos([...todos, completed.find(item => item.id == id)]);
                setCompleted(completed.filter(complete => complete.id !== id));
                break;
        }
    }

    const remove = (type, id) => {
        switch (type) {
            case types.TYPE_TODOS:
                setTodos(todos.filter(todo => todo.id !== id));
                break;

            case types.TYPE_COMPLETED: 
                setCompleted(completed.filter(todo => todo.id !== id));
                break;
        }
    }

    return (
        <>
            <BeginForm create={create} />
            <Row justify="center" align="middle">
                <TodoList todos={todos} toggle={toggle} remove={remove} />
                <CompletedList completed={completed} toggle={toggle} remove={remove} />
            </Row>
        </>
    );
};

export default App;