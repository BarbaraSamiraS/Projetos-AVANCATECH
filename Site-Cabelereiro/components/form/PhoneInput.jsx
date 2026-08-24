export default function PhoneInput() {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label>Phone Number</label>

      <input
        placeholder="(11) 99999-9999"
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