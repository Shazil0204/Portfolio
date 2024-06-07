import transition from "../Components/transition";
import { Link } from "react-router-dom";

const Offers = () => {
  const apprenticeshipOffers = [
    {
      title: "Two-Week Apprenticeship",
      duration: "2 weeks",
      discription:
        "Experience my skills and work ethic with a two-week apprenticeship. During this time, you'll have the opportunity to assess my capabilities and fit within your team. If satisfied, you can hire me as a student for the remainder of my studies.",
    },
    {
      title: "One-Month Apprenticeship",
      duration: "1 month",
      discription:
        "Extend the apprenticeship to one month for a deeper dive into projects and tasks. This extended period allows for a comprehensive evaluation of my skills and potential fit within your organization. If impressed, you have the option to offer me a full-time position",
    },
    {
      title: "Straight Away Hiring or Interview",
      duration: "Rest of my Education",
      discription:
        "Skip the apprenticeship period and proceed directly to hiring or interviewing. Ideal for companies with urgent talent needs or a rigorous hiring process. This option provides an immediate opportunity to assess compatibility and fit",
    },
  ];

  return (
    <>
      <div className="text-white min-h-screen bg-gray-800">
        <div className="flex justify-center items-center h-full">
          <div className="grid lg:grid-cols-3 gap-12 container mx-12 lg:mx-auto text-center space-y-12 lg:space-y-0 rounded-lg">
            <p className="lg:col-span-3 mt-32 uppercase font-extrabold text-lg 2xl:text-2xl 6xl:text-6xl">
              Programming Apprenticeship Opportunities
            </p>
            {apprenticeshipOffers.map((offer) => (
              <div className="text-justify p-4 rounded-2xl bg-gray-600 shadow-xl shadow-slate-900">
                <p className="mt-4 text-center font-bold underline underline-offset-4 uppercase text-emerald-500">
                  {offer.title}
                </p>
                <p className="mt-4">
                  <strong className="text-yellow-300">Duration:</strong>{" "}
                  <span className="underline underline-offset-4">{ offer.duration}</span>
                </p>
                <p className="mt-4 tracking-wide">
                  <strong className="text-yellow-300">Description:</strong>{" "}
                  {offer.discription}
                </p>
                
                <Link to={"/contact"}>
                  <button className="my-4 w-full p-2 text-center bg-gray-100 rounded-b-lg text-black shadow-lg shadow-slate-900 hover:shadow-none duration-300">
                    Please Contact for more details. Thanks!
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default transition(Offers);
