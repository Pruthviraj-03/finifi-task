const invoices = [
  {
    id: "1",
    vendorName: "ABC Supplies",
    invoiceNumber: "No. INV001",
    status: "Open",
    netAmount: 250000,
    invoiceDate: "2024-11-01",
    dueDate: "2024-11-15",
    department: "Sales",
    poNumber: "PO1234",
    createdTime: "10:30 AM",
    createdDate: "2024-11-01",
  },
  {
    id: "2",
    vendorName: "XYZ Corp",
    invoiceNumber: "No. INV002",
    status: "Open",
    netAmount: 350000,
    invoiceDate: "2024-11-05",
    dueDate: "2024-11-20",
    department: "Marketing",
    poNumber: "PO5678",
    createdTime: "11:00 AM",
    createdDate: "2024-11-05",
  },
  {
    id: "3",
    vendorName: "Global Tech",
    invoiceNumber: "No. INV003",
    status: "Awaiting Approval",
    netAmount: 450000,
    invoiceDate: "2024-11-07",
    dueDate: "2024-11-22",
    department: "HR",
    poNumber: "PO91011",
    createdTime: "12:30 PM",
    createdDate: "2024-11-07",
  },
  {
    id: "4",
    vendorName: "Tech Solutions",
    invoiceNumber: "No. INV004",
    status: "Awaiting Approval",
    netAmount: 500000,
    invoiceDate: "2024-11-10",
    dueDate: "2024-11-25",
    department: "Finance",
    poNumber: "PO1213",
    createdTime: "1:00 PM",
    createdDate: "2024-11-10",
  },
  {
    id: "5",
    vendorName: "Prime Enterprises",
    invoiceNumber: "No. INV005",
    status: "Approved",
    netAmount: 600000,
    invoiceDate: "2024-11-12",
    dueDate: "2024-11-27",
    department: "IT",
    poNumber: "PO1415",
    createdTime: "2:30 PM",
    createdDate: "2024-11-12",
  },
  {
    id: "6",
    vendorName: "Oceanic Group",
    invoiceNumber: "No. INV006",
    status: "Approved",
    netAmount: 700000,
    invoiceDate: "2024-11-14",
    dueDate: "2024-11-29",
    department: "Logistics",
    poNumber: "PO1617",
    createdTime: "3:00 PM",
    createdDate: "2024-11-14",
  },
  {
    id: "7",
    vendorName: "Green Energy Co.",
    invoiceNumber: "No. INV007",
    status: "Processing",
    netAmount: 800000,
    invoiceDate: "2024-11-16",
    dueDate: "2024-12-01",
    department: "Operations",
    poNumber: "PO1819",
    createdTime: "4:30 PM",
    createdDate: "2024-11-16",
  },
  {
    id: "8",
    vendorName: "Blue Sky Enterprises",
    invoiceNumber: "No. INV008",
    status: "Processing",
    netAmount: 900000,
    invoiceDate: "2024-11-18",
    dueDate: "2024-12-03",
    department: "Research",
    poNumber: "PO2021",
    createdTime: "5:00 PM",
    createdDate: "2024-11-18",
  },
  {
    id: "9",
    vendorName: "Red Brick Supplies",
    invoiceNumber: "No. INV009",
    status: "Paid",
    netAmount: 1000000,
    invoiceDate: "2024-11-20",
    dueDate: "2024-12-05",
    department: "Sales",
    poNumber: "PO2223",
    createdTime: "6:00 PM",
    createdDate: "2024-11-20",
  },
  {
    id: "10",
    vendorName: "Sunrise Technologies",
    invoiceNumber: "No. INV010",
    status: "Paid",
    netAmount: 1100000,
    invoiceDate: "2024-11-22",
    dueDate: "2024-12-07",
    department: "Marketing",
    poNumber: "PO2425",
    createdTime: "7:30 PM",
    createdDate: "2024-11-22",
  },
  {
    id: "11",
    vendorName: "TechnoX Solutions",
    invoiceNumber: "No. INV011",
    status: "Rejected",
    netAmount: 1200000,
    invoiceDate: "2024-11-25",
    dueDate: "2024-12-10",
    department: "HR",
    poNumber: "PO2627",
    createdTime: "8:00 PM",
    createdDate: "2024-11-25",
  },
  {
    id: "12",
    vendorName: "Future Innovators",
    invoiceNumber: "No. INV012",
    status: "Rejected",
    netAmount: 1300000,
    invoiceDate: "2024-11-27",
    dueDate: "2024-12-12",
    department: "Finance",
    poNumber: "PO2829",
    createdTime: "9:00 PM",
    createdDate: "2024-11-27",
  },
  {
    id: "13",
    vendorName: "-",
    invoiceNumber: "No. INV013",
    status: "Vendor Not Found",
    netAmount: 1400000,
    invoiceDate: "2024-11-30",
    dueDate: "2024-12-15",
    department: "-",
    poNumber: "-",
    createdTime: "10:30 PM",
    createdDate: "2024-11-30",
  },
  {
    id: "14",
    vendorName: "-",
    invoiceNumber: "No. INV014",
    status: "Vendor Not Found",
    netAmount: 1500000,
    invoiceDate: "2024-12-02",
    dueDate: "2024-12-17",
    department: "-",
    poNumber: "-",
    createdTime: "11:00 PM",
    createdDate: "2024-12-02",
  },
  {
    id: "15",
    vendorName: "Pacific Enterprises",
    invoiceNumber: "No. INV015",
    status: "Duplicate",
    netAmount: 1600000,
    invoiceDate: "2024-12-05",
    dueDate: "2024-12-20",
    department: "Operations",
    poNumber: "PO3435",
    createdTime: "12:00 AM",
    createdDate: "2024-12-05",
  },
  {
    id: "16",
    vendorName: "Quantum Labs",
    invoiceNumber: "No. INV016",
    status: "Duplicate",
    netAmount: 1700000,
    invoiceDate: "2024-12-07",
    dueDate: "2024-12-22",
    department: "Research",
    poNumber: "PO3637",
    createdTime: "1:00 AM",
    createdDate: "2024-12-07",
  },
  {
    id: "17",
    vendorName: "Nova Enterprises",
    invoiceNumber: "No. INV017",
    status: "Void",
    netAmount: 1800000,
    invoiceDate: "2024-12-10",
    dueDate: "2024-12-25",
    department: "Sales",
    poNumber: "PO3839",
    createdTime: "2:00 AM",
    createdDate: "2024-12-10",
  },
  {
    id: "18",
    vendorName: "Galaxy Innovations",
    invoiceNumber: "No. INV018",
    status: "Void",
    netAmount: 2000000,
    invoiceDate: "2024-12-12",
    dueDate: "2024-12-27",
    department: "Marketing",
    poNumber: "PO4041",
    createdTime: "3:00 AM",
    createdDate: "2024-12-08",
  },
];

export { invoices };