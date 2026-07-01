import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { computeHeadingLevel } from "@testing-library/dom";
import { collection, query, where, getDocs , getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

 
const Dashboad = () => {

  const auth = getAuth();

  const currentUser = auth.currentUser
  
  const [show , setShow] = useState(false)
  const [showAlert , setShowAlert] = useState(false)
  const [posts , setPosts] = useState([])
  const [reFetch , setReFetch] = useState("")
  const db = getFirestore()

  const getpost = async () => {
    try{

      const q = query(collection(db, "posts"), where("userId", "==", currentUser.uid));

const querySnapshot = await getDocs(q);
let productArr = []

querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  let newObj = {
    ...doc.data(),
    id : doc.id
  }
  productArr.push(newObj)
});

setPosts(productArr.reverse())
    }
    catch(error){
      console.log("Err" , error)
    }
  }

  useEffect (() => {
    getpost()
  } , [reFetch])

  const handleClose = () => {
    setShow(false)
  }

  
  return (
    <div>


    {/* Link Attach  */}

    <Link to="/home">Home</Link>

    </div>
  )
}

export default Dashboad
