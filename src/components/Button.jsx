/* eslint-disable react/prop-types */

export default function Button({ children, css }) {
  return <button className={css}>{children}</button>;
}
