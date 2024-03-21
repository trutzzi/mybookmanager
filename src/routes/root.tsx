import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function Root() {
  return (
    <>
      <Header />
      <div style={{ marginTop: '25px' }}></div>
      <Outlet />
    </>
  )
}