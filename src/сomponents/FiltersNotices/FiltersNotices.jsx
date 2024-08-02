import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useEffect } from "react";
import {
    selectCategory,
    selectFilterWord,
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
    const filterWord = useSelector(selectFilterWord);
    const selectedCategory = useSelector(selectSearchCategory);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleCategoryChange = (selectedOption) => {
        dispatch(setCategory(selectedOption ? selectedOption.value : ""));
        dispatch(
            fetchNotices({
                page: 1,
                limit: 6,
                category: selectedOption ? selectedOption.value : "",
                keyword: filterWord, // Додаємо keyword в запит
            })
        );
    };

    const handleFilterSubmit = (filterWord) => {
        dispatch(setFilterWord(filterWord));
        dispatch(
            fetchNotices({
                page: 1,
                limit: 6,
                category: selectedCategory,
                keyword: filterWord,
            })
        );
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
