import { Title } from "../Title/Title";
import {
    AccentTextForLink,
    BtnSubmit,
    ErrorText,
    EyeWrapper,
    FormInput,
    IconMessageWrapper,
    IconPasswordMessageWrapper,
    InputWrapper,
    LoginFormContainer,
    LoginFormText,
    TextForLink,
    ValidationMessage,
    WrapperInputs,
    WrapperTextForLink,
} from "./LoginForm.styled";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/auth-operations";
import { useState } from "react";
import Icon from "../Icon/Icon";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
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
        const formData = {
            email: data.email,
            password: data.password,
        };

        dispatch(loginThunk(formData));
        reset();
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(onSubmit)();
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <LoginFormContainer>
            <Title text="Log in" />
            <LoginFormText>
                Welcome! Please enter your credentials to login to the platform:
            </LoginFormText>
            <form onSubmit={handleFormSubmit}>
                <WrapperInputs>
                    <InputWrapper>
                        <FormInput
                            type="email"
                            placeholder="Email"
                            $isinvalid={errors.email}
                            $isvalid={!errors.email && isValid}
                            {...register("email", {
                                required: "This field is required",
                                pattern: {
                                    value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                                    message: "Enter a valid Email",
                                },
                            })}
                        />
                        {errors?.email && (
                            <ErrorText>{errors?.email.message}</ErrorText>
                        )}
                        {isValid && !errors?.email && (
                            <ValidationMessage isValid={true}>
                                Email successfully validated!
                            </ValidationMessage>
                        )}
                        {errors?.email && (
                            <IconMessageWrapper>
                                <Icon name="red-false" width={18} height={18} />
                            </IconMessageWrapper>
                        )}
                        {isValid && !errors?.email && (
                            <IconMessageWrapper>
                                <Icon
                                    name="green-success"
                                    width={18}
                                    height={18}
                                />
                            </IconMessageWrapper>
                        )}
                    </InputWrapper>

                    <InputWrapper>
                        <FormInput
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            autoComplete="off"
                            $isinvalid={errors?.password}
                            $isvalid={!errors?.password && isValid}
                            {...register("password", {
                                required: "This field is required",
                                minLength: {
                                    value: 7,
                                    message:
                                        "Password must be at least 7 characters",
                                },
                            })}
                        />
                        <EyeWrapper onClick={handleClickShowPassword}>
                            {showPassword ? (
                                <Icon name="open-eye" width={18} height={18} />
                            ) : (
                                <Icon name="close-eye" width={18} height={18} />
                            )}
                        </EyeWrapper>
                        {errors?.password && (
                            <ErrorText>{errors?.password.message}</ErrorText>
                        )}
                        {isValid && !errors?.password && (
                            <ValidationMessage isValid={true}>
                                Password is secure
                            </ValidationMessage>
                        )}
                        {errors?.password && (
                            <IconPasswordMessageWrapper>
                                <Icon name="red-false" width={18} height={18} />
                            </IconPasswordMessageWrapper>
                        )}
                        {isValid && !errors?.password && (
                            <IconPasswordMessageWrapper>
                                <Icon
                                    name="green-success"
                                    width={18}
                                    height={18}
                                />
                            </IconPasswordMessageWrapper>
                        )}
                    </InputWrapper>
                </WrapperInputs>
                <BtnSubmit type="submit" id="loginBtn">
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
