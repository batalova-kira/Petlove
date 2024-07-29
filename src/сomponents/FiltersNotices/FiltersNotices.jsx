import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/filters/filtersSlice";
import Select from "react-select";
import {
    selectCategory,
    selectSearchCategory,
} from "../../redux/filters/filters-selectors";
import { fetchCategories } from "../../redux/filters/filters-operations";
import { useEffect } from "react";

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
    // const handleCategoryChange = (e) => {
    //     dispatch(setCategory(e.target.value));
    // };

    // const handleGenderChange = (selectedOption) => {
    //     dispatch(setGender(selectedOption.value));
    // };

    // const handleSearchQueryChange = (event) => {
    //     dispatch(setSearchQuery(event.target.value));
    // };

    // const handleSpeciesChange = (selectedOption) => {
    //     dispatch(setSpecies(selectedOption.value));
    // };

    // return (
    //     <div>
    //         <Select value={selectedCategory} onChange={handleCategoryChange}>
    //             <option value="">All Categories</option>
    //             {categories.map((category) => (
    //                 <option key={category} value={category}>
    //                     {category}
    //                 </option>
    //             ))}
    //         </Select>
    {
        /* <Select
                value={{ value: gender, label: gender }}
                onChange={handleGenderChange}
                options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                ]}
                placeholder="Select Gender"
            />
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchQueryChange}
                placeholder="Search by title"
            />
            <Select
                value={{ value: species, label: species }}
                onChange={handleSpeciesChange}
                options={[
                    { value: "dog", label: "Dog" },
                    { value: "cat", label: "Cat" },
                ]}
                placeholder="Select Species"
            /> */
    }
    // </div>
    // );
};
