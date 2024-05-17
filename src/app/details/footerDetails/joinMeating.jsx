'use client'
import { useState } from "react"
import '../../App.css';
import { db, addDoc, collection } from '../../FireBaseConfig'

export const JoinMeating = () => {
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [acceptance, setAcceptance] = useState('')

    const sendInfo = async (e) => {
        window.location.href='#'
        e.preventDefault();
        if(!email.trim())return

        await addDoc(collection(db, 'addres'),{
            email: email,
            countrty: country,
            acceptance: acceptance,
        })
        alert('Successfully implemented ✓')
    }

    const countrys = ['...', 'United States', 'Canada', 'France', 'Australia', 'Uzbekistan', 'Germany', 'Angland', 'UK', 'United Kingdom']

    return(
        <div className="join_meating_container">
            <h1>Join our mailing list</h1>
            <h2>Be the first to hear everything about ROOM.</h2>
            <form onSubmit={sendInfo}>
                <input 
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email" 
                required
                value={email} 
                onChange={e => setEmail(e.target.value)}
                />
                {!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/) ? (<div>Please enter a valid email address</div>) : ''}
                <select onChange={e=> setCountry(e.target.value)}>
                    {countrys.map(e => (
                        <option value={e}>{e}</option>
                    ))}
                </select>
                <label htmlFor="">
                    <input type="checkbox" value={'I accept it'} onChange={e => setAcceptance(e.target.value)} />
                    <p> Yes. I would like to receive marketing communications from ROOM about product updates and special offers. Please refer to ROOM’s Privacy Policy for more information about how we process your data (including how to unsubscribe). </p>
                </label>
                <button type="submit" className="btn btn-background-slide" disabled={!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/) && country == '' && acceptance == ''}>SIGN UP</button>
            </form>
            <a href="#" >Return to the top</a>
        </div>
    )
}