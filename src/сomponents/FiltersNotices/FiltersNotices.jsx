import { useDispatch, useSelector } from "react-redux";

import Select from "react-select";

import { useEffect, useState } from "react";
import {
    selectCategory,
    selectSearchCategory,
} from "../../redux/notices/notices-selectors";
import {
    fetchCategories,
    fetchNotices,
} from "../../redux/notices/notices-operations";
import { setCategory, setFilterWord } from "../../redux/notices/noticesSlice";
import { Filter } from "../Filter/Filter";

export const FiltersNotices = () => {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategory);
    const selectedCategory = useSelector(selectSearchCategory);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleCategoryChange = (selectedOption) => {
        dispatch(setCategory(selectedOption ? selectedOption.value : ""));
    };

    const handleFilterSubmit = (filterWord) => {
        dispatch(setFilterWord(filterWord));
        dispatch(fetchNotices({ page: 1, limit: 6, keyword: filterWord }));
    };

    const options =
        categories && categories.length > 0
            ? categories.map((category) => ({
                  value: category,
                  label: category,
              }))
            : [];

    return (
        <>
            <Filter onFilterSubmit={handleFilterSubmit} />
            <Select
                value={
                    options.find(
                        (option) => option.value === selectedCategory
                    ) || ""
                }
                onChange={handleCategoryChange}
                options={options}
                isClearable
                placeholder="Select a category"
            />
        </>
    );
};
