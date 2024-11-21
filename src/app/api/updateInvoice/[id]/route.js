import { NextResponse } from "next/server";
import { dbConnect } from "../../../../config/dbConnect.js";
import { Invoices } from "../../../../model/invoice.model.js";

export async function PUT(req, { params }) {
  const { id } = params;

  try {
    await dbConnect();

    const invoiceData = await req.json();

    const updatedInvoice = await Invoices.findByIdAndUpdate(id, invoiceData, {
      new: true,
      runValidators: true,
    });

    if (!updatedInvoice) {
      return NextResponse.json(
        { message: "Invoice not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Invoice updated successfully",
        invoice: updatedInvoice,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error updating invoice",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
