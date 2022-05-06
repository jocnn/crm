import { useNavigate } from "react-router-dom"

const Cliente = ({cliente}) => {
  
  const navigator = useNavigate()
  const { nombre, empresa, email, telefono, notas, id } = cliente
  
  return (
    <tr className="border-b hover:bg-white">
      <td className="p-3">{nombre}</td>
      <td className="p-3">
        <p><span className="text-gray-800 uppercase font-bold">Email:</span>{email}</p>
        <p><span className="text-gray-800 uppercase font-bold">Tel:</span>{telefono}</p>
      </td>
      <td className="p-3">{empresa}</td>
      <td className="p-3">
        <button
            className="bg-yellow-400 hover:bg-yellow-500 block w-full text-white p-2 uppercase font-bold text-xs"
            type="button"
            onClick={ () => navigator(`/clientes/${id}`) }
          >
          Ver
        </button>
        <button
          className="mt-3 bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs"
          type="button"
          onClick={ () => navigator(``) }
        >
          Editar
        </button>
        <button
          className="mt-3 bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs"
          type="button"
          onClick={ () => navigator(``) }
        >
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default Cliente