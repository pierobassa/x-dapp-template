import {
  Box,
  Card,
  HStack,
  Image,
  VStack,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import { MdOutlineArrowOutward } from "react-icons/md";

export const InfoCard = () => {
  return (
    <Card w={"full"}>
      <Box p={3}>
        <VStack w={"full"} spacing={{ base: 2, md: 4 }}>
          <Image src="/ecology-bag-with-leaves.png" borderRadius={16} />
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            direction={{ base: "column", md: "row" }}
            alignItems={"center"}
          >
            <HStack alignSelf={{ base: "center", md: "flex-start" }}>
              <Image src="/logo.png" h={16} borderRadius={16} />
              <Text fontSize={24} fontWeight={800}>
                EcoEarn
              </Text>
            </HStack>
            <Flex
              mt={{ base: 4, md: 0 }}
              direction={{ base: "column", md: "row" }}
            >
              <Button
                rounded={"full"}
                colorScheme="primary"
                size={"md"}
                leftIcon={<MdOutlineArrowOutward />}
              >
                Build your X-Dapp
              </Button>
              <Button
                rounded={"full"}
                size={"md"}
                leftIcon={<MdOutlineArrowOutward />}
                mt={{ base: 2, md: 0 }}
                ml={{ base: 0, md: 2 }}
              >
                Github repository
              </Button>
            </Flex>
          </Flex>
        </VStack>
      </Box>
    </Card>
  );
};
