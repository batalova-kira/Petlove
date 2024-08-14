import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    selectCategory,
    selectFilterWord,
    selectGender,
    selectSearchCategory,
    selectSearchGender,
    selectSearchLocation,
    selectSearchSpecies,
    selectSpecies,
} from "../../redux/notices/notices-selectors";
import {
    fetchCategories,
    fetchGender,
    fetchNotices,
    fetchSpecies,
} from "../../redux/notices/notices-operations";
import {
    setCategory,
    setFilterWord,
    setGender,
    setLocation,
    setSpecies,
} from "../../redux/notices/noticesSlice";
import { Filter } from "../Filter/Filter";
import { CitySearchInput } from "../CitySearchInput/CitySearchInput";
import Select from "react-select";
import { customStylesCategory } from "./FiltersNotices.styled";

export const FiltersNotices = ({ $isNoticesPage }) => {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategory);
    const filterWord = useSelector(selectFilterWord);
    const selectedCategory = useSelector(selectSearchCategory);
    const gender = useSelector(selectGender);
    const selectedGender = useSelector(selectSearchGender);
    const species = useSelector(selectSpecies);
    const selectedSpecies = useSelector(selectSearchSpecies);
    const selectedLocation = useSelector(selectSearchLocation);
    // const cities = useSelector(selectCities);

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchGender());
        dispatch(fetchSpecies());
    }, [dispatch]);

    const handleFilterChange = (type, selectedOption) => {
        const value = selectedOption ? selectedOption.value : "";
        switch (type) {
            case "category":
                dispatch(setCategory(value));
                break;
            case "gender":
                dispatch(setGender(value));
                break;
            case "species":
                dispatch(setSpecies(value));
                break;
            case "location":
                dispatch(setLocation(value));
                break;
            default:
                return;
        }

        dispatch(
            fetchNotices({
                page: 1,
                limit: 6,
                category: type === "category" ? value : selectedCategory,
                sex: type === "gender" ? value : selectedGender,
                species: type === "species" ? value : selectedSpecies,
                locationId: type === "location" ? value : selectedLocation,
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
                species: selectedSpecies,
                locationId: selectedLocation,
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

    const optionsSpecies =
        species?.length > 0
            ? species.map((item) => ({ value: item, label: item }))
            : [];

    const selectedCategoryOption =
        options.find((option) => option.value === selectedCategory) || null;

    const selectedGenderOption =
        optionsGender.find((option) => option.value === selectedGender) || null;

    const selectedSpeciesOption =
        optionsSpecies.find((option) => option.value === selectedSpecies) ||
        null;

    // const selectedLocationOption =
    //     cities.find((city) => city._id === selectedLocation) || null;

    return (
        <>
            <Filter
                onFilterSubmit={handleFilterSubmit}
                $isNoticesPage={$isNoticesPage}
            />
            <Select
                value={selectedCategoryOption}
                onChange={(option) => handleFilterChange("category", option)}
                options={options}
                isClearable
                placeholder="Category"
                styles={customStylesCategory}
            />
            <Select
                value={selectedGenderOption}
                onChange={(option) => handleFilterChange("gender", option)}
                options={optionsGender}
                isClearable
                placeholder="By Gender"
            />
            <Select
                value={selectedSpeciesOption}
                onChange={(option) => handleFilterChange("species", option)}
                options={optionsSpecies}
                isClearable
                placeholder="By type"
            />
            <CitySearchInput />
        </>
    );
};
