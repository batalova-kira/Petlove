import { useForm } from "react-hook-form";
import Icon from "../Icon/Icon";
import {
    AccentTextForLink,
    BtnSubmit,
    ErrorText,
    EyeWrapper,
    FormInput,
    IconMessageWrapper,
    IconPasswordMessageWrapper,
    InputWrapper,
    LoginFormText,
    TextForLink,
    ValidationMessage,
    WrapperInputs,
    WrapperTextForLink,
} from "../LoginForm/LoginForm.styled";
import { Title } from "../Title/Title";
import { RegisterFormContainer } from "./RegisterForm.styled";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerThunk } from "../../redux/auth/auth-operations";

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isValid },
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = (data) => {
        const formData = {
            name: data.name,
            email: data.email,
            password: data.password,
        };

        dispatch(registerThunk(formData));
        console.log("Name:", data.name);
        console.log("Email:", data.email);
        console.log("Password:", data.password);
        reset();
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(onSubmit)();
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const password = watch("password", "");

    return (
        <RegisterFormContainer>
            <Title text="Registration" />
            <LoginFormText>
                Thank you for your interest in our platform.
            </LoginFormText>
            <form onSubmit={handleFormSubmit}>
                <WrapperInputs>
                    <InputWrapper>
                        <FormInput
                            type="text"
                            placeholder="Name"
                            $isinvalid={errors.name}
                            $isvalid={!errors.name && isValid}
                            {...register("name", {
                                required: "This field is required",
                                minLength: {
                                    value: 3,
                                    message:
                                        "Name must be at least 3 characters",
                                },
                            })}
                        />
                        {errors?.name && (
                            <ErrorText>{errors?.name.message}</ErrorText>
                        )}
                        {isValid && !errors?.name && (
                            <ValidationMessage isValid={true}>
                                Name successfully validated!
                            </ValidationMessage>
                        )}
                        {errors?.name && (
                            <IconMessageWrapper>
                                <Icon name="red-false" width={18} height={18} />
                            </IconMessageWrapper>
                        )}
                        {isValid && !errors?.name && (
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
                    <InputWrapper>
                        <FormInput
                            type={showPassword ? "text" : "password"}
                            placeholder="Confirm password"
                            autoComplete="off"
                            $isinvalid={errors?.confirmPassword}
                            $isvalid={!errors?.confirmPassword && isValid}
                            {...register("confirmPassword", {
                                required: "Please confirm your password",
                                validate: (value) =>
                                    value === password ||
                                    "Passwords do not match",
                            })}
                        />
                        <EyeWrapper onClick={handleClickShowPassword}>
                            {showPassword ? (
                                <Icon name="open-eye" width={18} height={18} />
                            ) : (
                                <Icon name="close-eye" width={18} height={18} />
                            )}
                        </EyeWrapper>
                        {errors?.confirmPassword && (
                            <ErrorText>
                                {errors?.confirmPassword.message}
                            </ErrorText>
                        )}
                        {isValid && !errors?.confirmPassword && (
                            <ValidationMessage isValid={true}>
                                Password is secure
                            </ValidationMessage>
                        )}
                        {errors?.confirmPassword && (
                            <IconPasswordMessageWrapper>
                                <Icon name="red-false" width={18} height={18} />
                            </IconPasswordMessageWrapper>
                        )}
                        {isValid && !errors?.confirmPassword && (
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
                    Registration
                </BtnSubmit>
                <WrapperTextForLink>
                    <TextForLink>
                        Already have an account?{" "}
                        <AccentTextForLink to="/login">
                            {" "}
                            Login
                        </AccentTextForLink>
                    </TextForLink>
                </WrapperTextForLink>
            </form>
        </RegisterFormContainer>
    );
};
