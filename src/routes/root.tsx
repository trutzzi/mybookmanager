import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function Root() {
  return (
    <>
      <Header />
      <div style={{ margin: '25px 15px 25px 15px' }}>
        <Outlet />
      </div>
    </>
  )
}