import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddProduct from './Product/AddProduct'
import ViewAndEdit from './Product/viewAndEdit'
import ShowProduct from './Product/showProduct'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddProduct/>}/>
      <Route path='/viewAndEdit' element={<ViewAndEdit/>}/>
      <Route path='/showProduct' element={<ShowProduct/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
