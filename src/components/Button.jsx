/* eslint-disable react/prop-types */

export default function Button({ children, css, setModal, modal }) {
  return (
    <button onClick={() => setModal(!modal)} className={css}>
      {children}
    </button>
  );
}
