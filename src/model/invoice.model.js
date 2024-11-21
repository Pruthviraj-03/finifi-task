import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    vendorName: {
      type: String,
      required: function () {
        return this.status !== "Vendor Not Found";
      },
      default: "-",
    },
    invoiceNumber: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: [
        "Open",
        "Awaiting Approval",
        "Approved",
        "Processing",
        "Paid",
        "Rejected",
        "Duplicate",
        "Void",
        "Vendor Not Found",
      ],
      required: true,
    },
    netAmount: {
      type: Number,
      required: true,
    },
    invoiceDate: {
      type: Date,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    department: {
      type: String,
      default: "-",
    },
    poNumber: {
      type: String,
      default: "-",
    },
    createdTime: {
      type: String,
      required: true,
    },
    createdDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Invoices =
  mongoose.models.Invoices || mongoose.model("Invoices", invoiceSchema);

export { Invoices };
