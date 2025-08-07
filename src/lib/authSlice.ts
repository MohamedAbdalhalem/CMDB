import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type authType = {
    token: string | null
}
const initialState: authType = {
  token:  localStorage.getItem("tkn") || null,
}
export const authsilce = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        setToken(state,action : PayloadAction<string>) {
            state.token = action.payload
        },
        removeToken(state) {
            state.token = null
        }
    }
})
export const {setToken,removeToken} = authsilce.actions
export default authsilce.reducer