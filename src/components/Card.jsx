/* eslint-disable react/prop-types */
import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";
// eslint-disable-next-line no-unused-vars
export default function Card({ data, setData }) {
  console.log(data);
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
                  <p>He ows you: {item.me}</p>
                ) : (
                  <p>You owe him:{item.me}</p>
                )}
              </div>
              <IconButton color="error">
                <CancelIcon />
              </IconButton>
            </div>
          );
        })
      )}
    </>
  );
}
