import { Route, Routes } from 'react-router-dom'

import PortfolioScreen from './screens/Portfolio'
import { ListProjectsScreen } from './screens/ListProjects'
import { ProjectScreen } from './screens/Project'

import './App.css'

export default function App() {
  
  return (
    <Routes>
      <Route 
        path={`${import.meta.env.BASE_URL}`} 
        element={<PortfolioScreen />} 
      />
      <Route 
        path={`${import.meta.env.BASE_URL}allprojects`} 
        element={<ListProjectsScreen />} 
      />
      <Route 
        path={`${import.meta.env.BASE_URL}project`} 
        element={<ProjectScreen />} 
      />
    </Routes>
  )
}
