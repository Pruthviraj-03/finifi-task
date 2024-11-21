import { NextResponse } from "next/server";
import { dbConnect } from "../../../../config/dbConnect.js";
import { Invoices } from "../../../../model/invoice.model.js";

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    await dbConnect();

    const deletedInvoice = await Invoices.findByIdAndDelete(id);

    if (!deletedInvoice) {
      return NextResponse.json(
        { message: "Invoice not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Invoice deleted successfully",
        invoice: deletedInvoice,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error deleting invoice",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
