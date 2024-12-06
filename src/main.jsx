import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Products from './components/Body/Products.jsx'
import Productstype from './components/Body/Productstype.jsx'
import SingleProduct from './components/Body/SingleProduct.jsx'
import Skalaton from './components/Body/Skalaton.jsx'
import Cart from './components/Body/Cart.jsx'
import { Provider } from 'react-redux'
import Store from './Store/Store.js'
import Payment from './components/Payment/Payment.jsx'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path='' element = {<Products/>}/>
    <Route path='mobile' element={<Productstype key={2222} title='mobile'/>}/>
    <Route path='tv' element={<Productstype key={22223} title='tv'/>}/>
    <Route path='laptop' element={<Productstype key={22224} title='laptop'/>}/>
    <Route path='gaming' element={<Productstype key={22225} title='gaming'/>}/>
    <Route path='audio' element={<Productstype key={22226} title='audio'/>}/>
    <Route path='appliances' element={<Productstype key={22227} title='appliances'/>}/>
    <Route path='product/:id' element={<SingleProduct/>}/>
    <Route path='product/cart' element={<Cart/>}/>
    <Route path='/:id' element = {<Skalaton/>}/>
    <Route path='/product/payment' element = {<Payment/>}/>
  </Route>
))



createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
  <RouterProvider router={router}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>
  </Provider>
)
