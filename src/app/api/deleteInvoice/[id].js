import { NextResponse } from "next/server";
import dbConnect from "../../../utils/dbConnect";
import Invoice from "../../../models/Invoice";

export async function DELETE(req, { params }) {
  const { _id } = params;
  console.log("id :", id);

  await dbConnect();

  try {
    const deletedInvoice = await Invoice.findByIdAndDelete(_id);

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

export async function OPTIONS() {
  return NextResponse.json(
    { message: "Allowed methods: DELETE" },
    { status: 204 }
  );
}
