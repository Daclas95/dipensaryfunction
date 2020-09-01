import React, { useState, Fragment } from "react";
import Modal from "./../../../../component/organisms/modalForm/CustomModalForm";
import Button from "./../../../../component/atoms/button/Custombutton";
import "./addPatients.scss";
import PatientAppointmentStepsForm from "./patientAppointmentStepsForm";

function AddNewPatientsModalForm() {
  const [visible, setVisible] = useState(false);

  let maskStyleObj = {
    backgroundColor: "#868C8F",
  };
  return (
    <Fragment>
      <Button
        color="white"
        text="Add Patient"
        onClick={() => setVisible(true)}
      ></Button>

      <Modal
        maskStyle={maskStyleObj}
        maskClosable={false}
        title="Add Patient"
        visible={visible}
        onCancel={() => setVisible(false)}
        width="95%"
        top="30px"
        footer={null}
      >
        <PatientAppointmentStepsForm />
      </Modal>
    </Fragment>
  );
}

export default AddNewPatientsModalForm;
