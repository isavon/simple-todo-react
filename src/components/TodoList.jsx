import React from 'react';
import { Checkbox, List } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { TYPE_TODOS } from '../constants';

const TodoList = ({ todos, toggle, remove }) => {
    if (!todos.length) {
        return;
    }

    return (
        <List 
            size="small"
            dataSource={todos}
            renderItem={todo => (
                <List.Item>
                    <Checkbox checked={false} onChange={() => toggle(TYPE_TODOS, todo.id)}>{todo.text}</Checkbox>
                    <CloseOutlined onClick={() => remove(TYPE_TODOS, todo.id)} />
                </List.Item>
            )}
        />
    );
};

export default TodoList;