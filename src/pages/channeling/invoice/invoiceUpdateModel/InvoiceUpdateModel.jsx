import React, {useState,useEffect } from "react";
import Model from "../../../../component/organisms/modalForm/CustomModalForm";
import Button from "../../../../component/atoms/button/Custombutton";
import {
  Form,
  Input,
  Select,
  DatePicker,
  Checkbox,
  Row,
  Col,
  Divider,
} from "antd";
import "./InvoiceUpdateModel.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateInvoiceModeClose } from "../redux/action/ActionInvoiceUpdateModel"
import moment from 'moment';


const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
function InvoiceUpdateModel() {
 
 

  const dispatch = useDispatch();

  function onSubmit() { dispatch(updateInvoiceModeClose()) }


  const invoiceUpdateModelVisibile = useSelector(
    (state) => state.ReducerInvoiceUpdateModel.invoiceUpdateModelVisibile
  );
  const selectdate = useSelector(
    (state) => state.ReducerInvoiceUpdateModel.invoiceTableRecords.Date
  );
  const Fullname = useSelector(
    (state) => state.ReducerInvoiceUpdateModel.invoiceTableRecords.FullName
  );
  const ContactNo = useSelector(
    (state) => state.ReducerInvoiceUpdateModel.invoiceTableRecords.ContactNo
  );
  const DoctorName = useSelector(
    (state) => state.ReducerInvoiceUpdateModel.invoiceTableRecords.DoctorName
  );
  const Amount = useSelector(
    (state) => state.ReducerInvoiceUpdateModel.invoiceTableRecords.Amount
  );
  function oncancel() {
    { dispatch(updateInvoiceModeClose()) }
  }

  // dateOnChange = (name, dateString, field) => {
  //   this.setState({
  //     Date:dateString
  //   })
  //   console.log(name, dateString, field);
  // }


  return (
    <div>
      <Model
        visible={invoiceUpdateModelVisibile}
        onCancel={oncancel}
        width="90%"
        footer={[
          <Button
            color="white"
            backgroundColor="#42A387"
            text="Update"
            width="100px"
            onClick={onSubmit}
            key={1}
          ></Button>,
        ]}
      >
        <Form
          layout="vertical"
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
        >
          <Divider>Update Invoice of Patient </Divider>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="In.No" name="InNo">
                {}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Patient Id" name="PatientId">
                {}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="First Name" >
                <Input value={Fullname} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Last Name" >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="Contact No">
                <Input value={ContactNo}/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Date">
                <DatePicker
                  name="date"
                  // defaultValue={moment(this.state.Date)}
                  value={moment(selectdate, 'YYYY-MM-DD')}
                // onChange={(dateString, field)=>this.dateOnChange('date',dateString, field)}
                //{moment(this.props.invoiceTableRecords.Date)} 
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="Doctor Name" >
                <Select placeholder={DoctorName}>
                  <Option value="Dr_Harsha_G">Dr. Harsha Gunasekara</Option>
                  <Option value="Dr_Harsha_Gunasekara">
                    Dr. Harsha Gunasekara Harsha Gunasekara
                    </Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Amount">
                <Input value={Amount} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item label="Payment" name="Payment">
                <Checkbox> Paid </Checkbox>
              </Form.Item>
            </Col>
            {/* <Col>
              <Form.Item>
                <Button type="primary" onClick={onSubmit}>
                  Submit
                </Button>
              </Form.Item>
            </Col> */}
          </Row>
        </Form>
      </Model>
    </div>
  );

}

export default InvoiceUpdateModel;
