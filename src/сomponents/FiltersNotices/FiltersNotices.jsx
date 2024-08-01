import { useDispatch, useSelector } from "react-redux";

import Select from "react-select";

import { useEffect } from "react";
import {
    selectCategory,
    selectSearchCategory,
} from "../../redux/notices/notices-selectors";
import { fetchCategories } from "../../redux/notices/notices-operations";
import { setCategory } from "../../redux/notices/noticesSlice";

export const FiltersNotices = () => {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategory);
    const selectedCategory = useSelector(selectSearchCategory);
    // const gender = useSelector(selectGender);
    // const searchQuery = useSelector(selectSearchQuery);
    // const species = useSelector(selectSpecies);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleCategoryChange = (selectedOption) => {
        dispatch(setCategory(selectedOption ? selectedOption.value : ""));
    };

    const options =
        categories && categories.length > 0
            ? categories.map((category) => ({
                  value: category,
                  label: category,
              }))
            : [];

    return (
        <Select
            value={
                options.find((option) => option.value === selectedCategory) ||
                ""
            }
            onChange={handleCategoryChange}
            options={options}
            isClearable
            placeholder="Select a category"
        />
    );
};
