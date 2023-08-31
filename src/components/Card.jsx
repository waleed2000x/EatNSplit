/* eslint-disable react/prop-types */
import Button from "./Button";

export default function Card({ data, setData }) {
  return (
    <>
      {data.length < 1 ? (
        <div className="cardEmpty">
          <p>Add Now!</p>
        </div>
      ) : (
        data.map((item) => {
          return (
            <div className="card" key={item.me}>
              <div className="detail">
                <h4>
                  You: <span>{item.me}</span>
                </h4>
                <h4>
                  Friend: <span>{item.friend}</span>
                </h4>
                <p>💰:</p>
              </div>
              <button>X</button>
            </div>
          );
        })
      )}
    </>
  );
}
