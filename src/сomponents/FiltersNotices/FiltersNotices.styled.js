import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints.js";

export const baseStyles = {
    control: (provided) => ({
        ...provided,
        borderRadius: "30px",
        border: "none", // Можна змінити на потрібний колір
        boxShadow: "none",
        padding: "12px",
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: "0", // Задає падінги в контейнері значення
    }),
    input: (provided) => ({
        ...provided,
        margin: "0",
        padding: "0",
        fontSize: "14px",
        lineHeight: "1.29",
        letterSpacing: "-0.03em",
        color: "262626",
    }),
    clearIndicator: (provided) => ({
        ...provided,
        color: "262626",
        padding: "0",
        margin: "0",
        svg: {
            width: "18px",
            height: "18px",
        },
    }),
    placeholder: (provided) => ({
        ...provided,
        margin: "0",
        padding: "0",
        color: "262626", // Задає колір плейсхолдера
    }),
    singleValue: (provided) => ({
        ...provided,
        padding: "0",
        margin: "0",
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        padding: "0",
        color: "262626",
        svg: {
            width: "18px",
            height: "18px",
        },
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: "none", // Прибирає розділювач між індикаторами
    }),
    menu: (provided) => ({
        ...provided,
        // margin: "0",
        marginTop: "4px",
        borderRadius: "15px",
        width: "143px",
        height: "146px",
        color: "rgba(38, 38, 38, 0.6)",
        boxShadow: "none",
    }),
    option: (provided) => ({
        ...provided,
        backgroundColor: "transparent",
        color: "#rgba(38, 38, 38, 0.6)",
        "&:hover": {
            color: "#f6b83d", // Застосування жовтого кольору під час наведення
        },
        "&:focus": {
            outline: "none",
            color: "#f6b83d", // Відключення стандартного означення фокусу
        },
    }),
};

export const customStylesCategory = {
    ...baseStyles,
    control: (provided) => ({
        ...baseStyles.control(provided),
        width: "143px",
    }),
};

export const customStylesGender = {
    ...baseStyles,
    control: (provided) => ({
        ...baseStyles.control(provided),

        width: "143px",

        "@media only screen and (min-width: 768px)": {
            width: "170px",
        },
    }),
};

export const WrapperSelects = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const WrapperAddSelects = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;
