import { BtnLoupe } from "../Filter/Filter.styled";
import Icon from "../Icon/Icon";

export const IconSearch = () => (
    <BtnLoupe type="submit" style={{ display: "flex", alignItems: "center" }}>
        <Icon name="loupe" width={18} height={18} />{" "}
    </BtnLoupe>
);
