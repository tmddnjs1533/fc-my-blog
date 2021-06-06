import { Col, Row } from "antd";

function Footer() {
  return (
    <Row align="middle" style={{ height: 50, textAlign: "right" }}>
      <Col span={24}>
        <p>&copy; 2021 Seoungwon Kim. All rights reserved.</p>
      </Col>
    </Row>
  );
}

export default Footer;
