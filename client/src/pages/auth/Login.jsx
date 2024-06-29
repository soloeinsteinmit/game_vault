import GameTrailersView from "./partials/GameTrailersView";
import LoginForm from "./partials/LoginForm";

function Login() {
  return (
    <div className="flex">
      <GameTrailersView />
      <LoginForm />
    </div>
  );
}

export default Login;
