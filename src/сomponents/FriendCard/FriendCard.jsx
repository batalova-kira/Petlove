export const FriendCard = ({ item }) => {
    const { title } = item;

    return (
        <div key={item._id}>
            <p>{title}</p>
        </div>
    );
};
