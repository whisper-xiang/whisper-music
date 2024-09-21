import { Card, Typography } from "antd";
import MainLayout from "../index"; // 假设MainLayout在index.tsx中

const { Title, Paragraph } = Typography;

function HomePage() {
  return (
    <MainLayout>
      <Card className="bg-gray-100 rounded-lg shadow-md">
        <Title level={2} className="text-3xl font-bold text-blue-600 mb-4">
          欢迎来到音乐世界
        </Title>
        <Paragraph className="text-gray-700">
          这里是您的个性化音乐推荐
        </Paragraph>
      </Card>
    </MainLayout>
  );
}

export default HomePage;
