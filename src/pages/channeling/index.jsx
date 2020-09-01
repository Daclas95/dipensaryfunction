import React, { Component } from "react";
import { Tabs, Row, Col } from "antd";

import { DoctorSheduleCalender } from "./doctorSheduled/doctorSheduleCalender/DoctorSheduleCalender";
import DoctorDetailsPanel from "./doctorSheduled/doctorDetailsPanel/DoctorDetailsPanel";
import InvoiceTable from "./invoice/invoiceTable/InvoiceTable";
import InvoiceUpdateModel from "./invoice/invoiceUpdateModel/InvoiceUpdateModel";
import { PatientSheduleCalender } from "./shedulePatients/patientsSheduleCalender/PatientSheduleCalender";
import { PatientsSlotPanel } from "./shedulePatients/patientsSlotPanel/PatientsSlotPanel";

const { TabPane } = Tabs;

export class index extends Component {
  render() {
    return (
      <div style={{ marginTop: "1.2%" }}>
        <Tabs size="large">
          <TabPane tab="Doctor Sheduled" key="1">
            <div className="container">
              <Row>
                <Col span={10}>
                  <DoctorDetailsPanel />
                </Col>
                <Col span={14}>
                  <DoctorSheduleCalender />
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tab="Shedule Patients" key="2">
            <div className="container">
              <Row>
                <Col span={10}>
                  <PatientsSlotPanel />
                </Col>
                <Col span={14}>
                  <PatientSheduleCalender />
                  {/* <Modal /> */}
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tab="Invoice" key="3">
            <InvoiceTable />
            <InvoiceUpdateModel />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default index;
