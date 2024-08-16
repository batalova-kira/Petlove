import { baseStyles } from "../FiltersNotices/FiltersNotices.styled.js";

export const customStylesLocation = {
    ...baseStyles,
    control: (provided) => ({
        ...baseStyles.control(provided),

        width: "100%",

        "@media only screen and (min-width: 768px)": {
            width: "190px",
        },

        "@media only screen and (min-width: 1280px)": {
            width: "227px",
        },
    }),
};
