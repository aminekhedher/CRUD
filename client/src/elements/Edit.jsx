import React , {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from  'react-router-dom';
import axios from  'axios';

function Edit() {
    const [data, setData] = useState([]);
    const {id} = useParams();
        useEffect(()=>{
            axios.get(`/edit_workers/${id}`)
            .then((res)=>{
                setData(res.data)
            })
            .catch((err)=>console.log(err))
        }, [id])
        
        const navigate = useNavigate();
        
        function handleSubmit(e) {
            e.preventDefault();
        
            axios.post('/add_user', data[0])
              .then((res) => {
                navigate('/')
                console.log(res);
              })
              .catch((err) => console.log(err));
          }
        
  return (
    <div id="create">
          <h3>user {id}</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                value={Worker.name}
                type="text"
                name="name"
                required
                onChange={(e) =>
                  setData({ ...data[0], name: e.target.value })
                }
              />
            </div>
    
            <div>
              <label htmlFor="lastname">LastName</label>
              <input
                value={Worker.lastname}
                type="text"
                name="lastname"
                required
                onChange={(e) =>
                  setData({ ...data[0], lastname: e.target.value })
                }
              />
            </div>
    
            <div>
              <label htmlFor="company">Company</label>
              <input
                value={Worker.company}
                type="text"
                name="company"
                required
                onChange={(e) =>
                  setData({ ...data[0], company: e.target.value })
                }
              />
            </div>
    
            <div>
              <label htmlFor="email">Email</label>
              <input
                value={Worker.email}
                type="email"
                name="email"
                required
                onChange={(e) =>
                  setData({ ...data[0], email: e.target.value })
                }
              />
            </div>
    
            <div className='random'>
              <Link id='subbtn' to='/'>Home</Link>
            </div>
          </form>
        </div>
  )
}

export default Edit
