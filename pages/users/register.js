// This will give us the route: localhost:3000/users/register

import { useState } from 'react'; 
import fire from '../../config/fire-config';
import { useRouter } from 'next/router';

const Register = () => {
  const router = useRouter();
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passConf, setPassConf] = useState('');
  const [notification, setNotification] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (password !== passConf) {
      setNotification(
       'Password and password confirmation does not match'
      )
      setTimeout(() => {
        setNotification('')
      }, 2000)
      setPassword('');
      setPassConf('');
      return null;
    //   setting password and passowrd confirm back to empty strings
      }
    fire.auth()
      .createUserWithEmailAndPassword(userName, password)
      .catch((err) => {
        console.log(err.code, err.message)
      });
    router.push("/")
    // if the user and the confirmation match we save the user with the help from the auth function in the firebase
    // We are using Next.js built in router hook to redirect us to the front page upon creation of a new user
    // Firebase takes care of hashing the password and checking if the user is unique
  }
  return (
    <div>
      <h1>Create new user</h1>
        {notification}
      <form onSubmit={handleLogin}>
        Email: <input type="text" value={userName} 
        onChange={({target}) => setUsername(target.value)} /> 
        <br />
        Password: <input type="password" value={password} 
        onChange={({target}) => setPassword(target.value)} /> 
        <br />
        Password conf: <input type="password" value={passConf}    
        onChange={({target}) => setPassConf(target.value)} /> 
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
export default Register