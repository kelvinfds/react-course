import './MyForm.css'
import {useState} from 'react';
export const MyForm = ({user}) => {
    // 6 - controlled inputs

    // 3 - Gerenciamento de dados

    const [name, setName] = useState(user.name ?? "");
    const [email, setEmail] = useState(user.email ?? "");
    const [bio, setBio] = useState(user.bio ?? '');
    const [role, setRole] = useState(user.role ?? 'user');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        // preventDefault serve para a pagina nao dar um reload
        // apos submeter o form, tecnica usada em uma SPA
        e.preventDefault();
        console.log("Enviando Formulario");
        console.log(name, email, bio, role);


        // 7 - Limpando form
        setName("");
        setEmail("");
        setBio("");
        setRole("user");
    };
  return (
    <div>
        {/* 5 - Submetendo o formulario */}
        <form onSubmit={handleSubmit}>
            <div>
                {/* 1 - Criando um form */}
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Digite seu nome" 
                    onChange={handleName} 
                    value={name}
                />

                {/* 2 - Label envolvendo o input */}
                <label>
                    <span>Email:</span>
                    {/* 4 - Simplificação de manipulação do state com a manipulação direto no onChange */}
                    <input 
                        type="email" 
                        placeholder="Digite seu email" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>

                {/* 8 - Input Textarea */}
                <label>
                    <span>Descrição:</span>
                    <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>

                {/* 9 - Input Select */}
                <label>
                    <span>Função:</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="manager">Gerente</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
            </div>
            <input type="submit" value="Salvar" />
        </form>
    </div>
  )
}
