
import {Header} from './components/Header'
import {Contacts} from './components/Contacts'
import {AddContact} from './components/AddContact'
import {useState, useEffect} from 'react'
function App() {
    const [showAddContact, setShowAddContact] = useState(false)
    const [contacts, setContacts] = useState([])
    useEffect(() => {
      const getTasks = async () => {
        const contactFromServer = await fetchTasks()
        setContacts(contactFromServer)
      }
      getTasks()
    }, [])

  //Fetch contact
      const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/contacts')
        const data = await res.json()
        return data
      }

  //Add contact 
  const addTask = async (contact) => {
    const res = await fetch('http://localhost:5000/contacts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(contact),
    })
    const data = await res.json()
    setContacts([...contacts, data])
    console.log(contact)
  }

  // Delete tastargek
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/contacts/${id}`, {
      method: 'DELETE',
    })
    console.log('delete', id);
    setContacts(contacts.filter((contact) => contact.id !== id ))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddContact(!showAddContact)} showAdd={showAddContact}/>
      {showAddContact && <AddContact onAdd={addTask}/>}
      {contacts.length>0 ? (<Contacts contacts={contacts} onDelete={deleteTask}/>) : ('Empty directory')}
    </div>
  );
}


export default App;