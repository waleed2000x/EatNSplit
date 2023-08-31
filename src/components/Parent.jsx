import Button from "./Button";
import Card from "./Card";

export default function Parent() {
  return (
    <div className="parent">
      <div className="mainContainer">
        <div className="title">List of Pending Orders</div>
        <Card />
        <div className="buttons">
          <Button css="add">Add</Button>
          <Button css="reset">Reset</Button>
        </div>
      </div>
    </div>
  );
}
