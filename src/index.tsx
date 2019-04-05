import * as React from "react";
import * as ReactDOM from "react-dom";

// Start of component imports
import { NavigationBar } from "./Components/NavigationBar";
import SharedLayout  from "./Components/SharedLayout";
import App from "./Components/App";
import SectionOne from "./Components/SectionOne/SectionOne";
// End of component imports

const tableData = { 
    Headers: [
        { Header: <th><span>Faucet<br/>Status</span></th>, accessor: "faucet_status"}, 
        { Header: <th><span>Faucet<br/>Name</span></th>, accessor: "faucet_name"},
        { Header: <th><span>Coin<br/>Name</span></th>, accessor: "coin_name"},
        { Header: <th><span>Faucet<br/>Payment</span></th>, accessor: "faucet_payment"},
        { Header: <th><span>Faucet<br/>Timer</span></th>, accessor: "faucet_timer"},
        { Header: <th><span>Faucet<br/>Referral</span></th>, accessor: "faucet_referral"},
        { Header: <th><span>Faucet<br/>Details</span></th>, accessor: "faucet_details"},
        { Header: <th><span>Minimum<br/>Withdrawal</span></th>, accessor: "minimum_withdrawal"},
        { Header: <th><span>Withdrawal<br/>Fee</span></th>, accessor: "withdrawal_fee"},
        { Header: <th><span>Claim<br/>Faucet</span></th>, accessor: "claim_faucet"}
    ],
    Data: [
        { faucet_status: <td className="faucet-status">LEGIT</td>, faucet_name: "Bitnyx", coin_name: "Bitcoin (BTC)", faucet_payment: "Direct", faucet_timer: "30 Minutes", faucet_referral: "50%", faucet_details: "R", minimum_withdrawal: 0.00025000, withdrawal_fee: "No fees", claim_faucet: "Claim" }, 
    ]
}

ReactDOM.render(<NavigationBar />, document.getElementById("navigation")); // Add navigationbar
ReactDOM.render(<SharedLayout />, document.getElementById("root")); // Add a shared layout to root
ReactDOM.render(<App compiler="TypeScript" framework="React" programmer="Mike" />, document.getElementById("mainLayout")); // Add the app layout to shared layout
ReactDOM.render(<SectionOne data={tableData} />, document.getElementById("section-one")) // Add component to section-one div
