import React, { useEffect } from "react";
import Header from './Header'
import Footer from './Footer'
import WaveDivider from "../WaveDivider"
import InternalHeader from '../InternalHeader'
import { pageTransition, setupAnimateInOnScroll } from "../../js/main";

const InternalLayout = ({ children, title, description }) => {
    useEffect(() => {
        pageTransition()
        setupAnimateInOnScroll()
    }, [])

    return (
        <>
            <Header />
            <InternalHeader title={title} description={description} />
            <WaveDivider />
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