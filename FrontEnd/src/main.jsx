import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { store } from './reduxStore/store.js'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Content from './components/Content.jsx'
import Shose from './pages/1st_container/Shose.jsx'
import Watch from './pages/1st_container/Watch.jsx'
import Belt from './pages/1st_container/Belt.jsx'
import Books from './pages/1st_container/Books.jsx'
import Shirt from './pages/1st_container/Shirt.jsx'
import Perfume from './pages/1st_container/Perfume.jsx'
import Mobiles from './pages/2nd_container/Mobiles.jsx'
import Kurti from './pages/3rd_container/Kurti.jsx'
import Tabs from './pages/2nd_container/Tabs.jsx'
import Laptops from './pages/2nd_container/Laptops.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Login from './components/Login.jsx'
import ProductView from './product_Cards/con_1/Shoes_cards.jsx'
import Belt_card from './product_Cards/con_1/Belt_cards.jsx'
import Watch_card from './product_Cards/con_1/Watch_cards.jsx'
import Perfume_card from './product_Cards/con_1/Perfume_cards.jsx'
import Book_card from './product_Cards/con_1/Book_cards.jsx'
import Shirt_card from './product_Cards/con_1/Shirt_cards.jsx'
import Mobile_card from './product_Cards/con_2/Mobile_cards.jsx'
import Laptop_card from './product_Cards/con_2/Laptops_cards.jsx'
import Tablet_card from './product_Cards/con_2/Tablet_cards.jsx'
import Kurti_card from './product_Cards/con_3/Kurti_cards.jsx'
import SearchingData from './pages/Searching_Data/SearchingData.jsx'
import Profile from './pages/User_info/Profile.jsx'
import Cart from './pages/User_info/Cart.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Login />} />

      <Route path='/app' element={<App />}>
        <Route path='' element={<Content />} />
        <Route path='shose' element={<Shose />} />
        <Route path='watch' element={<Watch />} />
        <Route path='belt' element={<Belt />} />
        <Route path='books' element={<Books />} />
        <Route path='shirts' element={<Shirt />} />
        <Route path='perfume' element={<Perfume />} />
        <Route path='mobiles' element={<Mobiles />} />
        <Route path='kurti' element={<Kurti />} />
        <Route path='tabs' element={<Tabs />} />
        <Route path='laptops' element={<Laptops />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='shoes/shoes_card/:id' element={<ProductView />} />
        <Route path='belt/belt_card/:id' element={<Belt_card />} />
        <Route path='watch/watch_card/:id' element={<Watch_card />} />
        <Route path='perfume/perfume_card/:id' element={<Perfume_card />} />
        <Route path='book/book_card/:id' element={<Book_card />} />
        <Route path='shirt/shirt_card/:id' element={<Shirt_card />} />
        <Route path='mobile/mobile_card/:id' element={<Mobile_card />} />
        <Route path='laptop/laptop_card/:id' element={<Laptop_card />} />
        <Route path='tablet/tablet_card/:id' element={<Tablet_card />} />
        <Route path='kurti/kurti_card/:id' element={<Kurti_card />} />

        {/* NavBar  */}
        <Route path='search/product' element={<SearchingData />} />
        <Route path='profile' element={<Profile />} />
        <Route path='cart' element = { <Cart /> } />

      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      // transition={Bounce}
      />
    </Provider>
  </StrictMode>,
)
