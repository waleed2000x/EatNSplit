import Button from "./Button";

export default function Card({ data }) {
  return (
    <>
      {data.length < 1 ? (
        <div className="cardEmpty">
          <p>Add Now!</p>
        </div>
      ) : (
        <div className="card">
          <div className="detail">
            <h4>
              You: <span>Waleed</span>
            </h4>
            <h4>
              Friend: <span>Someone</span>
            </h4>
            <p>💰:</p>
          </div>
          <button>X</button>
        </div>
      )}
    </>
  );
}
