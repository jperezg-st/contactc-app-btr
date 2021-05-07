import {Contact} from './Contact'
export const Contacts = ({contacts, onDelete}) => {
    //state is unmutable
    return (
        <>
          {contacts.map((contact) => <Contact key={contact.name} contact={contact} onDelete={onDelete}/>)}  
        </>
    )
}
