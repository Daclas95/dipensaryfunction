import React, { Component, Fragment } from "react";
import "./home.scss";
import moment from "moment";
import patientIcon from "./../../../src/assets/images/patienticon.png";

import {
  Row,
  Col,
  List,
  Empty,
  Skeleton,
  Statistic,
  Avatar,
  Badge,
  Space,
  Button,
  Comment,
  Typography
} from "antd";

function Home() {
  const { Text } = Typography;
  const events = [
    {
      name: "Lavanjan",
      contactNo: "077712345",
      event: "birthday",
    },
    {
      name: "Siva",
      contactNo: "077712345",
      event: "wedding",
    },
    {
      name: "Giva",
      contactNo: "077712345",
      event: "birthday",
    },
  ];

  const followUps = [
    {
      patientName: "Lavanjan",
      msg: "Hes a sugar patient. Please Ask Is he check the sugar level",
    },
    {
      patientName: "Siva",
      msg: "Hes a sugar patient. Please Ask Is he check the sugar level",
    },
    {
      patientName: "Siva",
      msg: "Hes a sugar patient. Please Ask Is he check the sugar level",
    },
  ];

  return (
    <Fragment>
      <div className="eventPanel">
        <List
          locale={{
            emptyText: (
              <Empty
                style={{
                  marginTop: 120,
                }}
                image="https://img.icons8.com/cute-clipart/100/000000/nothing-found.png"
                imageStyle={{
                  height: 100,
                }}
                description={
                  <span
                    style={{
                      color: "#ff4d4f",
                      fontWeight: "bold",
                      fontStyle: "italic",
                      fontSize: 15,
                    }}
                  >
                    No events available in this date
                  </span>
                }
              ></Empty>
            ),
          }}
          header={
            <Space size={320}>
              <span
                style={{
                  color: "#47A8FB",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Today Events
              </span>
              <Badge count={5} size="small">
                {/* <NotificationOutlined /> */}
                <img src="https://img.icons8.com/fluent/25/000000/appointment-reminders.png" />
              </Badge>
            </Space>
          }
          bordered
          dataSource={events}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    size="large"
                    src="https://img.icons8.com/cute-clipart/64/000000/birthday-cake.png"
                  />
                }
                title={
                  <>
                    <Row>
                      <Col>
                        <span
                          style={{
                            fontStyle: "italic",
                            fontWeight: "bold",
                            marginRight: 2,
                          }}
                        >
                          Name:-{" "}
                        </span>
                      </Col>
                      <Col>
                        {/* <span>{<Skeleton />}</span> */}
                        <Skeleton.Input
                          style={{
                            width: 227,
                            height: 20,
                            marginTop: 3,
                            borderRadius: 5,
                          }}
                          active={true}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span
                          style={{
                            fontStyle: "italic",
                            fontWeight: "bold",
                            marginRight: 2,
                          }}
                        >
                          P.Number:-{" "}
                        </span>
                      </Col>
                      <Col>
                        <Skeleton.Input
                          style={{
                            width: 200,
                            height: 20,
                            marginTop: 3,
                            borderRadius: 5,
                          }}
                          active={true}
                        />
                      </Col>
                    </Row>
                  </>
                }
              />
              <div style={{ textAlign: "center", marginRight: 23 }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => alert("ihoooo")}
                  src="https://img.icons8.com/emoji/37/000000/white-heart.png"
                />
                <h6>wish</h6>
              </div>
              {/* <div>{item}</div> */}
            </List.Item>
          )}
        />
        <List
          locale={{
            emptyText: (
              <Empty
                style={{
                  marginTop: 120,
                }}
                image="https://img.icons8.com/cute-clipart/100/000000/nothing-found.png"
                imageStyle={{
                  height: 100,
                }}
                description={
                  <span
                    style={{
                      color: "#ff4d4f",
                      fontWeight: "bold",
                      fontStyle: "italic",
                      fontSize: 15,
                    }}
                  >
                    No events available in this date
                  </span>
                }
              ></Empty>
            ),
          }}
          header={
            <Space size={280}>
              <span
                style={{
                  color: "#47A8FB",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Today Follow Ups
              </span>
              <Badge count={5} size="small">
                {/* <NotificationOutlined /> */}
                <img src="https://img.icons8.com/fluent/25/000000/appointment-reminders.png" />
              </Badge>
            </Space>
          }
          bordered
          dataSource={followUps}
          renderItem={(followUpsItems) => (
            <List.Item>
              <Comment
                author={followUpsItems.patientName}
                avatar={
                  <Avatar src="https://img.icons8.com/bubbles/50/000000/patient-care.png" />
                }
              content={<><p>{followUpsItems.msg}</p> <Text mark>0771234567</Text></>}
              ></Comment>
              <div style={{ textAlign: "center", marginRight: 23 }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => alert("ihoooo")}
                  src="https://img.icons8.com/ios/25/000000/outgoing-call.png"
                />
                <h6>Ask</h6>
              </div>
              {/* <div>{item}</div> */}
            </List.Item>
          )}
        />
      </div>
    </Fragment>
  );
}

export default Home;
