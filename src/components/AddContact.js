import { useState } from 'react'
import validator from 'validator'
export const AddContact = ({onAdd}) => {
    const [name, setName] = useState('')
    const [last_name, setLast] = useState('')
    const [company, setCompany] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail, setEmailError] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name){
            alert('Add contact')
            return
        }
        onAdd({name, last_name, company, phone, email})
        setName('')
        setLast('')
        setCompany('')
        setPhone('')
        setEmail('')
    }
    const validateEmail = (e) => {
        var mail = e.target.value
        if (validator.isEmail(mail)){
        }else{
            setEmailError('Invalid email')
        }
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Name</label>
                <input type='text' required placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Last Name</label>
                <input type='text' required placeholder='Last Name' value={last_name} onChange={(e) => setLast(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Company</label>
                <input type='text' placeholder='Company' value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Phone</label>
                <input type='tel' placeholder='Phone number' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input type='text' required placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                {/* <input type='text' required placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} onChange={(e) => validateEmail(e)} /> */}
            </div>
            <input type='submit' value='Save contact'className='btn btn-block'/>
        </form>
    )
}