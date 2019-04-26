import * as React from 'react'


class X01TrainingForm extends React.Component<any, any> {
    constructor(props: any){
        super(props)
        console.log(this.props)
    }
    render() {
        return (
            <div className="container x01-form">
                <h4>X01</h4>
                <form>
                    <div className="form-input-group">
                        <label>Select level</label>
                        <select className="form-control" name="level">
                            {this.props.props.listData.levels}
                        </select>
                    </div>
                    <br />
                    <div className="form-input-group">
                        <label>Select check-out type</label>
                        <select className="form-control" name="checkOut">
                        {this.props.props.listData.checkouts}
                        </select>
                    </div>
                    <br />
                    <div className="form-input-group">
                        <label>Select score</label>
                        <select className="form-control" name="score" id="scores">
                        {this.props.props.listData.scores}
                        </select>
                    </div>
                    <br />
                    <div className="form-row">
                        <div className="form-input-group col">
                            <label>Winning Legs</label>
                            <select className="form-control" name="score" id="scores">
                            {this.props.props.listData.legs}
                            </select>
                        </div>
                        <div className="form-input-group col">
                            <label>Winning Sets</label>
                            <select className="form-control" name="score" id="scores">
                            {this.props.props.listData.sets}
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary form-control btn-start">Start</button>
                </form>
            </div>
        )
    }
}

export default X01TrainingForm