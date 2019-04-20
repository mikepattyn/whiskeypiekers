import * as React from 'react'
export interface IProps {
    characters: {};
}

class CharacterPresentationalComponent extends React.Component<IProps> {
    componentWillMount(){console.log(this.state)}
    componentDidMount(){console.log(this.state)}
    async componentDidUpdate() {
        console.log("Component did update.")
        if (this.props.characters) {
            var characters = JSON.parse(JSON.stringify(this.props.characters))
            var items = ""

            for (var i = 0; i < characters.length; i++) {
                var item =
                    `<div className"col-lg-3 col-md-4 col-xs-6 thumb">
                        <video src="${characters[i].url}" type="video/mp4" autoplay />
                    </div>`
                items += item

            }

            document.getElementById('container').innerHTML += `<div class="row">${items}</div>`

            document.getElementById('tableHeaderTitle').innerText += ' with data from Container :D'
        }
    }
    test = this.props;
    render() {
        if (this.test != null) {
            return (
                <>
                    <h3 className="tableHeaderTitle" id="tableHeaderTitle">Hello from Presentational</h3>
                    <div id="container">
                        
                    </div>
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