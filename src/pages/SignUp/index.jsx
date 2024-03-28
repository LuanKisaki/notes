import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos.");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso.");
      })
      .catch((error) => {
        if (error.res) {
          alert(error.res.data.message);
        }
        else {
          alert("Não foi possível cadastrar.")
        }
      });
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Notes</h1>
        <p>Aplicação para salvar e gerenciar suas notas.</p>
        <h2>Crie sua conta</h2>
        <Input
          placeholder="Nome"
          type="text"
          alt="digite o seu nome"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)} // e = event
        />
        <Input
          placeholder="E-mail"
          type="email"
          alt="digite o seu e-mail"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="digite a senha"
          type="password"
          alt="digite a sua senha de acesso"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Cadastrar" onClick={handleSignUp} />
        <Link to="/">Voltar para tela de login</Link>
      </Form>
    </Container>
  );
}
