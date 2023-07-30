import { NextResponse, NextRequest } from "next/server";
import connectMongoDB from "src/lib/mongodb";
import Register from "@/models/schemas/register";

export async function PUT(request: NextRequest, { params }) {
  const { id } = params;
  const {
    newDay: day,
    newMonth: month,
    newYear: year,
    newHoliday: holiday,
    newDinner: dinner,
    newStartTime: startTime,
    newEndTime: endTime,
    newTotalTime: totalTime,
    newOverTime: overTime,
    newLocation: location,
    newReason: reason,
    newTeam: team,
  } = await request.json();
  await connectMongoDB();
  await Register.findByIdAndUpdate(id, {
    day,
    month,
    year,
    holiday,
    dinner,
    startTime,
    endTime,
    totalTime,
    overTime,
    location,
    reason,
    team,
  });
  return NextResponse.json({ message: "Registro atualizado!!!" }, { status: 200 });
}

export async function GET(request: NextRequest, { params }) {
  const { id } = params;
  await connectMongoDB();
  const register = await Register.findOne({ _id: id });
  return NextResponse.json(register, { status: 200 });
}
