import { useState } from "react";
import {
    OptionResetBtn,
    SortOptionBtn,
    SortOptionWrapper,
} from "./SortOptions.styled";
import Icon from "../Icon/Icon";

export const SortOptions = ({ onChangeSortOrder }) => {
    const [selectedOption, setSelectedOption] = useState("");

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
                <div key={option}>
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
                            <OptionResetBtn onClick={handleReset}>
                                <Icon
                                    name="icon-close-white"
                                    width={18}
                                    height={18}
                                />
                            </OptionResetBtn>
                        )}
                    </SortOptionBtn>
                </div>
            ))}
        </SortOptionWrapper>
    );
};
