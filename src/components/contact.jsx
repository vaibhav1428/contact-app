import React from 'react'
import { useDispatch } from 'react-redux'
import Avatar from 'react-avatar'

import { Link } from 'react-router-dom'
import { deletecontact } from '../redux/ACTIONS/contactaction'

const Contact = ({contact}) => {
  
  const dispatch = useDispatch();
   return (
         <tr>
              <th scope="row">
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                </div>

              </th>
              <td><Avatar className="mr-2" name={contact.name} size="45" round={true} />{contact.name}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
              <td className="actiton">
                  <Link to={`/contacts/edit/${contact.id}`} className="ml-2 mr-5">
                     <i className="fa fa-pencil"  style={{color:'green',fontSize:'1.8rem'}} aria-hidden="true"></i>

                  </Link>

                  <span onClick={()=> dispatch(deletecontact(contact.id))} >
                      <i className="fa fa-minus-circle" style={{color:'red' ,fontSize:'1.8rem'}} aria-hidden="true"></i>
                  </span>
              </td>
            </tr>
    )
}

export default Contact
