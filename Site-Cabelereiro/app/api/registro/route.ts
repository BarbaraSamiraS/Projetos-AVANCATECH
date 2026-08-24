import { NextResponse } from "next/server";
import { addAgendamento } from "../db";

export async function POST(req: Request) {
  const body = await req.json();

  const novoAgendamento = {
    id: Date.now(),
    ...body,
  };

  addAgendamento(novoAgendamento);

  return NextResponse.json({
    message: "Agendamento criado",
    data: novoAgendamento,
  });
}