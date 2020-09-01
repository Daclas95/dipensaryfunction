import React from "react";
import { Route } from "react-router-dom";
import Channeling from "./../../../pages/channeling/index";
import Medical from "./../../../pages/medical/index";
import Pharmacy from "./../../../pages/pharmacy/index";
import Finance from "./../../../pages/finance/index";
import Stock from "./../../../pages/stock/index";

function Body() {
  return (
    <>
      <Route path="/channeling" component={Channeling} />
      <Route path="/medical" component={Medical} />
      <Route path="/pharmacy" component={Pharmacy} />
      <Route path="/finance" component={Finance} />
      <Route path="/stock" component={Stock} />
    </>
  );
}

export default Body;
