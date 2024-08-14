import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints.js";

export const customStylesCategory = {
    container: (provided) => ({
        ...provided,
        width: "143px",
    }),
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
    }),
    placeholder: (provided) => ({
        ...provided,
        margin: "0",
        padding: "0",
        color: "black", // Задає колір плейсхолдера
    }),
    singleValue: (provided) => ({
        ...provided,
        margin: "0",
        padding: "0", // Задає падінги для єдиного значення
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        padding: "0",
        color: "black",
        svg: {
            width: "18px",
            height: "18px",
        },
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: "none", // Прибирає розділювач між індикаторами
    }),
};
