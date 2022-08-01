import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { useContext } from "react";
import {UserContext} from './../../App'
import axios from 'axios';

function AddMentor(props){
	const context = useContext(UserContext);	
  let [firstName,setFName] = useState("")
  let [lastName,setLName] = useState("")
  let [email,setEmail] = useState("")
  let [dob,setDOB] = useState("")
  let [mobile,setMobile] = useState("")
  let [id,setId] = useState("")
  let [getadded,setData] = useState([]);
  let navigate = useNavigate()

  let handleSubmit = async ()=>{
    let data = {
      firstName,
      lastName,
      email,
      dob,
      mobile,
      id
    }
    let user = [...context.user]
    let response = await axios.post(context.url, data)
		user.push(await response.data);
  	context.setUser(user);
    navigate('/list-mentor')
    
  }
	return (
		<div className=" p-4">
			<form className="p-2 row">
			  <div className="mb-3 col-md-4">
			    <label  className="form-label">First Name</label>
			    <input type="text" className="d-block form-control" placeholder="Enter First Name" onChange={(e)=>setFName(e.target.value)} />
			  </div>
			  <div className="mb-3 col-md-4">
			    <label className="form-label">Last Name</label>
			    <input type="text" className="d-block form-control" placeholder="Enter Last Name" onChange={(e)=>setLName(e.target.value)}/>
			  </div>
			  <div className="mb-3 col-md-4">
		        <label>Email</label>
		        <input type="email" className="d-block form-control" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
		      </div>

		      <div className="mb-3 col-md-4">
		        <label>Mobile</label>
		        <input type="text" className="d-block form-control" placeholder="Enter Mobile" onChange={(e)=>setMobile(e.target.value)}/>
		      </div>

		      <div className="mb-3 col-md-4">
		        <label>DOB</label>
		        <input type="date" className="d-block form-control" placeholder="dd-mm-yy" onChange={(e)=>setDOB(e.target.value)}/>
		      </div>
			</form>

			<div className="p-4 row">
      	<button className="btn btn-dark mr-2" onClick={()=>navigate(`/list-mentor`)}>Back</button>
	  		<button type="submit" className="btn btn-primary ml-3 p-2"  onClick={()=>handleSubmit()}>Submit</button>
  		</div>
		</div>
	)
}

export default AddMentor;