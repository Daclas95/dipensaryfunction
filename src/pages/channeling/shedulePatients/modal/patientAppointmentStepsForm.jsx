import React, { Component, useState } from "react";
import { Steps } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import AddNewPatients from "./addNewPatients";
import PatientSummary from "./patientSummary";
import PatientPayment from "./patientPayment";

const { Step } = Steps;

const steps = [
  {
    title: "Add Patient",
    content: <AddNewPatients />,
    icon: <UserOutlined />,
  },
  {
    title: "Patient Summary",
    content: <PatientSummary />,
    icon: <SolutionOutlined />,
  },
  {
    title: "Payment",
    content: <PatientPayment />,
    icon: <MoneyCollectOutlined />,
  },
];
function PatientAppointmentStepsForm() {
  const current = useSelector((state) => state.ReducerPatientModal.current);
  return (
    <>
      <Row justify="center" gutter={24}>
        <Col span={16}>
          <Steps current={current}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </Col>
      </Row>

      <div className="steps-content">{steps[current].content}</div>
    </>
  );
}
export default PatientAppointmentStepsForm;
