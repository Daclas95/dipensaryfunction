import React from "react";
import { DatePicker } from "antd";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const propsTypes = {
  width: PropTypes.string,
  marginLeft: PropTypes.string,
  backgroundColor: PropTypes.string,
};

const defaultProps = {};

const customDatePicker = (props) => {
  return (
    <>
      <DatePicker
        allowClear={props.allowClear}
        format={props.format}
        name={props.name}
        defaultValue={props.defaultValue}
        defaultPickerValue={props.defaultPickerValue}
        value={props.value}
        onChange={props.onChange}
        size={props.size}
        style={{
          width: props.width,
          marginLeft: props.marginLeft,
          backgroundColor: props.backgroundColor,
        }}
      />
    </>
  );
};

customDatePicker.propsTypes = propsTypes;
customDatePicker.defaultProps = defaultProps;

export default customDatePicker;
