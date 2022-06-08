import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Onboarding() {
  return (
    <Card className="text-center">
      <Card.Header>Hello New User!</Card.Header>
      <Card.Body>
        <Card.Title>Please choose one of the options below</Card.Title>
        <Card.Text>
          We would like to know what use you will be giving this page
        </Card.Text>
        <Button variant="primary">Employee</Button>
        <br />
        <br />
        <Button variant="primary">Company</Button>
      </Card.Body>
    </Card>
  );
}
