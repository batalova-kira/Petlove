import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useEffect } from "react";
import {
    selectCategory,
    selectFilterWord,
    selectGender,
    selectSearchCategory,
    selectSearchGender,
} from "../../redux/notices/notices-selectors";
import {
    fetchCategories,
    fetchGender,
    fetchNotices,
} from "../../redux/notices/notices-operations";
import {
    setCategory,
    setFilterWord,
    setGender,
} from "../../redux/notices/noticesSlice";
import { Filter } from "../Filter/Filter";

export const FiltersNotices = () => {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategory);
    const filterWord = useSelector(selectFilterWord);
    const selectedCategory = useSelector(selectSearchCategory);
    const gender = useSelector(selectGender);
    const selectedGender = useSelector(selectSearchGender);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchGender());
    }, [dispatch]);

    const handleCategoryChange = (selectedOption) => {
        const categoryValue = selectedOption ? selectedOption.value : "";
        dispatch(setCategory(categoryValue));
        dispatch(
            fetchNotices({
                page: 1,
                limit: 6,
                category: categoryValue,
                sex: selectedGender,
                keyword: filterWord,
            })
        );
    };

    const handleGenderChange = (selectedOption) => {
        const genderValue = selectedOption ? selectedOption.value : "";
        console.log("Selected gender:", genderValue);
        dispatch(setGender(genderValue));
        dispatch(
            fetchNotices({
                page: 1,
                limit: 6,
                category: selectedCategory,
                sex: genderValue,
                keyword: filterWord,
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
                sex: selectedGender,
                keyword: filterWord,
            })
        );
    };

    const options =
        categories?.length > 0
            ? categories.map((category) => ({
                  value: category,
                  label: category,
              }))
            : [];

    const optionsGender =
        gender?.length > 0
            ? gender.map((item) => ({ value: item, label: item }))
            : [];

    return (
        <>
            <Filter onFilterSubmit={handleFilterSubmit} />
            <Select
                value={
                    options.find(
                        (option) => option.value === selectedCategory
                    ) || null
                }
                onChange={handleCategoryChange}
                options={options}
                isClearable
                placeholder="Select a category"
            />
            <Select
                value={
                    optionsGender.find(
                        (option) => option.value === selectedGender
                    ) || null
                }
                onChange={handleGenderChange}
                options={optionsGender}
                isClearable
                placeholder="Select by Gender"
            />
        </>
    );
};
