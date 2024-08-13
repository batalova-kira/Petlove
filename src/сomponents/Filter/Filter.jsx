import React, { useState } from "react";

import { BtnLoupe, InputFilter, WrapperFilter } from "./Filter.styled";
import Icon from "../Icon/Icon";

export const Filter = ({ onFilterSubmit, $isNoticesPage }) => {
    const [filterWord, setFilterWord] = useState("");

    const handleFilterChange = (e) => {
        setFilterWord(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilterSubmit(filterWord);
        setFilterWord("");
    };

    return (
        <WrapperFilter onSubmit={handleSubmit} $isNoticesPage={$isNoticesPage}>
            <InputFilter
                type="text"
                value={filterWord}
                onChange={handleFilterChange}
                placeholder="Search"
                $isNoticesPage={$isNoticesPage}
            />
            <BtnLoupe type="submit">
                <Icon name="loupe" width={18} height={18} />
            </BtnLoupe>
        </WrapperFilter>
    );
};
