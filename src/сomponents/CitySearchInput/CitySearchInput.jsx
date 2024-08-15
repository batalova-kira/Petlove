import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../redux/notices/noticesSlice";
import AsyncSelect from "react-select/async";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "../../constants/debounce";
import { fetchCities } from "../../redux/notices/notices-operations";
import { selectCities } from "../../redux/notices/notices-selectors";
import { DropdownIndicator } from "./DropdownIndicator";
import { customStylesLocation } from "./CitySearchInput.styled";

export const CitySearchInput = () => {
    const dispatch = useDispatch();
    const cities = useSelector(selectCities); // Вибірка міст з Redux
    const [isCitiesLoaded, setIsCitiesLoaded] = useState(false); // Стейт для перевірки, чи завантажені міста

    useEffect(() => {
        if (!isCitiesLoaded) {
            dispatch(fetchCities())
                .then(() => setIsCitiesLoaded(true))
                .catch((err) => console.error("Failed to load cities:", err));
        }
    }, [dispatch, isCitiesLoaded]);

    const loadCityOptions = useCallback(
        debounce(async (inputValue, callback) => {
            if (inputValue.length < 2) {
                callback([]);
                return;
            }

            // Перевірка, чи завантажені дані
            if (!cities.length) {
                // Якщо дані не завантажені, покажіть повідомлення
                callback([]);
                return;
            }

            // Фільтрація міст на основі введеного значення
            const filteredCities = cities
                .filter((city) =>
                    city.cityEn.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((city) => ({
                    value: city._id,
                    label: `${city.stateEn}, ${city.cityEn}`, // Форматування: область, населений пункт
                }));

            callback(filteredCities);
        }, 300),
        [cities]
    );

    const handleChange = (selectedOption) => {
        dispatch(setLocation(selectedOption ? selectedOption.value : ""));
    };

    return (
        <AsyncSelect
            cacheOptions
            loadOptions={loadCityOptions}
            onChange={handleChange}
            defaultOptions
            isClearable
            placeholder="Location"
            components={{ DropdownIndicator }}
            styles={customStylesLocation}
        />
    );
};
