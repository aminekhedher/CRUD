import React , {useState, useEffect} from 'react';
import {Link, useParams} from  'react-router-dom';
import axios from  'axios';

function Read() {
    const [data, setData] = useState([]);
    const {id} = useParams();
        useEffect(()=>{
            axios.get(`/edit_workers/${id}`)
            .then((res)=>{
                setData(res.data)
            })
            .catch((err)=>console.log(err))
        }, [id]);
        
        
  return (
    <div className="container-fluid vw-100 vh-100 bg-primary text-white p-4">
      <h1>User {id}</h1>
      <Link to="/" className="btn btn-success mb-3">Back</Link>

      {data.map((worker) => (
        <ul className="list-group" key={worker.id}>
          <li className="list-group-item">
            <b>ID:</b> {worker["id"]}
          </li>
          <li className="list-group-item">
            <b>Name:</b> {worker["name"]}
          </li>
          <li className="list-group-item">
            <b>LastName:</b> {worker["lastname"]}
          </li>
          <li className="list-group-item">
            <b>Company:</b> {worker["company"]}
          </li>
          <li className="list-group-item">
            <b>Email:</b> {worker["email"]}
          </li>
        </ul>
      ))}
    </div>
  )
}

export default Read
