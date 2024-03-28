import React from "react";
import Layout from "@/Layout/Layout.jsx"
import { BrowserRouter } from "react-router-dom"
import './App.css'

const App:React.FC = () => {

  return (
    <>
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    </>
  )
}

export default App
