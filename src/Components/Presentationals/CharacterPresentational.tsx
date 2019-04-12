import * as React from 'react'

export interface IProps {
    characters: {};
}

class CharacterPresentationalComponent extends React.Component<IProps> {
    async componentDidUpdate(){
        console.log("Component did update.")
        if(this.props.characters){
            var characters = JSON.parse(JSON.stringify(this.props.characters))
            characters.forEach((character: any) => {
                document.getElementById("tableHeaderRow").innerHTML += '<th class="tableHeader">' + character.name + '</th>';
            });
            document.getElementById('tableHeaderTitle').innerText += ' with data from Container :D'
        }
    }
    test = this.props;
    render() {
        if(this.test != null){
            return (
                <>
                    <h3 className="tableHeaderTitle" id="tableHeaderTitle">Hello from Presentational</h3>
                    <table className="table table-dark characters">
                        <thead className="tableHead">
                            <tr className="tableHeaderRow" id="tableHeaderRow">
                            
                            </tr>
                        </thead>
                    </table>
                </>
            )
        }
    }
    // const characters = state.characters
    //     return (
    //         <>
    //             
    //         </>
    //     )
}

export default CharacterPresentationalComponent