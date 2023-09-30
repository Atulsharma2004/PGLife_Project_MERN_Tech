import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-hot-toast";

const initialState = {
    productList: [],
    likedHostels:{},
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setDataProduct: (state, action) => {
            // console.log(action)
            state.productList = [...action.payload]
        },
        likeHostel: (state, action) => {
            const hostelId = action.payload;
            if (state.likedHostels[hostelId]) {
            // Hostel is already liked, unliking it
                delete state.likedHostels[hostelId];
            } else {
            // Hostel is not liked, liking it
                state.likedHostels[hostelId] = true;
            }
        },
    }
})
export const { setDataProduct, likeHostel } = productSlice.actions

export default productSlice.reducer
