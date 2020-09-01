import React from "react";
import { InputNumber } from "antd";
import PropTypes from "prop-types";

const propsTypes = {
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
};

const customInputNumber = (props) => {
  return (
    <>
      <InputNumber
        max={props.max}
        min={props.min}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        formatter={props.formatter}
        parser={props.parser}
        step={props.step}
        value={props.value}
        name={props.name}
        style={{
          width: props.width,
          backgroundColor: props.backgroundColor,
        }}
      />{" "}
      {props.subtitle}
    </>
  );
};

customInputNumber.propsTypes = propsTypes;

export default customInputNumber;
