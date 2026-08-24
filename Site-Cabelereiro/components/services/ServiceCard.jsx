import styles from "../../styles/inicial.module.css";

export default function ServiceCard({ service, selected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(service)}
      className={`${styles.serviceCard} ${
        selected ? styles.selectedService : ""
      }`}
    >
      <h3>{service.name}</h3>
      <p>{service.time}</p>
      <strong>{service.price}</strong>
    </div>
  );
}