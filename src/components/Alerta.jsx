const Alerta = ({ children }) => {
  return (
    <div className="text-center my-4 bg-red-400 text-white font-bold uppercase p-1">
      <p>{children}</p>
    </div>
  )
}

export default Alerta