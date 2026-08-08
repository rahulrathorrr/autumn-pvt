import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import About from './Pages/About'
import VoiceAgents from './Pages/VoiceAgents'
import CustomAutomation from './Pages/CustomAutomation'
import SmartCopilot from './Pages/SmartCopilot'
import SoftwareDelivery from './Pages/SoftwareDelivery'
import Careers from './Pages/Careers'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Privacy from './Pages/Privacy'
import Terms from './Pages/Terms'

const App = () => {
  const router= createBrowserRouter([
    {
    path: '/',
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/services/voice-agents',
        element: <VoiceAgents/>
      },
      {
        path:'/services/custom-automation',
        element: <CustomAutomation/>
      },
      {
        path:'/services/smart-copilots',
        element: <SmartCopilot/>
      },
      {
        path:'/services/software-delivery',
        element: <SoftwareDelivery/>
      },

      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/careers',
        element: <Careers/>
      },
      {
        path:'/blog',
        element: <Blog/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      {
        path:'/privacy',
        element: <Privacy/>
      },
      {
        path:'/terms',
        element: <Terms/>
      },
    
    ]
    }

  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App