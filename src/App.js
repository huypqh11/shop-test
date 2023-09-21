import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import{routes} from './routes'
import DefautComponent from './components/DefautComponents/DefautComponent';

function App() {
  return ( 
    <div>
      <Router>
        <Routes>
          {routes.map((route,index) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefautComponent : React.Fragment;
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />
            )})}
        </Routes>
      </Router>
    </div>
  )
}

export default App