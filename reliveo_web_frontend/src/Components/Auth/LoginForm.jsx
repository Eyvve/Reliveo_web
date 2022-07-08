import React, {useState} from 'react'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import useLogin from '../../Hooks/Post/useLogin';

function LoginForm({localUser, setLocalUser, needsLogin, setNeedsLogin, setLoggedUser, loggedUser}) {

    const navigate = useNavigate()

    const login = useLogin();

    const [formInput, setFormInput] = useState({
        email: "",
        password: '',
    });
    
    const handleChange = ({target}) => {
        setFormInput(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLocalUser(formInput);
    }

  return (
    <div className='Application__left_step'>
      <div>
        <h1 className='Application__left_step_title'>Bon retour !</h1>
        <br></br>
        <h3 className='Application__left_step_subtitle'>Connectez vous</h3>
        <hr className='Application__left_step_hr'></hr>
        <form onSubmit={handleSubmit} className='Application__left_step_form'>
            <input className='Application__left_step_inputText' placeholder='identifiant' type="email" name="email" onChange={handleChange} value={formInput.email} required />
            <input className='Application__left_step_inputText' placeholder='mot de passe' type="password" name="password" onChange={handleChange} value={formInput.password} required />
            {/* <button onClick={() => setNeedsLogin(!needsLogin)} className='Application__left_step_buttons_button next' type='submit' name='submit'>Connexion</button> */}
            <button onClick={() => setNeedsLogin(true)} className='Application__left_step_buttons_button next' type='submit' name='submit'>Connexion</button>

        </form>
       
      </div>
    </div>
    
  )
}

export default LoginForm