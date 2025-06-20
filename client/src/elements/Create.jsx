import React, { useState } from 'react';
import axios from 'axios';
import './Create.css';
import {Link, useNavigate} from 'react-router-dom';

function Create() {
  const [values, setValues] = useState({
    name: '',
    lastname: '',
    company: '',
    email: '',
  });

  const navigate = useNavigate();
  
  function handleSubmit(e) {
    e.preventDefault();
    axios.post('/add_user', values)
      .then((res) => {
        navigate('/', { state: { refresh: true } }); // Add this
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div id="create">
      <h3>Add Worker</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            required
            onChange={(e) =>
              setValues({ ...values, name: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="lastname">LastName</label>
          <input
            type="text"
            name="lastname"
            required
            onChange={(e) =>
              setValues({ ...values, lastname: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            required
            onChange={(e) =>
              setValues({ ...values, company: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={(e) =>
              setValues({ ...values, email: e.target.value })
            }
          />
        </div>

        <div className='random'>
          
          <Link id='subbtn' to='/'>Home</Link>
        </div>
      </form>
    </div>
  );
}

export default Create;
