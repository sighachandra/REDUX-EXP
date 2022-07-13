
import './App.css';
import {getId} from './store/index';
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  // dispatch(getId());
  // const {id: testingId} = useSelector((state)=>state.testing);
  // const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

  // const fetchUserById = createAsyncThunk(
  //   async () => {
  //     const response = await  axios.get(baseURL);
  //     dispatch(setSaveDetails(response.data.id));
  //     console.log(response.data.id);
  // } 
  // );

  useEffect(()=>{
     console.log('sdsddsd');
    dispatch(getId(1));
  },[]);
 
  
  return (
   <div>
    <button>ADD DETAILS</button>
   </div>
  );
  }

export default App;
