/* eslint-disable react/prop-types */
import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";
export default function Card({ data, setData }) {
  return (
    <>
      {data.length < 1 ? (
        <div className="cardEmpty">
          <p>Add Now!</p>
        </div>
      ) : (
        data.length < 1 &&
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
