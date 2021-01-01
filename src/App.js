import React, {useEffect} from 'react';
import logo from './logo.svg';
import { useSelector,useDispatch } from "react-redux";
import './App.css';
import Slidebar from './Slidebar';
import Chat from './Chat';
import {selectUser,login,logout  } from "./features/userSlice";
import Login from './Login';
import { auth } from './firebase';
function App() {
  const user = useSelector(selectUser);
   const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
     // console.log("user is ", authUser);
      if(authUser){
         dispatch(
           login({
             uid:authUser.uid,
             photo:authUser.photoURL,
             email:authUser.email,
             displayName: authUser.displayName
           })
         )
      }else{
        dispatch(logout())
      }
    })
  }, [dispatch])
  return (

    <div className="app"> 
    {user ? (
      <>
      <Slidebar />
      <Chat />
      </>
    ):(
     <Login />
    )}
      
    </div>
  );
}

export default App;
