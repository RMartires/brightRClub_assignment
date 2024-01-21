import { Image, Input, Flex, Button, Avatar } from "antd";
import {
  LineOutlined,
  UserOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import brightclublogo from "../../../public/brightrclub-logo.png";
import Title from "antd/es/typography/Title";

function HeaderRight() {
  return (
    <Flex
      gap="small"
      align="center"
      justify="flex-end"
      vertical={false}
      style={{
        width: "50%",
      }}
    >
      <Flex align="center">
        <Button type="text">Home</Button>
        <Button type="text">Brouse Library</Button>
        <Button type="text">Blog</Button>
        <LineOutlined rotate={90} />
        <Button type="text">My Books</Button>
        <Button
          type="text"
          style={{
            height: "auto",
          }}
        >
          <Flex>
            <Flex vertical>
              <span
                style={{
                  fontSize: "10px",
                  textAlign: "right",
                }}
              >
                Next Delivery
              </span>
              <span style={{ fontSize: "13px" }}>Mon, 15 Jan</span>
            </Flex>
            <CaretDownOutlined />
          </Flex>
        </Button>
        <Avatar
          size="default"
          icon={<UserOutlined />}
          style={{
            marginRight: "100px",
            marginLeft: "5px",
          }}
          src="https://images-cdn.ubuy.co.in/634f15495e9dc442aa361173-marvel-guardians-of-the-galaxy-vol-2.jpg"
        />
      </Flex>
    </Flex>
  );
}

function HeaderLeft() {
  return (
    <Flex
      vertical={false}
      gap="large"
      justify="space-around"
      align="center"
      style={{
        width: "50%",
      }}
    >
      <Image
        width={250}
        height={50}
        src={brightclublogo.src}
        preview={false}
        style={{
          paddingLeft: "100px",
        }}
      />
      <Input
        style={{
          width: "50%",
          height: "40px",
        }}
        placeholder=" Search by author, title, age, genre..."
        variant="filled"
      />
    </Flex>
  );
}

export default function Header() {
  return (
    <Flex
      vertical={false}
      align="center"
      style={{
        width: "100%",
      }}
    >
      <HeaderLeft />
      <HeaderRight />
    </Flex>
  );
}
