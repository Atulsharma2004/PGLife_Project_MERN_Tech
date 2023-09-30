import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    fname: "",
    _id: "",
    image: "",
    lname: "",
    city:"",

}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginRedux: (state, action) => {
            const { _id, fname, lname, email, image, city } = action.payload.data;
            return {
                ...state,
                _id,
                fname,
                lname,
                email,
                image,
                city,
            };
        },
        logoutRedux: (state, action) => {
            const { _id, fname, lname, email, image, city } = '';
            return {
                ...state,
                _id,
                fname,
                lname,
                email,
                image,
                city,
            };
            
        }
    }
})
export const { loginRedux, logoutRedux } = userSlice.actions

export default userSlice.reducer

