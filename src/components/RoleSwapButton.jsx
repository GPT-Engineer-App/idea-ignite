import { IconButton } from "@chakra-ui/react";
import { FaExchangeAlt } from "react-icons/fa";

const RoleSwapButton = ({ onSwap }) => {
  return <IconButton aria-label="Swap Role" icon={<FaExchangeAlt />} onClick={onSwap} />;
};

export default RoleSwapButton;
