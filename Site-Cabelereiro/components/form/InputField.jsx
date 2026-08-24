export default function InputField({ label, placeholder }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label>{label}</label>

      <input
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "20px",
          border: "1px solid #ccc",
          marginTop: "5px"
        }}
      />
    </div>
  );
}