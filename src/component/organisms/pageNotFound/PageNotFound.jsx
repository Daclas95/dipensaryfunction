import React, { Component } from "react";
import { Result } from "antd";
import Button from "./../../atoms/button/Custombutton";

export class PageNotFound extends Component {
  render() {
    return (
      <div>
        <Result
          style={{ marginTop: "40px" }}
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
        />
        ,
      </div>
    );
  }
}

export default PageNotFound;
