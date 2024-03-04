import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/carriData";

const productSlice = createSlice({
    name: "products",
    initialState: {
        filteredProducts: JSON.parse(localStorage.getItem("filteredData")) || storeData,
        singleProduct: JSON.parse(localStorage.getItem("singleProduct")) || storeData,
    },
    reducers: {
        filterProducts: (state, action) => {
            try{
                const filter = storeData.filter((product) => product.type === action.payload);
                state.filteredProducts = filter;
                state.error = false;
                console.log('filter', filter)
                const saveState = JSON.stringify(filter)
                sessionStorage.setItem("filteredData", saveState);
            }
            catch (error) {
                state.error = true
            }
        },
    }
})

export const {filterProducts} = productSlice.actions;
export default productSlice.reducer