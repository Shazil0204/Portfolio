import transition from "../Components/transition";

const Offers = () => {
  const apprenticeshipOffers = [
    {
      title: "Basic",
      price: "$9.99/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      title: "Pro",
      price: "$19.99/month",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      title: "Premium",
      price: "$29.99/month",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
  ];

  return (
    <>
      <div className="text-white min-h-screen bg-gray-800">
        <div className="flex justify-center items-center h-full">
          <div className="grid lg:grid-cols-3 gap-12 container mx-2 lg:mx-auto text-center space-y-12 lg:space-y-0 rounded-lg">
            <p className="lg:col-span-3 mt-32 uppercase font-extrabold text-md lg:text-lg 2xl:text-2xl 6xl:text-6xl">
              Programming Apprenticeship Opportunities
            </p>
            <div className="text-justify p-4 rounded-2xl bg-gray-600 shadow-xl shadow-slate-900">
              <p className="mt-4 text-center font-bold underline underline-offset-4 uppercase text-emerald-500">
                Two-Week Apprenticeship
              </p>
              <p className="mt-4">
                <strong className="text-yellow-300">Duration:</strong>{" "}
                <span className="underline underline-offset-4">2 weeks</span>
              </p>
              <p className="mt-4 tracking-wide">
                <strong className="text-yellow-300">Description:</strong>{" "}
                Experience my skills and work ethic with a two-week
                apprenticeship. During this time, you'll have the opportunity to
                assess my capabilities and fit within your team. If satisfied,
                you can hire me as a student for the remainder of my studies.
              </p>
              <button className="my-4 w-full p-2 bg-gray-100 rounded-b-lg text-black shadow-lg shadow-slate-900 hover:shadow-none duration-300">
                Explore Offer
              </button>
            </div>
            <div className="text-justify p-4 rounded-2xl bg-gray-600 shadow-xl shadow-slate-900">
              <p className="mt-4 text-center font-bold underline underline-offset-4 uppercase text-emerald-500">
                Two-Week Apprenticeship
              </p>
              <p className="mt-4">
                <strong className="text-yellow-300">Duration:</strong>{" "}
                <span className="underline underline-offset-4">2 weeks</span>
              </p>
              <p className="mt-4 tracking-wide">
                <strong className="text-yellow-300">Description:</strong>{" "}
                Experience my skills and work ethic with a two-week
                apprenticeship. During this time, you'll have the opportunity to
                assess my capabilities and fit within your team. If satisfied,
                you can hire me as a student for the remainder of my studies.
              </p>
              <button className="my-4 w-full p-2 bg-gray-100 rounded-b-lg text-black shadow-lg shadow-slate-900 hover:shadow-none duration-300">
                Explore Offer
              </button>
            </div>
            <div className="text-justify p-4 rounded-2xl bg-gray-600 shadow-xl shadow-slate-900">
              <p className="mt-4 text-center font-bold underline underline-offset-4 uppercase text-emerald-500">
                Two-Week Apprenticeship
              </p>
              <p className="mt-4">
                <strong className="text-yellow-300">Duration:</strong>{" "}
                <span className="underline underline-offset-4">2 weeks</span>
              </p>
              <p className="mt-4 tracking-wide">
                <strong className="text-yellow-300">Description:</strong>{" "}
                Experience my skills and work ethic with a two-week
                apprenticeship. During this time, you'll have the opportunity to
                assess my capabilities and fit within your team. If satisfied,
                you can hire me as a student for the remainder of my studies.
              </p>
              <button className="my-4 w-full p-2 bg-gray-100 rounded-b-lg text-black shadow-lg shadow-slate-900 hover:shadow-none duration-300">
                Explore Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default transition(Offers);
