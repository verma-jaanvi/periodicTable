import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Loading from "./componenets/Loading";
import Navbar from "./componenets/Navbar";
import HeroSection from "./componenets/HeroSection";
import FeatureSection from "./componenets/FeatureSection";
import Footer from "./componenets/Footer";
import PeriodicTable from "./componenets/PeriodicTable";

function App() {
  const [count, setCount] = useState(0)

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300)
  }, [])
  if (loading) {
    return <Loading />
  }

  return (
    <>
        <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <PeriodicTable />
        <Footer />
      </div>
    </>
  )
}

export default App
