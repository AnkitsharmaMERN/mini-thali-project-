import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading:true,
  product:[],
  error:null
}
export const getpost = createAsyncThunk('getpost',async(value)=>{
    try{
        // console.log(value.length)
        if(value.length > 0){
            console.log(value)
            return value
        }
    }catch(error){
        return error.msg
    }
})

export const ProductSlice = createSlice({
  name: 'counter',
  initialState,
  extraReducers: (builder)=>{
    builder.addCase(getpost.pending,(state,action)=>{
        state.loading = true
    })
    builder.addCase(getpost.fulfilled,(state,action)=>{
        state.loading = false;
        state.product = action.payload
    })
    builder.addCase(getpost.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload
    })
  },
})

// Action creators are generated for each case reducer function
export default ProductSlice.reducer