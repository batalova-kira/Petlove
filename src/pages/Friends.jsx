import React, { useEffect } from "react";
import { FriendsList, FriendsTitle } from "./Friends.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchFriends } from "../redux/friends/friends-operations";
import { selectFriends } from "../redux/friends/friends-selectors";
import { FriendCard } from "../сomponents/FriendCard/FriendCard";

const Friends = () => {
    const dispatch = useDispatch();
    const friends = useSelector(selectFriends);

    useEffect(() => {
        dispatch(fetchFriends());
    }, []);

    return (
        <>
            <FriendsTitle>Our friends</FriendsTitle>
            <FriendsList>
                {friends.map((item) => (
                    <FriendCard key={item._id} item={item} />
                ))}
            </FriendsList>
        </>
    );
};

export default Friends;
