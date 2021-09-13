import React from 'react'

// This essentially just stamps the icon as a React component so we can call it dynamically
const IconLoader = ({ icon, classes }) => {
    return (
        React.createElement(icon, { className: classes }, null)
    )
}

export default IconLoader