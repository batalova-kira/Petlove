import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints.js";

export const baseStyles = {
    control: (provided) => {
        const isWideScreen = window.innerWidth >= 768;

        return {
            ...provided,
            borderRadius: "30px",
            border: "none",
            boxShadow: "none",
            padding: isWideScreen ? "14px" : "12px",
        };
    },
    valueContainer: (provided) => ({
        ...provided,
        padding: "0", // Задає падінги в контейнері значення
    }),
    input: (provided) => {
        const isWideScreen = window.innerWidth >= 768;

        return {
            ...provided,
            margin: "0",
            padding: "0",
            fontSize: isWideScreen ? "16px" : "14px",
            lineHeight: isWideScreen ? "1.25" : "1.29",
            letterSpacing: "-0.03em",
            color: "262626",
        };
    },
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
    option: (provided, state) => ({
        ...provided,
        margin: "0",
        color:
            state.data.value === "all"
                ? "#f6b83d"
                : state.isSelected
                ? "white"
                : "#rgba(38, 38, 38, 0.6)",
        backgroundColor: "transparent",
        // state.isFocused
        // ? "#f6b83d22" // Колір фону при наведенні
        // : "transparent",
    }),
};

export const customStylesCategory = {
    ...baseStyles,
    control: (provided) => ({
        ...baseStyles.control(provided),
        width: "143px",

        "@media only screen and (min-width: 768px)": {
            width: "170px",
        },
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

export const customStylesType = {
    ...baseStyles,
    control: (provided) => ({
        ...baseStyles.control(provided),

        width: "100%",

        "@media only screen and (min-width: 768px)": {
            width: "190px",
        },
    }),
};

export const WrapperSelects = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 16px;
    }
`;

export const WrapperAddSelects = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        gap: 16px;
    }
`;
