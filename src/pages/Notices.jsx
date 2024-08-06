import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotices } from "../redux/notices/notices-operations";
import { FriendsTitle } from "./Friends.styled";
import {
    selectFilterWord,
    selectLocation,
    selectNotices,
    selectNoticesCurrentPage,
    selectNoticesHasMore,
    selectNoticesTotalPages,
    selectSearchCategory,
    selectSearchGender,
    selectSearchSpecies,
} from "../redux/notices/notices-selectors";
import { NoticesCard } from "../сomponents/NoticesCard/NoticesCard";
import { Pagination } from "../сomponents/Pagination/Pagination";
import { NoticesList } from "./Notices.styled";
import { FiltersNotices } from "../сomponents/FiltersNotices/FiltersNotices";

const Notices = () => {
    const dispatch = useDispatch();
    const notices = useSelector(selectNotices);
    const currentPage = useSelector(selectNoticesCurrentPage);
    const hasMore = useSelector(selectNoticesHasMore);
    const totalPages = useSelector(selectNoticesTotalPages);
    const limit = 6;

    const [currentPageNumber, setCurrentPageNumber] = useState(1);

    const selectedCategory = useSelector(selectSearchCategory);
    const selectedGender = useSelector(selectSearchGender);
    const selectedSpices = useSelector(selectSearchSpecies);
    const filterWord = useSelector(selectFilterWord);
    const selectedLocation = useSelector(selectLocation);

    useEffect(() => {
        // Диспатч асинхронної дії для завантаження даних перший раз
        dispatch(
            fetchNotices({
                page: 1,
                limit: 6,
                category: selectedCategory,
                species: selectedSpices,
                sex: "",
                locationId: selectedLocation,
                keyword: filterWord,
            })
        );
    }, [
        dispatch,
        selectedCategory,
        selectedSpices,
        selectedLocation,
        filterWord,
    ]);

    // Диспатч коли відбулися зміни
    useEffect(() => {
        dispatch(
            fetchNotices({
                page: currentPageNumber,
                limit: 6,
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

    // Відфільтровані картки по статі
    const filteredNotices = notices.filter((notice) => {
        const genderMatch = selectedGender
            ? notice.sex === selectedGender
            : true;
        return genderMatch;
    });

    const handleCurrentPage = (page) => {
        setCurrentPageNumber(page);
        dispatch(
            fetchNotices({
                page,
                limit,
                category: selectedCategory,
                sex: selectedGender,
                species: selectedSpices,
                locationId: selectedLocation,
                keyword: filterWord,
            })
        );
    };

    const handleNextPage = () => {
        if (hasMore) {
            const nextPage = currentPageNumber + 1;
            setCurrentPageNumber(nextPage);
            dispatch(
                fetchNotices({
                    page: nextPage,
                    limit,
                    category: selectedCategory,
                    sex: selectedGender,
                    species: selectedSpices,
                    locationId: selectedLocation,
                    keyword: filterWord,
                })
            );
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            const prevPage = currentPageNumber - 1;
            setCurrentPageNumber(prevPage);
            dispatch(
                fetchNotices({
                    page: prevPage,
                    limit,
                    category: selectedCategory,
                    sex: selectedGender,
                    locationId: selectedLocation,
                    keyword: filterWord,
                })
            );
        }
    };

    const handleFirstPage = () => {
        setCurrentPageNumber(1);
        dispatch(
            fetchNotices({
                page: 1,
                limit,
                category: selectedCategory,
                sex: selectedGender,
                locationId: selectedLocation,
                keyword: filterWord,
            })
        );
    };

    const handleLastPage = () => {
        setCurrentPageNumber(totalPages);
        dispatch(
            fetchNotices({
                page: totalPages,
                limit,
                category: selectedCategory,
                sex: selectedGender,
                locationId: selectedLocation,
                keyword: filterWord,
            })
        );
    };

    const shouldShowPagination =
        (selectedGender ? filteredNotices.length : notices.length) > 0 &&
        totalPages > 1;

    return (
        <>
            <FriendsTitle>Find your favorite pet</FriendsTitle>
            <FiltersNotices />
            <NoticesList>
                {filteredNotices.map((item) => (
                    <NoticesCard key={item._id} noticesItem={item} />
                ))}
            </NoticesList>
            {shouldShowPagination && (
                <Pagination
                    currentPage={currentPage}
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
