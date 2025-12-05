import { useState } from "react";
import CashlessForm from "../components/CashlessForm"; // IMPORT THE COMPONENT

export default function HeaderControls() {
  const [selectedRange, setSelectedRange] = useState("last7Days");
  const [showCashlessForm, setShowCashlessForm] = useState(false);

  const getRangeText = () => {
    switch (selectedRange) {
      case "last7Days": return "18 Nov - 24 Nov";
      case "last30Days": return "26 Oct - 24 Nov";
      case "thisMonth": return "1 Nov - 24 Nov";
      default: return "Select Date";
    }
  };

  return (
    <>
      {/* MAIN HEADER UI */}
      <div className="mt-20 px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-md space-y-4 md:space-y-0">

          {/* Left side */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <select
              value={selectedRange}
              onChange={(e) => setSelectedRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2"
            >
              <option value="last7Days">Last 7 Days</option>
              <option value="last30Days">Last 30 Days</option>
              <option value="thisMonth">This Month</option>
            </select>

            <button className="border border-gray-300 rounded-lg px-3 py-2 bg-white">
              {getRangeText()}
            </button>
          </div>

          {/* Middle */}
          <div className="text-gray-500 font-medium text-center md:text-left flex-1 md:px-8 whitespace-nowrap">
            Hello Rahul, Good Morning
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <button
              className="bg-black text-white px-6 py-2 mx-2 rounded-lg"
              onClick={() => setShowCashlessForm(true)}
            >
              + Cashless
            </button>

            <button className="bg-black text-white px-6 py-2 mx-2 rounded-lg">
              + Reimbursement
            </button>
          </div>

        </div>
      </div>

      {/* FULL PAGE COMPONENT */}
      {showCashlessForm && (
        <CashlessForm onClose={() => setShowCashlessForm(false)} />
      )}
    </>
  );
}
