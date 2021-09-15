import React from 'react'
import { Link } from 'gatsby'
import InternalLayout from '../components/layout/InternalLayout'

const Success = () => {
    return (
        <>
            <InternalLayout title="Success">
                <h2>Thanks for your submission!</h2>
                <p>One of our team will get back to you shortly!</p>
                <Link to="/" className="btn btn-blue btn-small mt-4">Back to home</Link>
            </InternalLayout>
        </>
    )
}

export default Success
