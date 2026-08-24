import styles from "../../styles/inicial.module.css";

export default function SelectedService({ selectedService, selectedTime }) {
  if (!selectedService) {
    return <p>Selecione um serviço</p>;
  }

  return (
    <div className={styles.serviceCard}>
      <p><strong>{selectedService.name}</strong></p>
      <p>{selectedService.time}</p>
      <p>{selectedService.price}</p>

      {selectedTime && <p>Horário: {selectedTime}</p>}
    </div>
  );
}