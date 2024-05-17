'use client'
import { addDoc, collection } from '../FireBaseConfig';
import { useState } from 'react';
import { db } from '../FireBaseConfig';
import '../App.css'

export default function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [number, setNumber] = useState('+998 ');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  
  
  const sendAddress = async (e) => {
    e.preventDefault();
    if(!name.trim())return

    await addDoc(collection(db, 'user_address'),{
      email: email,
      name: name,
      surName: surName,
      number: number,
      age: Number(age), 
      country: country,
      city: city,
    });
      window.location.href='/signin'
  };
  
  function btnBackSignUp(){
    window.location.href='/signup'
  }

  const countrys = ['...', 'United States', 'Canada', 'France', 'Australia', 'Uzbekistan', 'Germany', 'Angland', 'UK', 'United Kingdom']

  return (
    <>
    <form onSubmit={sendAddress} className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Addres
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
          <div>
          <button
                onClick={btnBackSignUp}
                className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                ↩ Back to Sign Up 
              </button>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  style={{outline:'none', padding:'10px'}}
                />
              </div>
              {!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/) ? (<div className='email_value'>Please enter a valid email address</div>) : ''}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="passwordAgain"
                  name="passwordAgain"
                  type="text"
                  autoComplete="current-password"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  style={{outline:'none', padding:'10px'}}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Sur name
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="passwordAgain"
                  name="passwordAgain"
                  type="text"
                  autoComplete="current-password"
                  value={surName}
                  onChange={(e) => setSurName(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  style={{outline:'none', padding:'10px'}}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Age
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="number"
                  min={12}
                  max={120}
                  onChange={(e) => setAge(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  style={{outline:'none', padding:'10px'}}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-white">
                Phone number                
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  style={{outline:'none', padding:'10px'}}
                />
              </div>
            </div>
            <div>
              <label htmlFor='country' className="block text-sm font-medium leading-6 text-white">
                Country                
              </label>
              <div className="mt-2">
                <select className='select_country' onChange={e=> setCountry(e.target.value)} id='country'>
                    {countrys.map(e=> 
                      <option value={e}>{e}</option>
                    )}
                </select>
            </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Citiy                
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  autoComplete="Citiy"
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  style={{outline:'none', padding:'10px'}}
                />
              </div>
            </div>
            
            <div>
              <button
                disabled={name == '' || surName == '' || age == '' || number == '' || city == '' || country == '...'}
                className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                type='submit'
                >
                Send Addres
              </button>
            </div>
                </div>
                </div>
      </form>
    </>
  )
}