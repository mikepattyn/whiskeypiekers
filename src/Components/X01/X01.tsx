import * as React from 'react'
import './X01.scss'
import X01TrainingForm from './X01TrainingForm'
import { fetchListData } from '../Actions/x01Actions'
import { connect } from 'react-redux';
import { maxScoresList, checkOutList, levelList, setList, legsList } from '../../Static/X01';

class X01 extends React.Component<any, {}> {
    componentWillMount(){
        const listData = {
            "scores": maxScoresList.map((number: number, index: number) => { return (<option key={index} value={number}>{number}</option>) }) || null,
            "checkouts": checkOutList.map((number: string, index: number) => { return (<option key={index} value={number}>{number}</option>) }) || null,
            "levels": levelList.map((level: number) => { return (<option key={level + 1} value={level + 1}>Level {level + 1}</option>) }) || null,
            "sets": setList.map((set: number) => { return (<option key={set + 1} value={set + 1}>{set + 1}</option>) }) || null,
            "legs": legsList.map((leg: number) => { return (<option key={leg + 1} value={leg + 1}>{leg + 1}</option>) }) || null,
        }
        this.setState({listData})
    }
    constructor(props: any){
        super(props)
        this.state = {
            listData: []
        }
    }
    render() {
        console.log(this.state)
        const step: number = 1
        switch (step) {
            case 1:
                return (
                    <X01TrainingForm props={this.state} />
                )
            default:
                return <></>
        }
    }
}

const mapStateToProps = (state: any) => ({
    listData: state.listData
})

export default connect(mapStateToProps, { fetchListData })(X01) 
