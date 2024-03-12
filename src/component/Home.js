import React, { useState } from 'react'

const Home = () => {
    const [firstname,setFirstname]=useState('');
    const [lastname,setLastname]=useState('');
  return (
    <div className='row justify-content-center'>
        <div className='col-md-4 card my-5'>
            <label htmlFor='firstname' className='form-label '>First Name </label>
            <input type='text' name='firstname' className='form-control' value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}/>
            <label htmlFor='lastname' className='form-label my-2'>Last Name </label>
            <input type='text' name='lastname' className='form-control' value={lastname} onChange={(e)=>{setLastname(e.target.value)}}/>
            <button className='btn btn-primary my-4'>Next</button>
        </div>
    </div>
  )
}

export default Home;
