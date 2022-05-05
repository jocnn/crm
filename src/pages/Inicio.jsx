import { Outlet } from "react-router-dom"

const Inicio = () => {
  return (
    <>
      <h1>Desde Inicio</h1>
      <Outlet />
    </>
  )
}

export default Inicio