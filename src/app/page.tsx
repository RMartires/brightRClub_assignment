import { Flex } from "antd";
import Header from "./components/header";

export default function Home() {
  return (
    <Flex gap="middle" wrap="wrap">
      <Header></Header>
    </Flex>
  );
}
