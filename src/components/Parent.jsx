import Button from "./Button";

export default function Parent() {
  return (
    <div className="parent">
      <div className="mainContainer">
        <div className="title">List of Pending Orders</div>
        <div className="card">
          <div className="detail">
            <h4>You: </h4>
            <h4>Friend: </h4>
          </div>
          <button>X</button>
        </div>
        <div className="buttons">
          <Button css="add">Add</Button>
          <Button css="reset">Reset</Button>
        </div>
      </div>
    </div>
  );
}
