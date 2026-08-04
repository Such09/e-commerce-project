import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import Con_1st from './apiData/home_page/Con_1st.jsx'
import Con_2nd from './apiData/home_page/Con_2nd.jsx'
import Con_3rd from './apiData/home_page/Con_3rd.jsx'
import Shose from './apiData/container_1/Shose.jsx'
import Watch from './apiData/container_1/Watch.jsx'
import Belt from './apiData/container_1/Belt.jsx'
import Book from './apiData/container_1/Book.jsx'
import Perfume from './apiData/container_1/Perfume.jsx'
import Shirt from './apiData/container_1/Shirt.jsx'
import Mobile from './apiData/container_2/Mobile.jsx'
import Laptop from './apiData/container_2/Laptop.jsx'
import Tabs from './apiData/container_2/Tabs.jsx'
import Kurti from './apiData/container_3/Kurti.jsx'

const App = () => {

  return (

    <div className='min-h-screen max-w-screen'>
      <NavBar />
      <Outlet />
      <Footer />
      <Con_1st />
      <Con_2nd />
      <Con_3rd />
      <Shose />
      <Watch />
      <Belt />
      <Book />
      <Perfume />
      <Shirt />
      <Mobile />
      <Laptop />
      <Tabs />
      <Kurti />
    </div>
  )
}

export default App