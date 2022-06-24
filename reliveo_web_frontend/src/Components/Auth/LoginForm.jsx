import React, {useState} from 'react'
import { useEffect } from 'react';

function LoginForm() {
    const [formInput, setFormInput] = useState({
        username: "",
        password: '',
    });

    useEffect(() => {
        console.log(formInput)
    }, [formInput]);
    
    const handleChange = ({target}) => {
        setFormInput(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }

  return (
    <div className='Application__left_step'>
      <div>
        <h1 className='Application__left_step_title'>Bon retour !</h1>
        <br></br>
        <h3 className='Application__left_step_subtitle'>Connectez vous</h3>
        <hr className='Application__left_step_hr'></hr>
        <form className='Application__left_step_form'>
            <input className='Application__left_step_inputText' placeholder='identifiant' type="text" name="username" onChange={handleChange} value={formInput.username} />
            <input className='Application__left_step_inputText' placeholder='mot de passe' type="password" name="password" onChange={handleChange} value={formInput.password} />
            <input className='Application__left_step_buttons_button next' type='submit' name='submit' value='connexion'></input>
        </form>
       
      </div>
    </div>
    
  )
}

export default LoginForm