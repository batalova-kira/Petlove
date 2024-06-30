import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectNews,
    selectNewsCurrentPage,
    selectNewsHasMore,
} from "../redux/news/news-selectors";
import { fetchNews } from "../redux/news/news-operations";

const News = () => {
    const dispatch = useDispatch();

    const news = useSelector(selectNews);
    const currentPage = useSelector(selectNewsCurrentPage);
    const hasMore = useSelector(selectNewsHasMore);

    useEffect(() => {
        dispatch(fetchNews({ page: currentPage, limit: 6 })); // Перша з 6 елементами
    }, [dispatch]);

    return (
        <div>
            <div>
                {news.map((item) => (
                    <li key={item._id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default News;
