import { Title } from "../Title/Title";
import { LoginFormContainer, LoginFormText } from "./LoginForm.styled";

export const LoginForm = () => {
    return (
        <LoginFormContainer>
            <Title text="Log in" />
            <LoginFormText>
                Welcome! Please enter your credentials to login to the platform:
            </LoginFormText>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </LoginFormContainer>
    );
};
