import * as React from "react";
import ReactTable, { Column } from "react-table";
import 'react-table/react-table.css'
import './SectionOne.scss'

import { hot } from "react-hot-loader/root"

export interface SectionOneTableProps { data: { Headers: Column<{}>[], Data: {}[] }};

const SectionOne = (props: SectionOneTableProps) => 
    <ReactTable className="table-hover table-light" columns={props.data.Headers} data={props.data.Data} />

export default hot(SectionOne)