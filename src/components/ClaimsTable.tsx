import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function ClaimsTable() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [claimFilter, setClaimFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const dummyData = [
    {
      id: "CL001",
      status: "Success",
      policyHolder: "John Doe",
      phone: "9876543210",
      policyNo: "P1001",
      company: "HDFC Ergo",
      updatedOn: "05 Dec",
      amount: "$2500",
    },
    {
      id: "CL002",
      status: "Pending",
      policyHolder: "Jane Smith",
      phone: "9123456780",
      policyNo: "P1002",
      company: "ICICI Lombard",
      updatedOn: "04 Dec",
      amount: "$1800",
    },
    {
      id: "CL003",
      status: "Rejected",
      policyHolder: "Alice Johnson",
      phone: "9988776655",
      policyNo: "P1003",
      company: "Care Health",
      updatedOn: "03 Dec",
      amount: "$1200",
    },
    {
      id: "CL004",
      status: "Success",
      policyHolder: "Bob Brown",
      phone: "9090909090",
      policyNo: "P1004",
      company: "Star Health",
      updatedOn: "02 Dec",
      amount: "$3000",
    },
    {
      id: "CL005",
      status: "Pending",
      policyHolder: "Charlie White",
      phone: "9822334455",
      policyNo: "P1005",
      company: "Reliance Health",
      updatedOn: "01 Dec",
      amount: "$2200",
    },
    {
      id: "CL006",
      status: "Success",
      policyHolder: "David Lee",
      phone: "9753108642",
      policyNo: "P1006",
      company: "Niva Bupa",
      updatedOn: "30 Nov",
      amount: "$4000",
    },
    {
      id: "CL007",
      status: "Rejected",
      policyHolder: "Eva Green",
      phone: "9911223344",
      policyNo: "P1007",
      company: "Aditya Birla",
      updatedOn: "29 Nov",
      amount: "$1500",
    },
    {
      id: "CL008",
      status: "Pending",
      policyHolder: "Frank Moore",
      phone: "9001122334",
      policyNo: "P1008",
      company: "Max Bupa",
      updatedOn: "28 Nov",
      amount: "$2700",
    },
    {
      id: "CL009",
      status: "Success",
      policyHolder: "Grace Kim",
      phone: "9812345678",
      policyNo: "P1009",
      company: "Tata AIG",
      updatedOn: "27 Nov",
      amount: "$3200",
    },
    {
      id: "CL010",
      status: "Rejected",
      policyHolder: "Hank White",
      phone: "9033445566",
      policyNo: "P1010",
      company: "SBI Health",
      updatedOn: "26 Nov",
      amount: "$1100",
    },
  ];

  const totalPages = Math.ceil(dummyData.length / itemsPerPage);
  const currentData = dummyData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const statusColor = (status: any) => {
    switch (status) {
      case "Success":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="mt-8 px-4 md:px-16">
      {/* Filters and Export */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 space-y-4 md:space-y-0">
        {/* Left: Search + Filters */}
        <div className="flex items-center space-x-4 flex-1">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 w-90 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">Status: All</option>
            <option value="Success">Success</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
          <select
            value={claimFilter}
            onChange={(e) => setClaimFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">Claim type: All</option>
            <option value="Cashless">Cashless</option>
            <option value="Reimbursement">Reimbursement</option>
          </select>
        </div>

        {/* Right: Export button */}
        <button className="flex items-center bg-white text-black px-4 py-2 rounded-lg border border-gray-300">
          <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
          Export
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-white border-b border-gray-200">
            <tr>
              <th className="py-4 px-4 text-left text-sm font-medium text-gray-500">
                Claim ID
              </th>
              <th className="py-4 px-4 text-left text-sm font-medium text-gray-500">
                Status
              </th>
              <th className="py-4 px-4 text-left text-sm font-medium text-gray-500">
                Policy Holder Name
              </th>
              <th className="py-4 px-4 text-left text-sm font-medium text-gray-500">
                Policy No.
              </th>
              <th className="py-4 px-4 text-left text-sm font-medium text-gray-500">
                Updated On
              </th>
              <th className="py-4 px-4 text-left text-sm font-medium text-gray-500">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr key={item.id} className="border-b border-gray-200">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
                {/* Policy Holder + Phone */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{item.policyHolder}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 text-sm">{item.phone}</span>
                  </div>
                </td>

                {/* Policy No + Company */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{item.policyNo}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 text-sm">
                      {item.company}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4">{item.updatedOn}</td>
                <td className="py-4 px-4">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        {/* Left: Showing items */}
        <div className="text-gray-600 text-sm">
          {currentData.length} of {dummyData.length}
        </div>

        {/* Right: Pagination buttons with page numbers */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded hover:bg-gray-100 disabled:opacity-50"
          >
            &lt; Previous
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1
                  ? "bg-white text-black border-gray-300"
                  : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded hover:bg-gray-100 disabled:opacity-50"
          >
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
