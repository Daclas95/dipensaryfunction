import React from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";

const propsType = {
  overflow: PropTypes.string,
  backgroundColor: PropTypes.string,
  top: PropTypes.string,
  height: PropTypes.string,
};

const customModalForm = (props) => {
  return (
    <>
      <Modal
        maskStyle={props.maskStyle}
        maskClosable={props.maskClosable}
        visible={props.visible}
        title={props.title}
        onOk={props.onOk}
        onCancel={props.onCancel}
        footer={props.footer}
        width={props.width}
        style={{
          height: props.height,
          overflow: props.overflow,
          backgroundColor: props.backgroundColor,
          top: props.top,
          zIndex:props.zIndex
        }}
      >
        {props.children}
      </Modal>
    </>
  );
};

customModalForm.propsType = propsType;
export default customModalForm;
