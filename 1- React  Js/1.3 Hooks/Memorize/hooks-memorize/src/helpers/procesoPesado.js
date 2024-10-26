export const procesoPesado = (iteracion)=>{
    for (let index = 0; index < iteracion; index++) {
       console.log("me estan iterando dentro de un for", index)        
    }
    return `${iteracion} iteración Realizada :(`
}