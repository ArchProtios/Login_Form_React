// import React, { useState } from 'react'
// import '../Forms/Forms.css'

// const Form = () => {

//     const[email,setEmail] = useState('')
//     const[password,setPassword] = useState('')

//     const[allEntry,setAllEntry] = useState([])

//     const submitForm = (e) => {
//         const newEntry = {email:email , password:password}

//         setAllEntry([...allEntry , newEntry])
//     }

//     return (
//         <>
//             <form onSubmit= {submitForm} >

//                 <div>
//                     <label>Email : </label>
//                     <input className='input' type="text" name= "email" placeholder='Enter your email' id='email' value= {email} 
//                     onChange={(e) => setEmail(e.target.value)} />
//                 </div>

//                 <div>
//                     <label>Password : </label>
//                     <input className='input' type="text" name= "password" placeholder='Enter your password' id='password' value=
//                     {password} onChange={(e) => setPassword(e.target.value)} />
//                 </div>

//                 <button type='submit' id='btn'>Login</button>

//             </form>
//         </>
//     )
// }

// export default Form


import React, { useState } from 'react'
import '../Forms/Forms.css'

const Form = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [allEntry, setAllEntry] = useState([])

    const submitForm = (e) => {

        e.preventDefault(); 

        const newEntry = { email: email, password: password }
        setAllEntry([...allEntry, newEntry])
    }

    return (
        <>
            <form onSubmit={submitForm}>

                <div>
                    <label>Email : </label>
                    <input className='input' type="text" name="email" placeholder='Enter your email' id='email' value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label>Password : </label>
                    <input className='input' type="text" name="password" placeholder='Enter your password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type='submit' id='btn'>Login</button>

            </form>
            <div>
                {
                    allEntry.map((elem) => {
                        return ( 
                            <>
                                <div className="showDataStyles">
                                    <p>{elem.email}</p>
                                    <p>{elem.password}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Form
