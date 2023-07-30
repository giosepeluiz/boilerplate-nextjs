import { NextResponse, NextRequest } from "next/server";
import connectMongoDB from "src/lib/mongodb";
import Register from "@/models/schemas/register";

export async function POST(req: NextRequest) {
  const {
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
  } = await req.json();
  await connectMongoDB();
  await Register.create({
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
  return NextResponse.json({ message: "Registro criado!!!" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const registers = await Register.find();
  return NextResponse.json({ registers });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Register.findByIdAndDelete(id);
  return NextResponse.json({ message: "Item deletado!!!" }, { status: 200 });
}
