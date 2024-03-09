// export default function Modal({ isOpen, onClose, children }) {
export default function Modal({ isOpen, children }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ backgroundColor: "#fff", padding: 20 }}>
        {/* <button onClick={onClose} style={{ height: "30px", width: "30px" }}> */}
        <button style={{ height: "30px", width: "30px" }}>X</button>
        {children}
      </div>
    </div>
  );
}
