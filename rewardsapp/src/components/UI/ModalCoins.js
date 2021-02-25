import React from "react";
import {
  Button,
  Image,
  Stack,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const ModalCoins = ({ userPoints, handleAddCoins }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(!isOpen);
  return (
    <Popover>
      <PopoverTrigger>
        <Button rounded={99} height="48px" onClick={open}>
          <Text
            fontSize="xl"
            color="#616161"
            letterSpacing="-0.15px"
            lineHeight="48px"
          >
            {userPoints}
          </Text>
          <Image src="../assets/icons/coin.svg" ml={1} mt={1} />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <Text>Add Coins to your Wallet!</Text>
        </PopoverHeader>
        <PopoverBody>
          <Stack isInline align="center">
            <Button
              rounded={99}
              value="1000"
              color="#616161"
              letterSpacing="-0.15px"
              onClick={handleAddCoins}
            >
              {1000}
              <Image
                src="../assets/icons/coin.svg"
                ml={1}
                mt={1}
                width={6}
                cursor="default"
              />
            </Button>
            <Button
              rounded={99}
              value="5000"
              color="#616161"
              letterSpacing="-0.15px"
              onClick={handleAddCoins}
            >
              {5000}
              <Image
                src="../assets/icons/coin.svg"
                ml={1}
                mt={1}
                width={6}
                cursor="default"
              />
            </Button>
            <Button
              rounded={99}
              value="7500"
              color="#616161"
              letterSpacing="-0.15px"
              onClick={handleAddCoins}
            >
              {7500}
              <Image
                src="../assets/icons/coin.svg"
                ml={1}
                mt={1}
                width={6}
                cursor="default"
              />
            </Button>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ModalCoins;
