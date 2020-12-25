import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import shortid from 'shortid'
import {useHistory, useParams} from 'react-router-dom';
import {getcontact, updatecontact} from '../redux/ACTIONS/contactaction';

const Editcontact = () => {
  let {id} = useParams();
    let history = useHistory();

  const contacts = useSelector((state) => state.contacts.contact);
  const dispatch = useDispatch();
  const [name,
    setname] = useState('')
  const [email,
    setemail] = useState('')
  const [phone,
    setphone] = useState('')

  
  useEffect(() => {
      if(contacts != null){
          setname(contacts.name);
          setemail(contacts.email)
          setphone(contacts.phone)
      }
      dispatch(getcontact(id));
  },[contacts])

  const onUpdate = (e)=>{
     e.preventDefault();

     const update_contact =Object.assign(

         contacts,{
            id:shortid.generate(),
         name,
         email,
        phone,
     }
     )
            dispatch( updatecontact(update_contact));

       history.push('/');

     console.log(update_contact);

  }

  return (
    <div className="card border-0 shadow mt-5">
      <div className="card-header text-center h3">
        Edit contact
      </div>

      <div className="card-body">
        <form onSubmit={e=>onUpdate(e)}>
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

export default Editcontact
