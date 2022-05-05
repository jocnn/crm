import Formulario from "../components/Formulario"

const NuevoCliente = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">
        Desde NuevoCliente
      </h1>
      <p className="">
        Llena los siguientes campos para registrar un cliente
      </p>

      <Formulario />
    </>
  )
}

export default NuevoCliente