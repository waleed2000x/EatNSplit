/* eslint-disable react/prop-types */
import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";
// eslint-disable-next-line no-unused-vars
export default function Card({ data, setData }) {
  console.log(data);
  const handleDelete = (identifier) => {
    const updatedData = data.filter((item) => item !== identifier);
    setData(updatedData);
  };

  return (
    <>
      {Array.isArray(data) && data.length < 1 ? (
        <div className="cardEmpty">
          <p>Add Now!</p>
        </div>
      ) : (
        Array.isArray(data) &&
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
                <p>💰:{item.amount}</p>
                <p>Paid by:{item.whoPays}</p>
                {item.whoPays === "ME" ? (
                  <p>He owes you: {item.amount / 2 - item.hePaid}</p>
                ) : (
                  <p>You owe him:{item.amount / 2 - item.youPaid}</p>
                )}
              </div>
              <IconButton color="error" onClick={() => handleDelete(item)}>
                <CancelIcon />
              </IconButton>
            </div>
          );
        })
      )}
    </>
  );
}
