import { Flex, Avatar, Image } from "antd";
import bright_r_club from "../../../public/bright_r_club.png";
import bright_r_fb from "../../../public/bright_r_fb.png";
import bright_r_insta from "../../../public/bright_r_insta.png";
import bright_r_x from "../../../public/bright_r_x.png";

export default function Footer() {
  return (
    <Flex
      vertical
      style={{
        width: "100%",
        color: "white",
      }}
    >
      <Flex
        vertical={false}
        gap={30}
        justify="center"
        style={{
          backgroundColor: "#5862ff",
        }}
      >
        <Flex vertical>
          <h5>Get Connected</h5>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>FAQs</p>
        </Flex>
        <Flex vertical>
          <h5>Policy</h5>
          <p>Disclamer</p>
          <p>Privacy Policy</p>
          <p>Refund Policy</p>
          <p>Termes and Conditions</p>
        </Flex>
        <Flex vertical>
          <h5>Follow Us</h5>
          <Flex vertical={false}>
            <Avatar src={bright_r_x.src} size={"large"} />
            <Avatar src={bright_r_fb.src} size={"large"} />
            <Avatar src={bright_r_insta.src} size={"large"} />
          </Flex>
        </Flex>
        <Flex vertical>
          <Image preview={false} src={bright_r_club.src} width={175} />
        </Flex>
      </Flex>
      <Flex
        style={{
          textAlign: "center",
          backgroundColor: "#535cf1",
          padding: "20px",
        }}
        justify="center"
      >
        <span>@ 2024 brightR.club</span>
      </Flex>
    </Flex>
  );
}
