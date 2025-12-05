import { useState, useRef } from "react";
import bg from '../assets/bg.jpg'
import { TrashIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";

export default function CashlessForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    policyNo: "",
    relationship: "",
  });

  const steps = [1, 2, 3, 4];

  const handleNext = () => {
    if (step < steps.length) setStep(step + 1);
  };

  const requiredDocs = [
    "Aadhar Card",
    "Policy Card",
    "Doctor Consultation Note",
    "Hospital Estimate",
    "Previous Treatment Records",
  ];

  const [files, setFiles] = useState([]);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const fileInputRef = useRef(null);

  const handleDrag = (e) => e.preventDefault();
  const handleDrop = (e) => {
    e.preventDefault();
    beginUpload(e.dataTransfer.files[0]);
  };
  const handleFileSelect = (e) => beginUpload(e.target.files[0]);

  const beginUpload = (file) => {
    if (!file) return;
    setIsUploading(true);

    setTimeout(() => {
      setUploadedFile(file);
      setFiles([file]);
      setIsUploading(false);
      setIsUploaded(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
        <button onClick={onClose} className="text-2xl font-bold text-gray-600 hover:text-black">
          ✕
        </button>

        <h2 className="text-xl font-semibold">New Cashless Claim</h2>

        <button
          disabled={!formData.fullName || !formData.policyNo}
          className={`px-4 py-2 rounded-lg border text-sm 
            ${
              formData.fullName && formData.policyNo
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
        >
          Save as Default
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-1 overflow-hidden">

        {/* LEFT STEPS COLUMN */}
        <div className="mt-8 px-4 w-48 flex">
          <div className="w-12 h-64 rounded-xl flex flex-col items-center relative">
            <div className="absolute inset-0 bg-gray-200 rounded"></div>

            {[
              { id: 1, label: "Basic Details" },
              { id: 2, label: "Documents" },
              { id: 3, label: "Review" },
              { id: 4, label: "Submit" },
            ].map((s) => (
              <div key={s.id} className="relative z-10 flex items-center h-16">
                <div
                  className={`
                    w-10 h-10 flex items-center justify-center rounded-xl border-2 text-sm font-bold mx-auto
                    ${
                      step === s.id
                        ? "bg-black text-white border-black"
                        : "text-gray-600 bg-gray-100 border-gray-100"
                    }
                  `}
                >
                  {s.id}
                </div>
              </div>
            ))}
          </div>

          <div className="ml-4 flex flex-col">
            {["Basic Details", "Documents", "Review", "Submit"].map((label, idx) => (
              <div key={idx} className="h-16 flex items-center">
                <span
                  className={`
                    text-sm font-bold
                    ${step === idx + 1 ? "text-black" : "text-gray-600"}
                  `}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE COLUMN */}
        <div className="flex gap-6 mt-8">

          {/* LEFT — BORDERED MAIN BOX */}
          <div className="p-8 overflow-y-auto rounded-xl border border-gray-300 w-180 h-140">

            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Policy Holder Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="border border-gray-300 px-4 py-2 rounded w-160"
                    placeholder="Enter full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Policy Number
                  </label>
                  <input
                    type="text"
                    value={formData.policyNo}
                    onChange={(e) => setFormData({ ...formData, policyNo: e.target.value })}
                    className="border border-gray-300 px-4 py-2 rounded w-160"
                    placeholder="XXX-XXXX-XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Relationship to Patient
                  </label>
                  <select
                    value={formData.relationship}
                    onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                    className="border border-gray-300 px-4 py-2 rounded w-160 text-gray-500"
                  >
                    <option value="">select relationship</option>
                    <option value="self">Self</option>
                    <option value="spouse">Spouse</option>
                    <option value="child">Child</option>
                    <option value="parent">Parent</option>
                  </select>
                </div>

                <button
                  onClick={handleNext}
                  className="flex mt-24 bg-black text-white px-6 py-2 rounded-lg w-160 justify-end"
                >
                  Continue &gt;
                </button>
              </div>
            )}

            {/* STEP 2 — LEFT ONLY */}
            {step === 2 && (
              <div className="space-y-6">

                {!isUploading ? (
                  <div
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current.click()}
                    className="border-2 border-dashed border-gray-400 rounded-lg p-10 text-center cursor-pointer bg-gray-50 flex flex-col items-center justify-center gap-4"
                  >
                    <p className="text-gray-600">Choose files or drag & drop it here</p>
                    <p className="text-gray-400 text-sm">jpeg, png and pdf upto 80mb</p>

                    <button
                      type="button"
                      className="mt-4 px-4 py-2 w-38 bg-black text-white text-sm rounded-lg flex items-center justify-center gap-2"
                    >
                      <ArrowUpTrayIcon className="w-5 h-5" />
                      Upload a File
                    </button>

                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                  </div>
                ) : (
                  <div className="border rounded-lg p-10 text-center bg-gray-50">
                    <div className="flex flex-col items-center gap-4">
                      <div className="animate-spin rounded-full h-10 w-10 border-4 border-black border-t-transparent"></div>
                      <p className="text-gray-700 font-medium">Uploading...</p>

                      <div className="w-full max-w-sm h-2 bg-gray-300 rounded overflow-hidden">
                        <div className="h-full bg-black animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                )}

                {isUploaded && (
                  <div className="space-y-4 mt-6">
                    <h4 className="font-medium text-gray-700">Document detected</h4>

                    <div className="text-sm font-bold bg-white px-3 py-4 rounded-lg border border-gray-300 flex items-center justify-between">
                      <div className="flex mx-2 items-center gap-2">
                        📄 {uploadedFile.name}
                      </div>
                      <button className="p-1 rounded hover:bg-gray-100 text-gray-500">
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                )}

                {!isUploading && !isUploaded && (
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-700 mb-2">Required Documents:</h4>
                    <div className="flex flex-wrap gap-2">
                      {requiredDocs.map((doc) => (
                        <span
                          key={doc}
                          className="px-3 py-1 border border-gray-300 text-sm bg-white text-gray-500 rounded-full"
                        >
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={handleNext}
                  className="flex mt-24 bg-black text-white px-6 py-2 rounded-lg w-160 justify-end"
                >
                  Continue &gt;
                </button>
              </div>
            )}

          </div>

          {/* RIGHT — POLICY BOX OUTSIDE */}
          {step === 2 && (
            <div className="mt-2">
              <div className="w-140 border border-gray-300 rounded-xl p-6 bg-white">

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <span className="text-sm font-semibold text-gray-800">Policy eligible</span>
                  </div>

                  <span className="text-sm text-gray-500 font-medium">
                    Policy No: 1234-56789-0001
                  </span>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Start Date → Valid Till</p>
                    <p className="text-sm text-gray-800 font-semibold mt-1">
                      10 May 2024 → 05 Jun 2025
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-medium">Sum insured</p>
                    <p className="text-sm text-gray-800 font-semibold mt-1">₹5,00,000</p>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>

      {/* FOOTER */}
      <div className="px-6 py-4 flex items-center">
        <a href="#" className="flex items-center space-x-3">
          <img src={bg} className="h-7 rounded" alt="Logo" />
          <span className="text-xl text-heading font-semibold">MeshFold</span>
        </a>
      </div>
    </div>
  );
}
