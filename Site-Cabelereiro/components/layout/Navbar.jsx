export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 40px",
      borderRadius: "20px",
      background: "#f5f2ee",
      marginBottom: "20px"
    }}>
      <h2>LS Luminous Salon</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <span>Overview</span>
        <span>About</span>
        <span>Shop</span>
        <span>Contact</span>
      </div>
    </div>
  );
}