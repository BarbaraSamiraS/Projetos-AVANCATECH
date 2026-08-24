"use client";

import styles from "../../styles/registro.module.css";

import SplitLayout from "../../components/layout/SplitLayout";
import HeroImage from "../../components/illustration/HeroImage";
import ClientForm from "../../components/form/ClientForm";
import BookingSummary from "../../components/booking/BookingSummary";

import { useSearchParams } from "next/navigation";

export default function Registro() {
  const params = useSearchParams();

  const booking = {
    service: params.get("service"),
    price: params.get("price"),
    date: params.get("date"),
    time: params.get("time"),
  };

  return (
    <SplitLayout>
      {/* ESQUERDA */}
      <div className={styles.left}>
        <HeroImage />
      </div>

      {/* DIREITA */}
      <div className={styles.right}>
        <h1>Register & Confirm Booking</h1>

        <ClientForm booking={booking} />
        <BookingSummary booking={booking} />

        <button className={styles.button}>
          Confirm Appointment
        </button>
      </div>
    </SplitLayout>
  );
}