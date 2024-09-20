import { Box, Heading, Text } from "@chakra-ui/react";

function HomePage() {
  return (
    <Box p={4} className="bg-gray-100 rounded-lg shadow-md">
      <Heading mb={4} className="text-3xl font-bold text-blue-600">
        欢迎来到音乐世界
      </Heading>
      <Text className="text-gray-700">这里是您的个性化音乐推荐</Text>
    </Box>
  );
}

export default HomePage;
