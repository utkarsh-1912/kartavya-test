import React from "react";
import "./donate.css";
import qrMock from "../../assets/qr_mock.png";
import qrCode from "../../assets/qrcode.png";
import Table from "../../Component/Table/Table";
import Scheme from "../../Component/Scheme/Scheme";

const Donate = () => {
  return (
    <div className="donateComp">
      <div className="marigin"></div>
      <h1 className="head">Donate</h1>
      <Scheme />
      <Table />
      <div className="payment" id="payment">
        <h1>Payment Mode</h1>
        <p>
          The following are the payment modes available to accept for
          sponsership :
        </p>
        <div className="donate Account">
          <div className="container right-row">
            <h1>1. Bank Transfer</h1>
            <table>
              <tr>
                <td>Account name</td>
                <td>KARTAVAYA</td>
              </tr>
              <tr>
                <td>Account no. </td>
                <td>30823375289</td>
              </tr>{" "}
              <tr>
                <td>Account Type</td>
                <td>CURRENT</td>
              </tr>{" "}
              <tr>
                <td>Bank Name</td>
                <td>State Bank of India, ISM Campus</td>
              </tr>{" "}
              <tr>
                <td>Branch Code</td>
                <td>1641</td>
              </tr>{" "}
              <tr>
                <td>IFSC Code</td>
                <td>SBIN0001641</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="donate Upi">
          <div className="container right-row">
            <h1>2. Scan to Donate</h1>
            <p>
              Remember that the happiest people are not those getting more, but
              those giving more.
            </p>
            <img src={qrCode} />
          </div>
          <div className="container left-row">
            <img src={qrMock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
