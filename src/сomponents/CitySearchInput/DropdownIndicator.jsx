import Icon from "../Icon/Icon";
import { components } from "react-select";

export const DropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
        <Icon name="loupe" width={18} height={18} />{" "}
    </components.DropdownIndicator>
);
