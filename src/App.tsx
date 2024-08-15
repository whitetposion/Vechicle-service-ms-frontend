import React from "react";
import Layout from "@/Layout/Layout.jsx"
import { BrowserRouter } from "react-router-dom"
import './App.css'
import PrivateRouteWrapper from "@/Layout/components/private-router-wrapper";

const App:React.FC = () => {

  return (
    <div className="App">
        <BrowserRouter>
          <PrivateRouteWrapper>
            <Layout/>
          </PrivateRouteWrapper>
        </BrowserRouter>
    </div>
  )
}

export default App
