import React, {useState} from 'react'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

function LoginForm({setLocalUser, needsLogin, setNeedsLogin, loggedUser}) {

    const navigate = useNavigate()

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setLocalUser(formInput);
        if (loggedUser.status === "admin"){
            navigate("/webapp/admin/userManager")
        }else if (loggedUser.status === "streamer"){
            navigate("/webapp/streamer/eventManager")
        }else{
            navigate("/")
        }

    }

  return (
    <div className='Application__left_step'>
      <div>
        <h1 className='Application__left_step_title'>Bon retour !</h1>
        <br></br>
        <h3 className='Application__left_step_subtitle'>Connectez vous</h3>
        <hr className='Application__left_step_hr'></hr>
        <form onSubmit={handleSubmit} className='Application__left_step_form'>
            <input className='Application__left_step_inputText' placeholder='identifiant' type="text" name="username" onChange={handleChange} value={formInput.username} />
            <input className='Application__left_step_inputText' placeholder='mot de passe' type="password" name="password" onChange={handleChange} value={formInput.password} />
            <button onClick={() => setNeedsLogin(!needsLogin)} className='Application__left_step_buttons_button next' type='submit' name='submit'>Connexion</button>
        </form>
       
      </div>
    </div>
    
  )
}

export default LoginForm