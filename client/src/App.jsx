import "./App.css";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { setDataProduct } from './redux/productSlice';
import { useDispatch } from 'react-redux';
import StickyNavbar from "./components/StickyNavbar";
const serverDomain = import.meta.env.VITE_SERVER_DOMAIN;


function App() {
  const dispatch= useDispatch()
  useEffect(()=>{
    (async()=>{
      const res= await fetch(`${serverDomain}/product`)
      const resData=await res.json()
      // console.log(resData)
      dispatch(setDataProduct(resData))
    })()
  },[dispatch])
  return (
    <>
      <Toaster/>
      <StickyNavbar />
      <main className="mt-2 bg-slate-100 ">
        <Outlet />
      </main>
    </>
  );
}

export default App;
