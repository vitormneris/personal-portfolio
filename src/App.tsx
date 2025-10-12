import { Route, Routes } from 'react-router-dom'

import PortfolioScreen from './screens/Portfolio'
import { ListProjectsScreen } from './screens/ListProjects'
import { ProjectScreen } from './screens/Project'

import './App.css'
import ScrollToTop from './components/ScrollToTop'

export default function App() {

  return (
    <>
      <ScrollToTop />
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
    </>
  )
}
