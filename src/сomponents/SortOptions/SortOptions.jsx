import { useState } from "react";
import {
    OptionResetBtn,
    SortOptionBtn,
    SortOptionWrapper,
} from "./SortOptions.styled";

export const SortOptions = ({ onChangeSortOrder }) => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleSortChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
        onChangeSortOrder(value);
    };

    const handleReset = (e) => {
        e.stopPropagation(); // Зупиняємо поширення події
        setSelectedOption("");
        onChangeSortOrder(""); // Скидаємо сортування
    };

    return (
        <SortOptionWrapper>
            {["popular", "unpopular", "cheap", "expensive"].map((option) => (
                <div key={option} style={{ position: "relative" }}>
                    <SortOptionBtn>
                        <input
                            type="radio"
                            value={option}
                            name="sort"
                            checked={selectedOption === option}
                            onChange={handleSortChange}
                            className="radio-input"
                        />
                        <span>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                        </span>
                    </SortOptionBtn>
                    {selectedOption === option && (
                        <OptionResetBtn
                            className="reset-button"
                            onClick={handleReset}
                        >
                            &times;
                        </OptionResetBtn>
                    )}
                </div>
            ))}
        </SortOptionWrapper>
    );
};
