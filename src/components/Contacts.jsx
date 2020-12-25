import React from 'react'
import {useSelector} from 'react-redux'
import Contact from './contact'
const Contacts = () => {
  const contacts = useSelector((state) => state.contacts.contacts);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" name="" id=""/>
                <label htmlFor="" className="custom-control-label">test</label>
              </div>
            </th>
            <th scope="col">Name
            </th>
            <th scope="col">Phone</th>
            <th scope="col">E-mail</th>
            <th scope="col">Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => <Contact contact={contact} key={contact.id}/>)
}
        </tbody>
      </table>

    </div>
  )
}

export default Contacts
