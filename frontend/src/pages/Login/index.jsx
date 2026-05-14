import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import './index.css';

function Login(){
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()
        setError("")
        setLoading(true)

        try{
            await login(email, password)
            navigate('/pets')
        } catch {
            setError('Email ou senha inválidos')
        } finally{
            setLoading(false)
        }
        console.log({email, password})
    }

    return (
        <div className="login-page">
            <form className="login-card" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input 
                    type="email" 
                    placeholder="E-mail"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Senha"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                {error && <p>{error}</p>}    
                <button type="submit" disabled={loading}>
                    {loading ? 'Entrando...' : 'Entrar'}
                </button>
            </form>
        </div>
    )
}

export default Login