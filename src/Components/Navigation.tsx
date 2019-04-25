import * as React from 'react'

interface ILink {
    label: string,
    link: string
}
export class MenuProps {
    links: ILink[] = []
}

class Navigation extends React.Component<MenuProps> {
    render() {
        const trainingDropdownItems = this.props.links.map((link: ILink, index: number) => {
            if(index == 0)
                return
            return (
                <div className="dropdown-menu" aria-labelledby="trainingDropdown">
                    <a key={index} className="dropdown-item" href={link.link}>{link.label}</a>
                </div>
            )
        })
        return (
            <>
                <div id="navigation">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href={this.props.links[0].link}>    
                            <i className="fas fa-wine-bottle"></i>
                                {this.props.links[0].label}
                            </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="trainingDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Training</a>
                                    {trainingDropdownItems}
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </>
        )
    }
}

export default Navigation