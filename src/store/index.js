import { createSlice, configureStore, combineReducers, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';


const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export const getId = createAsyncThunk( 'testing/getId', async (payload, { dispatch }) =>{
  console.log('asas',payload);
  const response = await axios.get(baseURL);
  // dispatch(setSaveDetails(response.data.id));
  return response.data.id;
}
)
const initialState = {
    id: null,
}

const testingSlice = createSlice({
  name: 'testing',
  initialState,
  reducers: {
      //  setSaveDetails(state, action){
      //   state.id = action.payload;
      //  }
  },
  extraReducers: {
     [getId.pending]: (state, action) => {
      state.status = 'loading';
     },
    [getId.fulfilled]: (state, action) => {
      state.id = action.payload;
      state.status = 'success';
    },
    [getId.rejected]: (state, action) => {
      state.status = 'rejected';
    }
  }
})

const anonInitialState = {
  name:null
};

const anonSlice = createSlice({
  name: 'anon',
  initialState:anonInitialState,
  reducers: {
       setName(state, action){
        state.name = action.payload;
       }
  },
  extraReducers: {

  }
})

export const { setSaveDetails } = testingSlice.actions
export const { setName } = anonSlice.actions
// export default testingSlice.reducer

export default configureStore({
  reducer: combineReducers({
    testing: testingSlice.reducer,
    anon: anonSlice.reducer
  })
})