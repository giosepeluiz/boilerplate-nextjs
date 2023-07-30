import { Schema, model, models } from "mongoose";

const registerSchema = new Schema(
  {
    day: Number,
    month: Number,
    year: Number,
    holiday: Boolean, // Sábado ou feriado?
    dinner: Boolean, // Almoço Trabalhado?
    startTime: String, // Hora de Inicio
    endTime: String, // Hora de Saida
    totalTime: String, // Total de Horas (cálculo automàtico)
    overTime: String, // Horas excedidas (Cálculo automático)
    location: String, // Local
    reason: String, // Última obra
    team: String, // Equipe
  },
  { timestamps: true },
);

const Register = models.Register || model("Register", registerSchema);
export default Register;
