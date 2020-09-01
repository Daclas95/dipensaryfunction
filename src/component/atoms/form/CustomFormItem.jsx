import React from 'react';
import { Form } from 'antd';

const customFormItem = (props) => {
    return(
        <>
        <Form.Item
        label = { props.label }
        name = { props.name }
        rules = {props.rules}
        labelAlign = { props.labelAlign }
        
        />
        </>
        );
}

export default {customFormItem}