import React from 'react'
import "./App.styl"

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import { loadData } from "./services/wixAPI"

import Homepage from './pages/Homepage'
import Music from './pages/Music'
import MusicResume from "./pages/music/Resume"
import MusicEvents from "./pages/music/Events"
import MusicResources from "./pages/music/Resources"
import Software from './pages/Software'
import SoftwareResume from "./pages/software/Resume"
import SoftwareTechnologies from "./pages/software/Technologies"
import NotFound from "./pages/NotFound"

import Navbar from "./components/navbar"
import Footer from "./components/footer"

loadData("homepage")

const router = createBrowserRouter([
    {
      path: "/profile",
      element: <Homepage/>
    },
    {
      path: "/profile/software",
      element: <Software/>
    },
    {
      path: "/profile/software/resume",
      element: <SoftwareResume/>
    },
    {
      path: "/profile/software/technologies",
      element: <SoftwareTechnologies/>
    },
    {
      path: "/profile/music",
      element: <Music/>
    },
    {
      path: "/profile/music/resume",
      element: <MusicResume/>
    },
    {
      path: "/profile/music/resources",
      element: <MusicResources/>
    },
    {
      path: "/profile/music/events",
      element: <MusicEvents/>
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ])
  
  function App() {
    return (
      <div className="app-wrapper">
        <Navbar/>
        <RouterProvider router={router} />
        <Footer/>
      </div>
    );
  }
  
  export default App;