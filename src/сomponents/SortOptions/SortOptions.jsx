export const SortOptions = ({ onChangeSortOrder }) => {
    const handleSortChange = (e) => {
        onChangeSortOrder(e.target.value);
    };

    return (
        <div>
            <label>
                <input
                    type="radio"
                    value="popular"
                    name="sort"
                    onChange={handleSortChange}
                />
                Popular
            </label>
            <label>
                <input
                    type="radio"
                    value="unpopular"
                    name="sort"
                    onChange={handleSortChange}
                />
                Unpopular
            </label>
            <label>
                <input
                    type="radio"
                    value="cheap"
                    name="sort"
                    onChange={handleSortChange}
                />
                Cheap
            </label>
            <label>
                <input
                    type="radio"
                    value="expensive"
                    name="sort"
                    onChange={handleSortChange}
                />
                Expensive
            </label>
        </div>
    );
};
