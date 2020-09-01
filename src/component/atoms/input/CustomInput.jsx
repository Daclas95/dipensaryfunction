import React from "react";
import { Input } from "antd";
import PropTypes from "prop-types";
const propTypes = {
  color: PropTypes.string,
  labelName: PropTypes.string,
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
};
const defaultProps = {
  color: "#00474f",
  fontWeight: "normal",
  backgroundColor: "#F5F5F5"
};
const CustomInput = (props) => {
  return (
    <div>
      <Input
        ref={props.ref}
        onPressEnter={props.onPressEnter}
        name={props.name}
        size={props.size}
        bordered={props.bordered}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
        disabled={props.disabled}
        maxLength={props.maxLength}
        style={{
          color: props.color,
          width: props.width,
          fontWeight: props.fontWeight,
          margin: props.margin,
          backgroundColor: props.backgroundColor,
        }}
      />{" "}
      {props.subtitle}
    </div>
  );
};
CustomInput.propTypes = propTypes;
CustomInput.defaultProps = defaultProps;
export default CustomInput;
