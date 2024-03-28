import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Avatar, Container, Form } from "./styles";
import { api } from "../../services/api";
import avatarDefault from "../../../assets/avatar_default.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}files/${user.avatar}` : avatarDefault;
  
  // Estado que exige o avatar
  const [avatar, setAvatar] = useState(avatarUrl); 
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };
    // Object.assign evita que o Avatar se perca no reenvio da requisição 
    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Imagem de Avatar" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          alt="digite o seu nome"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="email"
          alt="digite a seu e-mail"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="digite a senha atual"
          type="password"
          alt="digite a sua senha atual de acesso"
          icon={FiLock}
          onChange={(e) => setPasswordOld(e.target.value)}
        />
        <Input
          placeholder="digite a nova senha"
          type="password"
          alt="digite a sua nova senha de acesso"
          icon={FiLock}
          onChange={(e) => setPasswordNew(e.target.value)}
        />
        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
