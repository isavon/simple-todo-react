import React from 'react';
import { Checkbox, Divider, List, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { TYPE_COMPLETED } from '../constants';

const CompletedList = ({ completed, toggle, remove }) => {
    if (!completed.length) {
        return;
    }

    return (
        <>
            <Divider plain><Typography.Text type="secondary">{completed.length} completed</Typography.Text></Divider>
            <List 
                size="small"
                className="completed-list"
                dataSource={completed}
                renderItem={todo => (
                    <List.Item>
                        <Checkbox checked onChange={() => toggle(TYPE_COMPLETED, todo.id)}>{todo.text}</Checkbox>
                        <CloseOutlined onClick={() => remove(TYPE_COMPLETED, todo.id)} />
                    </List.Item>
                )}
            />
        </>
    );
};

export default CompletedList;