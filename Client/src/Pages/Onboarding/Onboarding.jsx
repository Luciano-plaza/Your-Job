import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <Card className="text-center">
      <Card.Header>Hello New User!</Card.Header>
      <Card.Body>
        <Card.Title>Please choose one of the options below</Card.Title>
        <Card.Text>
          We would like to know what use you will be giving this page
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            navigate("/register/user");
          }}
        >
          User
        </Button>
        <br />
        <br />
        <Button
          variant="primary"
          onClick={() => {
            navigate("/register/company");
          }}
        >
          Company
        </Button>
      </Card.Body>
    </Card>
  );
}
