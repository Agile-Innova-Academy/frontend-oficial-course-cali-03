import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cat } from "../../interfaces/catInterface";

interface CatState {
    cats: Cat[],
    loading: boolean,
    error: string | null,
}

const initialState: CatState = {
    cats:[],
    loading: false,
    error:null
}


const catSlice = createSlice ({
    name: "cats",
    initialState,
    reducers: {
        //inicio del ciclo de vida del llamado
        fetchCats:(state)=>{
            state.loading = true
            state.error = null
        },
        fetchCatSuccess: (state, action: PayloadAction<Cat[]>) => {
            state.cats = action.payload
            state.loading = false
        },
        fetchCatsFailure: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        }

    }
})


export const {fetchCats, fetchCatSuccess, fetchCatsFailure} = catSlice.actions
export default catSlice.reducer