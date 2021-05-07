import {FaTimes} from 'react-icons/fa'
export const Contact = ({contact, onDelete}) => {
    return (
        <div className='contact'>
            <h3> {contact.name} <FaTimes style={{color:'red', cursor:'pointer'}} onClick = {() => onDelete(contact.id)}/> </h3>
            <p>{contact.last_name}</p>
            <p>{contact.company}</p>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
        </div>
    )
}
