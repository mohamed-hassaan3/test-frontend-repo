import { Card, CardContent } from "@/components/ui/card";
import { useDashboard } from "@/context/DashboardContext";
import { ShoppingCart, FileText, Tag } from "lucide-react";

const FinanceCard = () => {
    // FOR API DATA
    const { error, loading, data } = useDashboard();

  const FinanceData = [
    {
      label: "Profit",
      value: "76%",
      amount: "$163.4k",
      color: "bg-blue-600",
      icon: <ShoppingCart className="w-4 h-4 text-blue-600" />,
    },
    {
      label: "Expenses",
      value: "20%",
      amount: "$163.4k",
      color: "bg-cyan-400",
      icon: <FileText className="w-4 h-4 text-cyan-400" />,
    },
    {
      label: "Assets",
      value: "4%",
      amount: "$16.4k",
      color: "bg-red-600",
      icon: <Tag className="w-4 h-4 text-red-600" />,
    },
  ];

  return (
    <Card className="min-w-fit w-auto flex flex-col justify-between">
      <CardContent className="p-4 flex flex-col justify-between h-full">

        <div className="flex justify-between">
          {FinanceData.map((item, index) => (
            <div key={index} className="text-center space-y-1">
              <div className="flex items-center justify-center gap-1 text-sm text-gray-500">
                {item.icon}
                {item.label}
              </div>
              <div className="text-xl font-bold text-gray-900">{item.value}</div>
              <div className="text-sm text-gray-500">{item.amount}</div>
            </div>
          ))}
        </div>

        <div className="flex w-full h-3 rounded-md overflow-hidden my-2">
          {FinanceData.map((item, index) => (
            <div
              key={index}
              className={`${item.color}`}
              style={{ width: item.value }}
            />
          ))}
        </div>

        <div className="flex justify-center gap-6 text-sm text-gray-500">
          {FinanceData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${item.color}`} />
              {item.label}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FinanceCard;
