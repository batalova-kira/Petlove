import { SortOptionBtn, SortOptionWrapper } from "./SortOptions.styled";

export const SortOptions = ({ onChangeSortOrder }) => {
    const handleSortChange = (e) => {
        onChangeSortOrder(e.target.value);
    };

    return (
        <SortOptionWrapper>
            <SortOptionBtn>
                <input
                    type="radio"
                    value="popular"
                    name="sort"
                    onChange={handleSortChange}
                    className="radio-input"
                />
                <span>Popular</span>
            </SortOptionBtn>
            <SortOptionBtn>
                <input
                    type="radio"
                    value="unpopular"
                    name="sort"
                    onChange={handleSortChange}
                    className="radio-input"
                />
                <span>Unpopular</span>
            </SortOptionBtn>
            <SortOptionBtn>
                <input
                    type="radio"
                    value="cheap"
                    name="sort"
                    onChange={handleSortChange}
                    className="radio-input"
                />
                <span>Cheap</span>
            </SortOptionBtn>
            <SortOptionBtn>
                <input
                    type="radio"
                    value="expensive"
                    name="sort"
                    onChange={handleSortChange}
                    className="radio-input"
                />
                <span>Expensive</span>
            </SortOptionBtn>
        </SortOptionWrapper>
    );
};
