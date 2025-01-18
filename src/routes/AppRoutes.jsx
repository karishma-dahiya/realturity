import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import ErrorBoundary from '../components/ErrorBoundry'
import EmiCalculator from '../pages/EmiCalculator'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactUs from '../pages/Contact'
import AboutUs from '../pages/AboutUs'
import HomePage from '../pages/Home'
import FAQPage from '../pages/Faq'
import ScrollToTop from '../components/ScrollTop'
import LoansForYou from '../pages/Loans'

const AppRoutes = () => {
    const ErrorFallback = ({ error }) => {
        return (
            <div role="alert">
                <p>Something went wrong: {error.message}</p>
            </div>
        );
    };
    return (
        <Router>
            <ScrollToTop/>
            <Navbar /> {/* Add Navbar here to make it available on all pages */}
            <ErrorBoundary FallbackComponent={ErrorFallback}> {/* ErrorBoundary for global error handling */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/tools/emi-calculator" element={<EmiCalculator />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/loans" element={<LoansForYou />} />
                </Routes>
            </ErrorBoundary>
            <Footer/>
      </Router>
  )
}

export default AppRoutes