import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotices } from "../redux/notices/notices-operations";
import { FriendsTitle } from "./Friends.styled";
import {
    selectNotices,
    selectNoticesCurrentPage,
    selectNoticesHasMore,
    selectNoticesTotalPages,
} from "../redux/notices/notices-selectors";
import { NoticesCard } from "../сomponents/NoticesCard/NoticesCard";
import { resetNotices } from "../redux/notices/noticesSlice";
import { Pagination } from "../сomponents/Pagination/Pagination";
import { NoticesList } from "./Notices.styled";

const Notices = () => {
    const dispatch = useDispatch();
    const notices = useSelector(selectNotices);
    const currentPage = useSelector(selectNoticesCurrentPage);
    const hasMore = useSelector(selectNoticesHasMore);
    const totalPages = useSelector(selectNoticesTotalPages);
    const limit = 6;

    const [currentPageNumber, setCurrentPageNumber] = useState(1);

    useEffect(() => {
        dispatch(resetNotices());
        dispatch(fetchNotices({ page: 1, limit }));
    }, [dispatch, limit]);

    const handleCurrentPage = (page) => {
        setCurrentPageNumber(page);
        dispatch(fetchNotices({ page, limit }));
    };

    const handleNextPage = () => {
        if (hasMore) {
            const nextPage = currentPageNumber + 1;
            setCurrentPageNumber(nextPage);
            dispatch(fetchNotices({ page: nextPage, limit }));
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            const prevPage = currentPageNumber - 1;
            setCurrentPageNumber(prevPage);
            dispatch(fetchNotices({ page: prevPage, limit }));
        }
    };

    const handleFirstPage = () => {
        setCurrentPageNumber(1);
        dispatch(fetchNotices({ page: 1, limit }));
    };

    const handleLastPage = () => {
        setCurrentPageNumber(totalPages);
        dispatch(fetchNotices({ page: totalPages, limit }));
    };
    return (
        <>
            <FriendsTitle>Find your favorite pet</FriendsTitle>
            <NoticesList>
                {notices.map((item) => (
                    <NoticesCard key={item._id} noticesItem={item} />
                ))}
            </NoticesList>
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
        </>
    );
};

export default Notices;
