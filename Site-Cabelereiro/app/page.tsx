"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import HeroImage from "../components/illustration/HeroImage";
import ServicesGrid from "../components/services/ServicesGrid";
import Calendar from "../components/scheduling/Calendar";
import TimeSlots from "../components/scheduling/TimeSlots";
import SelectedService from "../components/scheduling/SelectedService";


export default function Home() {
  const router = useRouter();

  const [selectedService, setSelectedService] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState("2023-10-27");

  const handleContinue = () => {
    if (!selectedService || !selectedTime) {
      alert("Selecione serviço e horário");
      return;
    }

    const query = new URLSearchParams({
      service: selectedService.name,
      price: selectedService.price,
      date: selectedDate,
      time: selectedTime,
    });

    router.push(`/Registro?${query.toString()}`);
  };

  return (
    <>
      <ServicesGrid
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />

      <TimeSlots
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />

      <SelectedService
        selectedService={selectedService}
        selectedTime={selectedTime}
      />

      <button onClick={handleContinue}>
        CONTINUE
      </button>
    </>
  );
}