import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddProduct from './Product/AddProduct'
import ViewAndEdit from './Product/viewAndEdit'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddProduct/>}/>
      <Route path='/viewAndEdit' element={<ViewAndEdit/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
