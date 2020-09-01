import React from "react";
import { Form } from "antd";

const CustomForm = (props) => {
  return (
    <>
      <Form
      hideRequiredMark = {props.hideRequiredMark}
        layout = {props.layout}
        name={props.name}
        initialValues={props.initialValues}
        onFinish={props.onFinish}
      ></Form>
    </>
  );
};

export default CustomForm;
