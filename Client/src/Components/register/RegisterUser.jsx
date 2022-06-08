import Card from "react-bootstrap/Card";

export default function RegisterUser() {
  return (
    <Card body className="text-center">
      <form>
        <div>
          Please fill out this information form to complete your profile
        </div>
        <div>
          Name: <input />
        </div>
        <div>
          Surname: <input />
        </div>
        <div>
          Age: <input type={"number"} />
        </div>
        <div>
          Image Url: <input />
        </div>
        <div>
          Image Url: <input />
        </div>
      </form>
    </Card>
  );
}
