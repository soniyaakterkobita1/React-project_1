import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import HomeIndex from "./pages/home/HomeIndex";
import ShopIndex from "./pages/shop/ShopIndex";
import ErrorIndex from "./components/common/ErrorIndex";
import LoginIndex from "./pages/login/LoginIndex";
import CartIndex from "./pages/cart/CartIndex";
import DashboardIndex from "./pages/dashboard/DashboardIndex";
import DashboardLayout from "./components/layout/DashboardLayout";
import DownloadIdnex from "./pages/downloads/DownloadIdnex";
import OthersIndex from "./pages/others/OthersIndex";
import AccountDetailsIndex from "./pages/accountdetails/AccountDetailsIndex";
import AddressesIndex from "./pages/addresses/AddressesIndex";
import ProfileIndex from "./pages/profile/ProfileIndex";
import Registration from "./pages/registration/Registration";
import ContactIndex from "./pages/contact/ContactIndex";


const routes = createRoutesFromElements(
  <Route>
    <Route element={<RootLayout/>}>
      <Route index element={<HomeIndex/>} />
      <Route path='/shop' element={<ShopIndex/>} />
      <Route path='/cart' element={<CartIndex/>} />
      <Route path='/login' element={<LoginIndex/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/contacts' element={<ContactIndex/>}/>
    <Route element={<DashboardLayout/>}>
      <Route path='dashboard' element={<DashboardIndex/>}/>
      <Route path='/downloads' element={<DownloadIdnex/>}/>
      <Route path= '/others' element={<OthersIndex/>}/>
      <Route path= '/accountdetails' element={<AccountDetailsIndex/>}/>
      <Route path= '/addresses' element={<AddressesIndex/>}/>
      <Route path='/profile' element={<ProfileIndex/>}/>
    </Route>
    </Route>
      <Route path='*' element={<ErrorIndex/>} />
  </Route>
);

const router = createBrowserRouter(routes);

function App() {
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
