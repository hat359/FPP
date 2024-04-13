import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Util from "../Utils/Util";
export default function Home() {
  return (
    <div align="center" class="home">
      <h2>Quarterly Reports</h2>
      <Util />

      <div class="cards">
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Net Income</Card.Title>
                <Card.Link href="/netincome">View</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Total Revenue</Card.Title>

                <Card.Link href="/totalrevenue">View</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Total Shareholder Equity</Card.Title>

                <Card.Link href="/totalshareholderequity">View</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
