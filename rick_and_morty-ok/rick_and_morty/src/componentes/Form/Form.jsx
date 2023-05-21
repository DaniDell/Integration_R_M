import { useState } from "react";
import validation  from './validation.js';
import style from './Form.module.css'

const Form = (props) => {
    const { login } = props

    const [ userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [ errors, setErrors ] = useState({})

    const handleChange = (event) => {
        setUserData({
            ...userData,
            //email
            //password
            [event.target.name] : event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name] : event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    return (
        <form 
            onSubmit={handleSubmit} 
            autoComplete="off" 
            className={style.container}
        >

            <div className={style.divContainer}>
                <label className={style.label}>Email</label>
                <input 
                    type="email"
                    placeholder="Enter your email" 
                    name= "email"
                    value={userData.email}
                    onChange={handleChange}
                />
                {
                    errors.email ?  (
                        <p style ={{color: 'red'}} >{errors.email}</p>

                    ) : errors.emailEmpty ? (
                        <p style ={{color: 'red', }}>{errors.emailEmpty}</p>
                    ) : 
                    errors.validEmail ?
                    (
                        <p style ={{color: 'red'}}>{errors.validEmail}</p>
                    ) :
                    (
                        <p style ={{color: 'red'}}>{errors.caracteres}</p>
                    ) 
                }
            </div>
            <br/>
            <div>
                <label className={style.label}>Password</label>
                <input 
                    type="password" 
                    placeholder="Enter our password"
                    name= "password"
                    value={userData.password}
                    onChange={handleChange}
                
                />

                {
                    errors.password ?  (
                        <p style={{color:"red" , backgroundColor: "white" }}>{errors.password}</p>
                    ) : 
                    errors.incorrectPass ? (
                        <p style={{color:"red", backgroundColor: "white" }}> {errors.incorrectPass} </p>
                    ) :
                    ''
                }
            </div>
            <br/>
            <button type='submit' className={style.btn}>Enter</button>
        </form>
    )
}

export default Form;