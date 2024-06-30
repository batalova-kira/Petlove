import React from "react";

export const NewsCard = ({ newsItem }) => {
    return (
        <li key={newsItem._id}>
            <div>
                <h2>{newsItem.title}</h2>
                <p>{newsItem.text}</p>
            </div>
        </li>
    );
};
