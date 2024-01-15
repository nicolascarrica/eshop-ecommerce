import React, { useState } from 'react'
import Card from '../../components/card/Card'
import Loader from '../../components/loader/Loader'
import styles from "./auth.module.scss"
import registerImg from "../../assets/register.png"
import { Link, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config'


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()

  const registerUser = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
    toast.error("Passwords do not match")
    }
    setIsLoading(true)

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      setIsLoading(false)
      toast.success("Registered successfully..")
      navigate('/login')
    })
    .catch((error) => {
      toast.error(error.message)
      setIsLoading(false)
    });

  };

  return (
    <>
    {isLoading && <Loader />}
    <section className={`container ${styles.auth}`}> 
        <Card>
          <div className={styles.form}>
              <h2>Register</h2>
              <form onSubmit={registerUser}>
                <input
                 type="text" 
                 placeholder='Email' 
                 required 
                 value={email} 
                 onChange={e => setEmail(e.target.value)}
                />
                <input
                 type="password" 
                 placeholder='Password' 
                 required
                 value={password}
                 onChange={e => setPassword(e.target.value)}
                />
                <input
                 type="password" 
                 placeholder='Confirm Password' 
                 required
                 value={confirmPassword}
                 onChange={e => setConfirmPassword(e.target.value)}
                />
                <button type='submit' className='--btn --btn-primary --btn-block'>Register</button>
                <p>-- or --</p>
              </form>
              <span className={styles.register}>
                <p>Already an account?</p> 
                <Link to="/login">Login</Link>
              </span>
          </div>
        </Card>

        <div className={styles.img}> 
          <img src={registerImg} alt='register' width="400"/>
        </div>
    </section>
    </>
  )
}

export default Register
