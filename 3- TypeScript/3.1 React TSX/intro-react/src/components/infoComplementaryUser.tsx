import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { updateInfoComplUser } from "../firebase/helper/requestProducts";

interface FormValues {
  height: number;
  weigth: number;
  age: number;
  gender: string;
}

const infoComplementaryUser = () => {
  const inicialValues: FormValues = {
    height: 0,
    weigth: 0,
    age: 0,
    gender: "",
  };
  const validationSchema = Yup.object({
    // elemento: yup.type().condition1().condition2()
    height: Yup.number()
        .required("la altura es requerida")
        .min(50, "la altura minima es de 50 cm")
        .max(250, "la altura maxima es de 250 cm"),
    weigth: Yup.number()
    .required("el peso es requerido")
    .min(10, "el peso min es de 10 kg")
    .max(400, "el peso max es de 400kg"),
    age: Yup.number()
    .required("La edad es requerida")
    .integer("solo se permiten numeros enteros")
    .min(15, "La edad min es 15")
    .max(110, "La edad max es 110"),
    gender: Yup.string()
        .required("El sexo es requerido")
        .oneOf(['male', 'female','other'], 'Elige un género valido'),
  });

  const calculateIMC = (weigth:number, height:number) =>{

    // peso en kilogramos dividido por la estatura en metros cuadrados
    const heightInMeters = height/100 
    return (weigth / (heightInMeters*heightInMeters)).toFixed(2)
  }

  const updateInfoUser = async (values: FormValues)=>{
    const userId = "Id_Collecction"
    try {
        await updateInfoComplUser(userId, values)
        console.log("peticion enviados al back de firebase");
        
    }catch(error){
        console.error("Error al actualizar los datos", error)
    }
  }



  return (
    <div className="max-w-md bg-white mx-auto shadow-md rounded-mg p-4">
      <Formik
        initialValues={inicialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            updateInfoUser(values)
            const imc = calculateIMC(values.weigth, values.height)
            alert(`tu imc es de: ${imc}`)
        }}
      >
        <Form>
          <div className="mb-4">
            <label>Altura (cm)</label>
            <Field
              type="number"
              name="height"
              className="w-full px-4 py-2 border rounded-md"
            />
            <ErrorMessage
              name="height"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label>Peso (kg)</label>
            <Field
              type="number"
              name="weigth"
              className="w-full px-4 py-2 border rounded-md"
            ></Field>
            <ErrorMessage
              name="weigth"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label>Edad</label>
            <Field
              type="number"
              name="age"
              className="w-full px-4 py-2 border rounded-md"
            />
            <ErrorMessage
              name="age"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label>Género</label>
            <Field
              as="select"
              name="gender"
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value=""></option>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="other">Otro</option>
            </Field>
            <ErrorMessage
              name="gender"
              component="div"
              className="text-red-500"
            />
          </div>
          <button type="submit" className="bg-blue-500 px-4 rounded-full">Enviar</button>
        </Form>
      </Formik>
    </div>
  );
};

export default infoComplementaryUser;
