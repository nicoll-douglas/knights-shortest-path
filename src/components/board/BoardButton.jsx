import { IconButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight, faFlag } from "@fortawesome/free-solid-svg-icons";
import { CloseIcon } from "@chakra-ui/icons";

export default function BoardButton({
  row,
  col,
  isInPath,
  isKnight,
  isTarget,
  ...rest
}) {
  function getIcon() {
    const noPath = isKnight || isTarget;
    if (noPath)
      return (
        <FontAwesomeIcon
          size="2x"
          icon={isKnight ? faChessKnight : faFlag}
          style={{ color: "#26211c" }}
        />
      );

    if (isInPath) return <CloseIcon color={"green.600"} />;
  }

  return (
    <IconButton
      w={"full"}
      h={"full"}
      minW={"unset"}
      bg={(row + col) % 2 === 0 ? "orange.400" : "orange.100"}
      colorScheme="orange"
      borderRadius={0}
      _focusVisible={{
        boxShadow: "none",
        border: "solid 3px rgba(66, 153, 225, 0.6)",
      }}
      icon={getIcon()}
      {...rest}
    />
  );
}
