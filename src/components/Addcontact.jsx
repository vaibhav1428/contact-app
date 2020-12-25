import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import shortid from 'shortid'
import { useHistory } from 'react-router-dom';
import { addcontact } from '../redux/ACTIONS/contactaction';

const Addcontact = () => {
  let history = useHistory();

  const dispatch = useDispatch();
  const [name,
    setname] = useState('')
  const [email,
    setemail] = useState('')
  const [phone,
    setphone] = useState('')


   const  createcontact = (e) =>{
       e.preventDefault();
       const new_contact = {
         id:shortid.generate(),
         name,
         email,
        phone,
         }
       dispatch( addcontact(new_contact));
       console.log(name,email,phone);
       history.push('/');
   }

  return (
    <div className="card border-0 shadow mt-5">
      <div className="card-header text-center h3">
        Add contact
      </div>

      <div className="card-body">
        <form onSubmit={(e)=>createcontact(e)}>
          <div className="form-group">

            <input
              type="text"
              className="form-control mt-3"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setname(e.target.value)}/>

            <input
              type="text"
              className="form-control mt-3"
              placeholder="Enter your phone"
              value={phone}
              onChange={(e) => setphone(e.target.value)}/>

            <input
              type="text"
              className="form-control mt-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}/>

          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

    </div>
  )
}

export default Addcontact
