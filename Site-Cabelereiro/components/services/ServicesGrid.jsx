import styles from "../../styles/inicial.module.css";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid({ selectedService, setSelectedService }) {
  const services = [
    { name: "Hair Cut", price: "$75", time: "45 mins" },
    { name: "Blow-dry", price: "$50", time: "30 mins" },
    { name: "Styling", price: "$85", time: "1 hr" },
    { name: "Coloring", price: "$160+", time: "2.5 hrs" }
  ];

  return (
    <div className={styles.servicesGrid}>
      {services.map((s, i) => (
        <ServiceCard
          key={i}
          service={s}
          selected={selectedService?.name === s.name}
          onSelect={setSelectedService}
        />
      ))}
    </div>
  );
}