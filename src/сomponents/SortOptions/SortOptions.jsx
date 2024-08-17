import { useState } from "react";
import {
    OptionResetBtn,
    SortOptionBtn,
    SortOptionWrapper,
} from "./SortOptions.styled";

export const SortOptions = ({ onChangeSortOrder }) => {
    const [selectedOption, setSelectedOption] = useState("");
    console.log(selectedOption);

    const handleSortChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
        onChangeSortOrder(value);
    };

    const handleReset = (e) => {
        e.stopPropagation();
        e.preventDefault(); // Додайте це, щоб запобігти додатковим змінам
        setSelectedOption(""); // Скидаємо вибраний фільтр
        onChangeSortOrder(""); // Скидаємо сортування
    };

    return (
        <SortOptionWrapper>
            {["popular", "unpopular", "cheap", "expensive"].map((option) => (
                <div key={option} className="sort-option-container">
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
                        {selectedOption === option && (
                            <button onClick={handleReset}>&times;</button>
                        )}
                    </SortOptionBtn>
                </div>
            ))}
        </SortOptionWrapper>
    );
};
