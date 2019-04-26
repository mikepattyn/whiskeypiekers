import * as React from 'react'
import './X01.scss'
import X01TrainingForm from './X01TrainingForm'
import { fetchListData } from '../Actions/x01Actions'
import { connect } from 'react-redux';
import { maxScoresList, checkOutList, levelList, setList, legsList } from '../../Static/X01';
import { X01PropsForSelects, X01TrainingFormListSelectLists } from '../Classes/X01';

class X01 extends React.Component<any, any> {
    componentWillMount(){
        const list: X01PropsForSelects = new X01PropsForSelects()
        list.data = new X01TrainingFormListSelectLists()
        list.data.scores = maxScoresList.map((number: number, index: number) => { return (<option key={index} value={number}>{number}</option>) })
        list.data.checkouts = checkOutList.map((number: string, index: number) => { return (<option key={index} value={number}>{number}</option>) }),
        list.data.levels = levelList.map((level: number) => { return (<option key={level + 1} value={level + 1}>Level {level + 1}</option>) }),
        list.data.sets = setList.map((set: number) => { return (<option key={set + 1} value={set + 1}>{set + 1}</option>) }),
        list.data.legs = legsList.map((leg: number) => { return (<option key={leg + 1} value={leg + 1}>{leg + 1}</option>) }),
        
        this.setState(list)
    }
    constructor(props: any){
        super(props)
    }
    render() {
        console.log(this.state)
        const step: number = 1
        switch (step) {
            case 1:
                return (
                    <X01TrainingForm scores={this.state.data.scores} checkouts={this.state.data.checkouts} levels={this.state.data.levels} sets={this.state.data.sets} legs={this.state.data.legs} />
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
