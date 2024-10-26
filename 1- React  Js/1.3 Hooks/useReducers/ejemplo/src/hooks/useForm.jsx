import {useState} from 'react'

const useForm = ({initialState = {}}) => {
     const [datosFormulario, setDatosFormulario] = useState({initialState});

   const handleChange = (e) => {
     e.preventDefault();
     console.log(e.target.value);
     setDatosFormulario({
       ...datosFormulario,
       [e.target.name]: e.target.value,
     });
   };
   
   const handleUpload = (url)=>{
   setDatosFormulario({
     ...datosFormulario,
     imagen:url,
   });


   }
   const reset =()=>{
    setDatosFormulario({initialState});
   }
  return [datosFormulario, handleChange, reset, handleUpload];
}

export default useForm