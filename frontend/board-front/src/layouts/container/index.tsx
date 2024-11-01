import { AUTH_PATH } from 'constant';
import Footer from 'layouts/Footer'
import Header from 'layouts/Header'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

// component : 레이아웃
export default function Container() {

  // state : 현재 페이지의 path name 상태
  const { pathname } = useLocation();


  return (
    <>
    {/* {pathname} */}
      <Header/>
      <Outlet/>
      {/* auth 경로의 페이지에서는 footer 요소를 숨김 */}
      {pathname !== AUTH_PATH() && <Footer/>}
    </>
  )
}
