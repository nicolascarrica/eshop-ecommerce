import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/carriData";

const productSlice = createSlice({
    name: "products",
    initialState: {
        filteredProducts: JSON.parse(localStorage.getItem("filteredData")) || storeData,
        singleProduct: JSON.parse(localStorage.getItem("oneProduct")) || storeData,
    },
    reducers: {
        filterProducts: (state, action) => {
            try{
                const filter = storeData.filter((product) => product.type === action.payload);
                state.filteredProducts = filter;
                state.error = false;
                const saveState = JSON.stringify(filter)
                sessionStorage.setItem("filteredData", saveState);
            }
            catch (error) {
                state.error = true
            }
        },
        singleProduct: (state, action) => {
            try {
                const oneProduct = storeData.filter(
                    (product) => product.id === action.payload
                );
                state.singleProduct = oneProduct;
                const saveState = JSON.stringify(oneProduct)
                sessionStorage.setItem("oneProduct", saveState)
            }
            catch (error) {
                return error
            }
            
        }
    }
})

export const {filterProducts, singleProduct} = productSlice.actions;
export default productSlice.reducer