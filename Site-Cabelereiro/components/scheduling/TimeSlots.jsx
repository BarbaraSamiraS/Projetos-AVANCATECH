import styles from "../../styles/inicial.module.css";

export default function TimeSlots({ selectedTime, setSelectedTime }) {
  const times = ["9:00", "10:00", "11:00", "14:00", "15:00"];

  return (
    <div>
      <h4>Available Slots</h4>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {times.map((t, i) => (
          <button
            key={i}
            onClick={() => setSelectedTime(t)}
            className={`${styles.timeButton} ${
              selectedTime === t ? styles.selectedTime : ""
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}