import * as React from "react";
import { hot } from "react-hot-loader/root";

const SharedLayout = () =>
    <div className="container-fluid">
        <div className="row no-gutters">
            <div className='col-md-12' id="mainLayout"></div>
        </div>
    </div>
 
export default hot(SharedLayout)
