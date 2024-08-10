import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useCallback, useEffect } from "react";
import {
    selectCategory,
    selectCities,
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
import AsyncSelect from "react-select/async";
import { debounce } from "../../constants/debounce";
import { CitySearchInput } from "../CitySearchInput/CitySearchInput";

export const FiltersNotices = () => {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategory);
    const filterWord = useSelector(selectFilterWord);
    const selectedCategory = useSelector(selectSearchCategory);
    const gender = useSelector(selectGender);
    const selectedGender = useSelector(selectSearchGender);
    const species = useSelector(selectSpecies);
    const selectedSpecies = useSelector(selectSearchSpecies);
    const selectedLocation = useSelector(selectSearchLocation);
    const cities = useSelector(selectCities);

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

    // // Асинхронне завантаження міст під час введення тексту

    // const loadCityOptions = useCallback(
    //     debounce(async (inputValue, callback) => {
    //         if (inputValue.length < 2) {
    //             callback([]);
    //             return;
    //         }

    //         const filteredCities = cities
    //             .filter((city) =>
    //                 city.cityEn.toLowerCase().includes(inputValue.toLowerCase())
    //             )
    //             .map((city) => ({
    //                 value: city._id, // ID міста
    //                 label: `${city.stateEn}, ${city.cityEn}`, // Форматування: область, населений пункт
    //             }));

    //         callback(filteredCities);
    //     }, 300),
    //     [cities]
    // );

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

    const selectedLocationOption =
        cities.find((city) => city._id === selectedLocation) || null;

    return (
        <>
            <Filter onFilterSubmit={handleFilterSubmit} />
            <Select
                value={selectedCategoryOption}
                onChange={(option) => handleFilterChange("category", option)}
                options={options}
                isClearable
                placeholder="Category"
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
