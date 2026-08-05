import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import Con_1st from './apiData/home_page/Con_1st.jsx'
import Con_2nd from './apiData/home_page/Con_2nd.jsx'
import Con_3rd from './apiData/home_page/Con_3rd.jsx'

const App = () => {

  return (
    <div className='min-h-screen max-w-screen'>
      <NavBar />
      <Outlet />
      <Footer />
      <Con_1st />
      <Con_2nd />
      <Con_3rd />
    </div>
  )
}

export default App