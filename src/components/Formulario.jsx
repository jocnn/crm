import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import Alerta from './Alerta'

const Formulario = () => {

  const nuevoClienteScheme = Yup.object().shape({
    nombre: Yup.string()
      .min(3, 'El nombre es muy corto')
      .max(20, 'El nombre es muy largo')
      .required('El nombre del cliente es obligatorio'),
    empresa: Yup.string().required('La empresa del cliente es obligatorio'),
    email: Yup.string().email('Ingrese un email válido').required('El email es obligatorio'),
    telefono: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        'El número no es válido')
  })

  const handleSubmit = (valores) => {
    console.log(valores)

  }

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Agregar cliente
      </h1>
      <Formik
        initialValues={{
          nombre: '',
          empresa: '',
          email: '',
          telefono: '',
          notas: ''
        }}
        onSubmit={ (values) => {
          handleSubmit(values)
          
        }}
        validationSchema={nuevoClienteScheme}
      >
        { ({ errors, touched }) => {
          return (
          <Form className='mt-10'>
            <div className='mb-4' >
              <label className='text-gray-800' htmlFor="nombre">Nombre:</label>
              <Field 
                id="nombre"
                type="text"
                name="nombre"
                placeholder="Nombre del Cliente"
                className="mt-2 block w-full p-3 bg-gray-50"
              />
              { 
                errors.nombre && touched.nombre ? (
                  <Alerta>{errors.nombre}</Alerta>
                ) : null
              }
            </div>
            <div className='mb-4' >
              <label className='text-gray-800' htmlFor="empresa">Empresa:</label>
              <Field 
                id="empresa"
                type="text"
                name="empresa"
                placeholder="Empresa del Cliente"
                className="mt-2 block w-full p-3 bg-gray-50"
              />
              { 
                errors.empresa && touched.empresa ? (
                  <Alerta>{errors.empresa}</Alerta>
                ) : null
              }
            </div>
            <div className='mb-4' >
              <label className='text-gray-800' htmlFor="email">Email:</label>
              <Field 
                id="email"
                type="email"
                name="email"
                placeholder="Email del Cliente"
                className="mt-2 block w-full p-3 bg-gray-50"
              />
              { 
                errors.email && touched.email ? (
                  <Alerta>{errors.email}</Alerta>
                ) : null
              }
            </div>
            <div className='mb-4' >
              <label className='text-gray-800' htmlFor="telefono">Teléfono:</label>
              <Field 
                id="telefono"
                type="tel"
                name="telefono"
                placeholder="Teléfono del Cliente"
                className="mt-2 block w-full p-3 bg-gray-50"
              />
              {
                errors.telefono && touched.telefono ? (
                  <Alerta>{errors.telefono}</Alerta>
                ) : null
              }
            </div>
            <div className='mb-4' >
              <label className='text-gray-800' htmlFor="notas">Notas:</label>
              <Field
                as="textarea"
                id="notas"
                type="text"
                name="notas"
                placeholder="Notas del Cliente"
                className="mt-2 block w-full p-3 bg-gray-50 h-40"
              />
              {  }
            </div>

            <input
              className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
              type="submit"
              value="Agregar Cliente"
            />
          </Form>
        )}}
      </Formik>
    </div>
  )
}

export default Formulario