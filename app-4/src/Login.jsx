import React from 'react'

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)}/>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => alert(`Username: ${username}. Password: ${password}.`)}>Log me In</button>
    </div>
  )
}

export default Login