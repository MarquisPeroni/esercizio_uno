import { Component } from 'react'

class ClassComponent extends Component {
    render() {
        return (
            <div>
                <h1 className='my-title'>{this.props.bubba} Forrest {this.props.bubba} </h1>
            </div>
        )
    }
}

export default ClassComponent