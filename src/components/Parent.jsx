import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Modal from "./Modal";

export default function Parent() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  console.log(data);
  return (
    <div className="parent">
      {showModal ? (
        <Modal modal={showModal} setModal={setShowModal} setData={setData} />
      ) : null}
      <div className="mainContainer">
        <div className="title">List of Pending Orders</div>
        <Card data={data} setData={setData} />
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
