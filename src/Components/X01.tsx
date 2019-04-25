import * as React from 'react'
import './X01.scss'

class X01 extends React.Component {
    render() {
        const maxScoresList = [301, 401, 501, 601, 701, 801, 901, 1001]
        const checkOutList = ["Double Out", "Masters Out", "Straight Out"]
        const levelList = Array.from(Array(15).keys())
        const setList = Array.from(Array(30).keys())
        const legsList = Array.from(Array(30).keys())

        const scores = maxScoresList.map((number, index) => { return (<option key={index} value={number}>{number}</option>) })
        const checkouts = checkOutList.map((number, index) => { return (<option key={index} value={number}>{number}</option>) })
        const levels = levelList.map(level => { return (<option key={level + 1} value={level + 1}>Level {level + 1}</option>) })
        const sets = setList.map(set => { return (<option key={set + 1} value={set + 1}>{set + 1}</option>) })
        const legs = legsList.map(leg => { return (<option key={leg + 1} value={leg + 1}>{leg + 1}</option>) })

        return (
            <div className="container x01-form">
                <h4>X01</h4>
                <form>
                    <div className="form-input-group">
                        <label>Select level</label>
                        <select className="form-control" name="level">
                            {levels}
                        </select>
                    </div>
                    <br />
                    <div className="form-input-group">
                        <label>Select check-out type</label>
                        <select className="form-control" name="checkOut">
                            {checkouts}
                        </select>
                    </div>
                    <br />
                    <div className="form-input-group">
                        <label>Select score</label>
                        <select className="form-control" name="score" id="scores">
                            {scores}
                        </select>
                    </div>
                    <br />
                    <div className="form-row">
                        <div className="form-input-group col">
                            <label>Winning Legs</label>
                            <select className="form-control" name="score" id="scores">
                                {legs}
                            </select>
                        </div>
                        <div className="form-input-group col">
                            <label>Winning Sets</label>
                            <select className="form-control" name="score" id="scores">
                                {sets}
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary form-control btn-start">Start</button>
                </form>
            </div>
        )
    }
}

export default X01