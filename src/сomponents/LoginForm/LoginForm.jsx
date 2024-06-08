import { Title } from "../Title/Title";
import {
    AccentTextForLink,
    BtnSubmit,
    ErrorText,
    FormInput,
    LoginFormContainer,
    LoginFormText,
    TextForLink,
    ValidationMessage,
    WrapperInputs,
    WrapperTextForLink,
} from "./LoginForm.styled";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data) => {
        console.log("Email:", data.email);
        console.log("Password:", data.password);
        reset();
    };

    return (
        <LoginFormContainer>
            <Title text="Log in" />
            <LoginFormText>
                Welcome! Please enter your credentials to login to the platform:
            </LoginFormText>
            <form onSubmit={handleSubmit(onSubmit)}>
                <WrapperInputs>
                    <FormInput
                        type="email"
                        placeholder="Email"
                        isInvalid={errors.email}
                        isValid={!errors.email && isValid}
                        {...register("email", {
                            required: "This field is required",
                            pattern: {
                                value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                                message: "Enter a valid Email",
                            },
                        })}
                    />
                    {errors.email && (
                        <ErrorText>{errors.email.message}</ErrorText>
                    )}
                    {isValid && !errors.email && (
                        <ValidationMessage isValid={true}>
                            Email successfully validated!
                        </ValidationMessage>
                    )}
                    <FormInput
                        type="password"
                        placeholder="Password"
                        isInvalid={errors.password}
                        isValid={!errors.password && isValid}
                        {...register("password", {
                            required: "This field is required",
                            minLength: {
                                value: 7,
                                message:
                                    "Password must be at least 7 characters",
                            },
                        })}
                    />
                    {errors.password && (
                        <ErrorText>{errors.password.message}</ErrorText>
                    )}
                    {isValid && !errors.password && (
                        <ValidationMessage isValid={true}>
                            Password is secure
                        </ValidationMessage>
                    )}
                </WrapperInputs>

                <BtnSubmit type="submit" disabled={!isValid}>
                    Log in
                </BtnSubmit>
                <WrapperTextForLink>
                    <TextForLink>
                        Don’t have an account?{" "}
                        <AccentTextForLink to="/registration">
                            {" "}
                            Register
                        </AccentTextForLink>
                    </TextForLink>
                </WrapperTextForLink>
            </form>
        </LoginFormContainer>
    );
};
