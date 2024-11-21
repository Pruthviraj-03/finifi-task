import { dbConnect } from "../../../config/dbConnect.js";
import { Invoices } from "../../../model/invoice.model.js";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();

    const invoices = await Invoices.find();

    return NextResponse.json(invoices, { status: 200 });
  } catch (error) {
    console.error("Error fetching invoices:", error);

    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
