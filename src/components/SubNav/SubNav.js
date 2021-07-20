import React from 'react'
import '../../assets/scss/components/sub_nav.scss'

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