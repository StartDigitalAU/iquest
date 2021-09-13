import React from 'react'

const IconLoader = ({ icon, classes }) => {
    return (
        React.createElement(icon, { className: classes }, null)
    )
}

export default IconLoader