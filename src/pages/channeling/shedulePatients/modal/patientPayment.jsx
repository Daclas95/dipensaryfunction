import React, { Fragment, useState } from "react";
import { Form, Descriptions, Row, Col, Typography, Switch, Card } from "antd";
import Button from "./../../../../component/atoms/button/Custombutton";
import { useDispatch } from "react-redux";
import { patientStepsRender } from "../redux/actions/ActionPatientModal";
import Input from "./../../../../component/atoms/input/CustomInput";

const { Text } = Typography;
function PatientPayment() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const showPaymentCon = () => {
    if (loading) {
      return (
        <Card style={{ width: "100%", marginTop: 16 }}>
          <Form layout="vertical">
            <Row gutter={24}>
              <Col span={8}>
                <Form.Item label="Advanced Fees">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Discount">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Total">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      );
    }
  };

  const paymentSwitchOnChange = (checked) => {
    setLoading(checked);
  };

  return (
    <Fragment>
      <br />
      <Row justify="center" gutter={18}>
        <Col span={18}>
          <Descriptions size="middle" bordered>
            <Descriptions.Item label="Patient ID">
              <Text>PT00001</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Patient Name">
              <Text>Lavanjan</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Appointment Date">
              <Text mark>2020.12.20</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Doctor Name">
              <Text>Mr. John Abraham</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Appointment Time">
              10.30 A.M
            </Descriptions.Item>
            <Descriptions.Item label="Number of Token">05</Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <br />
      <Row style={{ marginLeft: "160px" }} gutter={6}>
        <Col span={4}>
          <Text>Fees - Optional</Text>
        </Col>
        <Col span={2}>
          <Switch
            checkedChildren="on"
            unCheckedChildren="off"
            onChange={paymentSwitchOnChange}
          />
        </Col>
      </Row>
      <Row justify="center" gutter={18}>
        <Col span={18}>{showPaymentCon()}</Col>
      </Row>
      <br />
      <Row justify="end" gutter={6}>
        <Col span={3}>
          <Form.Item>
            <Button
              text="Pevious"
              onClick={() => dispatch(patientStepsRender(1))}
            />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item>
            <Button text="Next" />
          </Form.Item>
        </Col>
      </Row>
    </Fragment>
  );
}

export default PatientPayment;
