import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Correo"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Iniciar Sesión</button>
      </form>
    </div>
  );
}
