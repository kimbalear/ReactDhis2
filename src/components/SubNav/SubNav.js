import React from 'react'

class SubNav extends React.Component {
    render() {
        const { path } = this.props
        return (
            <div className="sub_nav">
                <div className="title">{path}</div>
            </div>
        )
    }
}
export default SubNav