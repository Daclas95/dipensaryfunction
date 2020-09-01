import React from "react";
import { Button } from "antd";
import PropTypes from "prop-types";
const propTypes = {
  color: PropTypes.string,
  labelName: PropTypes.string,
  width: PropTypes.string,
  float: PropTypes.string,
};
const defaultProps = {
  color: "#00474f",
  size: "middle",
  width: "120px",
  text: "Button",
  backgroundColor: "#40a9ff",
  color: "#ffffff",
  fontSize: "15px",
  borderColor:"#40a9ff"
};
const CustomButton = (props) => {
  return (
    <Button
      size={props.size}
      shape={props.shape}
      loading={props.loading}
      disabled={props.disabled}
      htmlType={props.htmlType}
      onClick={props.onClick}
      icon={props.icon}
      htmlType={props.htmlType}
      style={{
        width: props.width,
        margin: props.margin,
        backgroundColor: props.backgroundColor,
        color: props.color,
        fontWeight: props.fontWeight,
        fontSize: props.fontSize,
        borderRadius: props.borderRadius,
        float: props.float,
        borderColor: props.borderColor,
        marginTop:props.marginTop
      }}
    >
      {props.text}
    </Button>
  );
};
CustomButton.propTypes = propTypes;
CustomButton.defaultProps = defaultProps;
export default CustomButton;
