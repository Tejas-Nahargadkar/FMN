import React from "react";
import "./SubscriptionPage.css";
import SubscriptionData from "../../../src/SubscriptionData";
import SubscriptionImage from '../assets/subscriptionimage.svg'
import {
  CancelOutlined,
  CheckCircleOutlined,
} from "@mui/icons-material";
export default function SubscriptionPage() {
  return (
    <div className="SubscriptionPage-Container">
      <div className="SubscriptionPage-Header">
        <h1>Get a Comprehensive job search pack for 1 year.</h1>
        <h2>Became a featured candidate in FindMyNext Job.</h2>
      </div>
      <div className="SubscriptionTable-Container">
        <div className="TableHead">
          <h2>Benefits of Paid Services</h2>
          <span></span>
        </div>
        <div className="Free">
          <h2>Free</h2>
          <span></span>
        </div>

        <div className="Basic">
          <h2>Basic</h2>
          <span></span>
        </div>
        <div className="Premium">
          <h2>Premium</h2>
          <span></span>
        </div>
        {SubscriptionData.map((TableRows, index) => (
          <TableData key={index} {...TableRows} />
        ))}
      </div>
      <div className="Subscription-Price-Container">
        <div className="Subscription-Price-Header">
          <h1>Subscription For 1 Month</h1>
        </div>
        <div className="Subscription-row">
        <div className="Price">
            <h3>Basic Plans</h3>
            <h4>500 Rs</h4>

            <div className="Price-Button">
              <button className="Price-Btn">BUY NOW</button>
            </div>
        </div>
        <div className="Price">
            <h3>Premium Plans</h3>
            <h4>1000 Rs</h4>

            <div className="Price-Button">
              <button className="Price-Btn">BUY NOW</button>
            </div>
        </div>
        <div className="Subscription-price-Image">
          <img src={SubscriptionImage} alt="" />
        </div>
        </div>
      </div>
    </div>
  );
}
function TableData(props) {
  const { Subject, Free, Basic, Premium } = props;
  return (
    <>
      <div className="Table-Subject">
        <h3>{Subject}</h3>
        <span></span>
      </div>

      <div className="Free-Button">
        <CancelOutlined color={Free ? "green" : "red"} />{" "}
      </div>
      <div className="Basic-Button">
        <CheckCircleOutlined color={Basic ? "green" : "red"} />{" "}
      </div>

      <div className="Premium-Button">
        <CheckCircleOutlined color={Premium ? "green" : "red"} />{" "}
      </div>
    </>
  );
}
