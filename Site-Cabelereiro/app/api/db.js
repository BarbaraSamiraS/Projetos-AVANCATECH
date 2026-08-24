let agendamentos = [];

export function getAgendamentos() {
  return agendamentos;
}

export function addAgendamento(data) {
  agendamentos.push(data);
}