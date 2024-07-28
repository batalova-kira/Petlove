export const NoticesCard = ({ noticesItem }) => {
    const { name, _id } = noticesItem;

    return (
        <li key={_id}>
            <h3>{name}</h3>
        </li>
    );
};
