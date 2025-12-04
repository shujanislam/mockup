export default function StatsCards() {
  // Example data for the 5 cards
  const cards = [
    { title: "Approved", number: 32 },
    { title: "Action pending", number: 8 },
    { title: "In Progress", number: 9 },
    { title: "Draft", number: 9 },
    { title: "Rejected", number: 12 },
  ];

  return (
    <div className="mt-8 px-6 md:px-12">
      <div className="px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white p-4 flex flex-col justify-center ${
              index < cards.length - 1 ? "border-r border-gray-200" : ""
            }`}
          >
            <div className="px-4 text-gray-500 text-sm font-medium">{card.title}</div>
            <div className="px-4 text-2xl font-bold mt-2">{card.number}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
