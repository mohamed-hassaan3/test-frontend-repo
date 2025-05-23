
// TABLES DATA
export const INVOICES = [
    {
      id: "INV-001",
      customer: "John Doe",
      description: "Car servicing",
      type: "Vouchers",
      date: "2024-07-01",
      amount: "$950.00",
      assign: "Receivables",
      status: "paid",
      paymentDate: "2024-07-03",
    },
    {
      id: "INV-002",
      customer: "Jane Doe",
      description: "Spare Parts",
      type: "Sales",
      date: "2024-07-02",
      amount: "$850.00",
      assign: "Receivables",
      status: "pending",
      paymentDate: "2024-07-02",
    },
    {
      id: "INV-003",
      customer: "Jane Smith",
      description: "Car Maintenance",
      type: "Vouchers",
      date: "2024-07-03",
      amount: "$910.00",
      assign: "Receivables",
      status: "overdue",
      paymentDate: "2024-07-03",
    },
    {
      id: "INV-004",
      customer: "Charlie Davis",
      description: "Charlie Davis",
      type: "Vouchers",
      date: "2024-07-04",
      amount: "$935.00",
      assign: "Receivables",
      status: "pending",
      paymentDate: "2024-07-04",
    },
    {
      id: "INV-005",
      customer: "Charlie Davis",
      description: "Charlie Davis",
      type: "Sales",
      date: "2024-07-05",
      amount: "$935.00",
      assign: "Payables",
      status: "paid",
      paymentDate: "2024-07-05",
    },
  ];
  
  export const RECEIPTS  = [
    {
      id: "REC-001",
      customer: "John Doe",
      description: "John Doe",
      type: "Vouchers",
      date: "2024-07-01",
      amount: "$650.00",
      status: "pending",
      method: "Credit Card",
    },
    {
      id: "REC-002",
      customer: "Jane Doe",
      description: "Jane Doe",
      type: "Returns",
      date: "2024-07-02",
      amount: "$650.00",
      status: "paid",
      method: "Bank Transfer",
    },
    {
      id: "REC-003",
      customer: "Jane Smith",
      description: "Jane Smith",
      type: "Expenses",
      date: "2024-07-03",
      amount: "$650.00",
      status: "overdue",
      method: "Online Payment",
    },
    {
      id: "REC-004",
      customer: "Charlie Davis",
      description: "Charlie Davis",
      type: "Vouchers",
      date: "2024-07-04",
      amount: "$650.00",
      status: "paid",
      method: "Cash",
    },
  ];
  
  export const INVENTORY = [
    {
      id: "ITM-001",
      item: "Brake Pads",
      category: "Parts",
      stockLevel: "100",
      unitPrice: "$9.00",
      totalValue: "$900.00",
      status: "In Stock",
    },
    {
      id: "ITM-002",
      item: "Engine Oil",
      category: "Fluids",
      stockLevel: "50",
      unitPrice: "$20.00",
      totalValue: "$1,000.00",
      status: "In Stock",
    },
    {
      id: "ITM-003",
      item: "Air Filter",
      category: "Filters",
      stockLevel: "20",
      unitPrice: "$15.00",
      totalValue: "$300.00",
      status: "Out of Stock",
    },
    {
      id: "ITM-004",
      item: "Spark Plugs",
      category: "Accessories",
      stockLevel: "40",
      unitPrice: "$5.00",
      totalValue: "$200.00",
      status: "In Stock",
    },
  ];
  
  // STATCARD DATA 
  export const stats = [
    {
      title: "Outstanding Invoices",
      value: "475",
      growth: "+1.4%",
      since: "vs last day",
    },
    {
      title: "Average Collection Period",
      value: "04:14",
      growth: "+1.4%",
      since: "vs last month",
    },
    {
      title: "Gross Profit Margin",
      value: "657.8k",
      growth: "+1.4%",
      since: "vs last month",
    },
    {
      title: "Inventory Turnover",
      value: "04:14",
      growth: "+1.4%",
      since: "vs last month",
    },
    {
      title: "Online Payments",
      value: "40%",
      growth: "+1.4%",
      since: "vs last month",
    },
  ];

  // REVENUE CHART
  export const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ];
