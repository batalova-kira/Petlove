import {
    ContainerFriendText,
    FriendAvatar,
    FriendText,
    FriendTextAccent,
    FriendTitle,
    WrapperFriendAvatar,
    WrapperFriendCard,
    WrapperFriendDescription,
    WrapperFriendText,
    WrapperWorkHours,
} from "./FriendCard.styled";

export const FriendCard = ({ item }) => {
    const { title, workDays, imageUrl, address, phone, email } = item;

    // Функція для витягування часу роботи
    const getWorkingHours = (days) => {
        const openDay = days.find((day) => day.from && day.to);
        if (openDay) {
            return `${openDay.from} - ${openDay.to}`;
        }
        return null;
    };

    const workingHours = workDays ? getWorkingHours(workDays) : null;

    return (
        <WrapperFriendCard key={item._id}>
            <WrapperWorkHours>
                {workingHours ? <p>{workingHours}</p> : <p>Day and night</p>}
            </WrapperWorkHours>
            <WrapperFriendDescription>
                <WrapperFriendAvatar>
                    <FriendAvatar src={imageUrl} alt={title} />
                </WrapperFriendAvatar>
                <ContainerFriendText>
                    <FriendTitle>{title}</FriendTitle>
                    <WrapperFriendText>
                        <FriendText>
                            Email:{" "}
                            <FriendTextAccent>
                                {email ? email : "website only"}
                            </FriendTextAccent>
                        </FriendText>
                        <FriendText>
                            Address:{" "}
                            <FriendTextAccent>
                                {address ? address : "website only"}
                            </FriendTextAccent>
                        </FriendText>
                        <FriendText>
                            Phone:{" "}
                            <FriendTextAccent>
                                {phone ? phone : "email only"}
                            </FriendTextAccent>
                        </FriendText>
                    </WrapperFriendText>
                </ContainerFriendText>
            </WrapperFriendDescription>
        </WrapperFriendCard>
    );
};
