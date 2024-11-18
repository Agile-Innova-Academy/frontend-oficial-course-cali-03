import { addDoc, collection, getDocs, updateDoc, doc} from "firebase/firestore"
import { db } from "../firebaseConfig"
import { mockProduct } from "../data/mockProducts";

const productCollection = collection(db, "products");

export const uploadProducts  = async () => {
    for (const product of mockProduct){
        await addDoc(productCollection,product)
    }
    console.log("Productos agregados exitosamente")
}

export const getProducts = async () => {
    const data = await getDocs(productCollection);
    console.log(data.docs)
    return data.docs.map((doc) => ({
        ...doc.data(),
    }))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateInfoComplUser = async(id:string, dataUpdate:any) => {
    try{
        console.log("actualizacion datos");
        const userUpdateDoc = doc(db, "info-compl-user", id)
        await updateDoc(userUpdateDoc, dataUpdate)
    } catch (error) {
        console.error("Error al actualizar el usuario", error)
    }
}

// const prueba = {
//     height: 170,
//     weigth: 50,
//     age: "18",
//     gender: "other"
//   }

// updateInfoComplUser("jor7jRJ0yZ4G7FI5DfXD", prueba)