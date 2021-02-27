import React, { useState } from "react";
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
  CircularProgress,
} from "@chakra-ui/react";

const ModalCoins = ({ userPoints, handleAddCoins, loading }) => {
  const poinstToAdd = [1000, 5000, 7500];
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(!isOpen);

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          rounded={99}
          height="48px"
          isLoading={loading}
          spinner={<CircularProgress isIndeterminate color="secondary" />}
          onClick={open}
        >
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
            {poinstToAdd.map((point) => (
              <Button
                key={point}
                rounded={99}
                value={point}
                disabled={loading}
                color="#616161"
                letterSpacing="-0.15px"
                onClick={() => handleAddCoins(point)}
              >
                {point}
                <Image
                  src="../assets/icons/coin.svg"
                  ml={1}
                  mt={1}
                  width={6}
                  cursor="default"
                />
              </Button>
            ))}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ModalCoins;
