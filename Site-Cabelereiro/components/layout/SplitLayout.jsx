export default function SplitLayout({ children }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      minHeight: "100vh",
      background: "#eae5df"
    }}>
      {children}
    </div>
  );
}