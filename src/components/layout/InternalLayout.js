import React from 'react'
import Header from './Header'
import Footer from './Footer'
import InternalHeader from '../InternalHeader'

const InternalLayout = ({ children, title, description }) => {
    return (
        <>
            <Header />
            <InternalHeader title={title} description={description} />
            <div className="wave-divider"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path></svg></div>
            <main className="bg-white">
                <div className="max-w-6xl mx-auto py-16 px-4 xl:px-0">
                    {children}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default InternalLayout