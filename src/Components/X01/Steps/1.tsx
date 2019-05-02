import * as React from "react"
import { CheckOut } from "../../Enums/X01";

class X01Step1 extends React.Component<any, any>{
    render() {
        return (
            <div className="container x01-form">
                <h4>X01</h4>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-input-group">
                        <label>Select</label>
                        <select onChange={this.props.onChange} className="form-control" name="level">
                            <option value="0">Level</option>
                            <option value="1">Level 1</option>
                            <option value="2">Level 2</option>
                            <option value="3">Level 3</option>
                            <option value="4">Level 4</option>
                            <option value="5">Level 5</option>
                        </select>
                    </div>
                    <br />
                    <div className="form-input-group">
                        <label>Select</label>
                        <select onChange={this.props.onChange} className="form-control" name="checkout">
                            <option value="0">Checkout</option>
                            <option value="1">{CheckOut.Double}</option>
                            <option value="2">{CheckOut.Masters}</option>
                            <option value="3">{CheckOut.Straight}</option>
                        </select>
                    </div>
                    <br />
                    <div className="form-input-group">
                        <label>Select</label>
                        <select onChange={this.props.onChange} className="form-control" name="score" id="scores">
                            <option value="0">Score</option>
                            <option value="301">301</option>
                            <option value="401">401</option>
                            <option value="501">501</option>
                        </select>
                    </div>
                    <br />
                    <div className="form-row">
                        <div className="form-input-group col">
                            <label>Winning</label>
                            <select onChange={this.props.onChange} className="form-control" name="legs" id="scores">
                                <option value="0">Legs</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div className="form-input-group col">
                            <label>Winning</label>
                            <select onChange={this.props.onChange} className="form-control" name="sets" id="scores">
                                <option value="0">Sets</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                    <button id="x01-training-submit-btn" disabled type="submit" className="btn btn-primary form-control btn-start">Start</button>
                </form>
            </div>
        )
    }
}
export default X01Step1