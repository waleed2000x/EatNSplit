import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Modal from "./Modal";

export default function Parent() {
  const [data, setData] = useState([
    {
      me: "Waleed",
      friend: "Someone",
      total: 100,
      youPaid: 0,
      hePaid: 100,
    },
  ]);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="parent">
      {showModal ? <Modal modal={showModal} setModal={setShowModal} /> : null}
      <div className="mainContainer">
        <div className="title">List of Pending Orders</div>
        <Card data={data} />
        <div className="buttons">
          <Button css="add" modal={showModal} setModal={setShowModal}>
            Add
          </Button>
          <Button modal={showModal} setModal={setShowModal} css="reset">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
