import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./Components/Navbar/Nav"
import Head from "./Components/Heading/Head"
import Body from "./Components/Body/Body"
import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"
import Figma from "./Components/Figma/Figma"
import Community from "./Components/Community/Community"
import Figmabutton from "./Components/Figmabutton/Figmabutton"
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Head />
                <Routes>
                    <Route path="/body" element={<Body />} />
                    <Route path='/community' element={<Community />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/figmawind' element={<Figma />} />
                    <Route path='/figma' element={<Figmabutton/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App