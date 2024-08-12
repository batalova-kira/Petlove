import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotices } from "../redux/notices/notices-operations";
import { FriendsTitle } from "./Friends.styled";
import {
    selectFilterWord,
    selectNotices,
    selectNoticesCurrentPage,
    selectNoticesHasMore,
    selectNoticesTotalPages,
    selectSearchCategory,
    selectSearchGender,
    selectSearchLocation,
    selectSearchSpecies,
} from "../redux/notices/notices-selectors";
import { NoticesCard } from "../сomponents/NoticesCard/NoticesCard";
import { Pagination } from "../сomponents/Pagination/Pagination";
import { NoticesList } from "./Notices.styled";
import { FiltersNotices } from "../сomponents/FiltersNotices/FiltersNotices";
import { SortOptions } from "../сomponents/SortOptions/SortOptions";

const Notices = () => {
    const dispatch = useDispatch();
    const notices = useSelector(selectNotices);
    const currentPage = useSelector(selectNoticesCurrentPage);
    const hasMore = useSelector(selectNoticesHasMore);
    const totalPages = useSelector(selectNoticesTotalPages);
    const limit = 6;

    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [sortOrder, setSortOrder] = useState("");

    const selectedCategory = useSelector(selectSearchCategory);
    const selectedGender = useSelector(selectSearchGender);
    const selectedSpices = useSelector(selectSearchSpecies);
    const filterWord = useSelector(selectFilterWord);
    const selectedLocation = useSelector(selectSearchLocation);

    useEffect(() => {
        dispatch(
            fetchNotices({
                page: currentPageNumber,
                limit,
                category: selectedCategory,
                sex: selectedGender,
                species: selectedSpices,
                locationId: selectedLocation,
                keyword: filterWord,
            })
        );
    }, [
        dispatch,
        currentPageNumber,
        selectedCategory,
        selectedGender,
        selectedSpices,
        selectedLocation,
        filterWord,
    ]);

    const sortNotices = (notices) => {
        const sorted = [...notices]; // Робимо копію масиву
        switch (sortOrder) {
            case "popular":
                return sorted.sort((a, b) => b.popularity - a.popularity);
            case "unpopular":
                return sorted.sort((a, b) => a.popularity - b.popularity);
            case "cheap":
                return sorted.sort(
                    (a, b) =>
                        (parseFloat(a.price) || Infinity) -
                        (parseFloat(b.price) || Infinity)
                );
            case "expensive":
                return sorted.sort(
                    (a, b) =>
                        (parseFloat(b.price) || -Infinity) -
                        (parseFloat(a.price) || -Infinity)
                );
            default:
                return sorted;
        }
    };

    const filteredNotices = sortNotices(
        notices.filter((notice) => {
            return selectedGender ? notice.sex === selectedGender : true;
        })
    );

    const shouldShowPagination = notices.length > 0 && totalPages > 1;

    const handleCurrentPage = (page) => {
        setCurrentPageNumber(page);
    };

    const handleNextPage = () => {
        if (hasMore) {
            setCurrentPageNumber((prev) => prev + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPageNumber > 1) {
            setCurrentPageNumber((prev) => prev - 1);
        }
    };

    const handleFirstPage = () => {
        setCurrentPageNumber(1);
    };

    const handleLastPage = () => {
        setCurrentPageNumber(totalPages);
    };

    return (
        <>
            <FriendsTitle>Find your favorite pet</FriendsTitle>
            <div>
                <FiltersNotices />
                <SortOptions onChangeSortOrder={setSortOrder} />
            </div>
            <NoticesList>
                {filteredNotices.map((item) => (
                    <NoticesCard key={item._id} noticesItem={item} />
                ))}
            </NoticesList>
            {shouldShowPagination && (
                <Pagination
                    currentPage={currentPageNumber}
                    handleCurrentPage={handleCurrentPage}
                    handleNextPage={handleNextPage}
                    handlePrevPage={handlePrevPage}
                    handleFirstPage={handleFirstPage}
                    handleLastPage={handleLastPage}
                    hasMore={hasMore}
                    maxPages={totalPages}
                />
            )}
        </>
    );
};

export default Notices;
