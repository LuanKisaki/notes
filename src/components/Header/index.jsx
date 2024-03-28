import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarDefault from "../../../assets/avatar_default.svg";
import { RiShutDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}files/${user.avatar}`
    : avatarDefault;

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt="imagem do avatar" />

        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
