import React from 'react'
import './App.css'
import Navbar from './stores/components/Navbar'
import Products from './stores/components/Products'
import LandingPage from './stores/pages/LandingPage'
import {Routes,Route} from 'react-router-dom'
import Kitchen from './stores/components/Kitchen'
import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import WomenPage from './stores/pages/WomenPage'
import KitchenPage from './stores/pages/KitchenPage'
import AcPage from './stores/pages/AcPage'
import FurniturePage from './stores/pages/FurniturePage'
import MobileSingle from './singles/MobileSingle'
import UserCart from './stores/UserCart'
import AcSingle from './singles/AcSingle'
import ComputerSingle from './singles/ComputerSingle'
const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/Computers' element={<ComputerPage/>}/>
          <Route path='/Mobiles' element={<MobilePage/>}/>
          <Route path='/watches' element={<WatchPage/>}/>
          <Route path='/Men Fashion' element={<MenPage/>}/>
          <Route path='/Women Dressing' element={<WomenPage/>}/>
          <Route path='/Furniture' element={<FurniturePage/>}/>
          <Route path='/AC' element={<AcPage/>}/>
          <Route path='/Kitchen' element={<KitchenPage/>}/>
            <Route path= '/mobiles/:id' element={<MobileSingle/>}/>
        
          <Route path='/cart' element={<UserCart/>}/>
          <Route path='/ac/:id' element = {<AcSingle />} />
          <Route path='/computers/:id' element = {<ComputerSingle />} />
        </Routes>
    </div>
  )
}

export default App
