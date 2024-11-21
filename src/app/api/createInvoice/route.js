import { dbConnect } from "../../../config/dbConnect.js";
import { Invoices } from "../../../model/invoice.model.js";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();

    const {
      vendorName,
      invoiceNumber,
      status,
      netAmount,
      invoiceDate,
      dueDate,
      department,
      poNumber,
      createdTime,
      createdDate,
    } = await req.json();

    if (
      !vendorName ||
      !invoiceNumber ||
      !netAmount ||
      !invoiceDate ||
      !dueDate ||
      !department ||
      !poNumber
    ) {
      return NextResponse.json(
        { message: "All required fields must be provided" },
        { status: 400 }
      );
    }

    const newInvoice = new Invoices({
      vendorName,
      invoiceNumber,
      status,
      netAmount,
      invoiceDate,
      dueDate,
      department,
      poNumber,
      createdTime,
      createdDate,
    });

    await newInvoice.save();

    return NextResponse.json(
      { message: "Invoice created successfully", invoice: newInvoice },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating invoice:", error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
