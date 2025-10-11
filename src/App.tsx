import { Route, Routes } from 'react-router-dom'

import PortfolioScreen from './screens/Portfolio'
import { ListProjectsScreen } from './screens/ListProjects'
import { ProjectScreen } from './screens/Project'

import './App.css'

export default function App() {
  
  return (
    <Routes>
      <Route 
        path={`/`} 
        element={<PortfolioScreen />} 
      />
      <Route 
        path={`/allprojects`} 
        element={<ListProjectsScreen />} 
      />
      <Route 
        path={`/project`} 
        element={<ProjectScreen />} 
      />
    </Routes>
  )
}
