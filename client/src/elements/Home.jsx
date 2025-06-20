import React , {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import './Home.css';



function Home() {
    const [data, setData] = useState([]);
    const [deleted, setDeleted] = useState(true)
    useEffect(()=>{
        if(deleted){
            setDeleted(false);
        }
        axios.get('/workers')
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>console.log(err))
    }, [deleted])
    
    function handleDelete(id){
        axios.delete(`/delete/${id}`)
        .then((res)=>{
            setDeleted(true)
        })
        .catch((err)=> console.log(err))
    }
    
  return (
    <div>
        <h3>Workers</h3>
        <div>
            <Link to='/Create' className='add-worker-link'>Add worker</Link>
        </div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>lastname</th>
                    <th>company</th>
                    <th>email</th>
            <th>actions</th>
                </tr>
            </thead>
        <tbody>
      {
        data.map((worker) => (
          <tr key={worker.id}>
            <td>{worker.id}</td>
            <td>{worker.name}</td>
            <td>{worker.lastname}</td>
            <td>{worker.company}</td>
            <td>{worker.email}</td>
            <td className='actions'>
              <Link to={`/read/${worker.id}`} className='read-btn'>Read</Link>
              <Link to={`/edit/${worker.id}`} className='edit-btn'>Edit</Link>
              <button onClick={()=>handleDelete(worker.id)} className='delete-btn'>Delete</button>
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
</div>

  )
}

export default Home
