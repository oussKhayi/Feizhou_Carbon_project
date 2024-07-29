import { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(
        `http://localhost:3001/carbon?url=${encodeURIComponent(inputValue)}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      setLoading(false);

      if (result.error) {
        setError(`Error: ${result.error.message}`);
        setData(null);
      } else {
        setData(result);
      }
    } catch (error) {
      setLoading(false);
      setError(`Error: ${error.message}`);
      setData(null);
    }
  };

  return (
    <>
      <div
        id="inputs"
        className="flex flex-col lg:flex-row mt-8 gap-y-2 w-full px-8 md:px-0 sm:min-w-[45vw] md:w-[35dvw]"
      >
        <input
          type="text"
          placeholder="Enter your website"
          className="w-full text-base py-3 px-4 border-none focus:outline-none"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            handleSearch();
            setShowModal(true);
          }}
          className="w-full py-3 text-white bg-[#5656a6] rounded-3xl lg:rounded-s-none lg:w-fit text-nowrap px-8 font-semibold"
        >
          Get your results
        </button>
      </div>

      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* Content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* Body */}
                <div className="relative p-6 flex-auto">
                  {loading ? (
                    <div className="flex items-center justify-center h-full">
                      <svg
                        className="animate-spin h-8 w-8 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4m0 4v4m0-4v4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  ) : error ? (
                    <p className="text-red-500 text-lg leading-relaxed">
                      {error}
                    </p>
                  ) : data ? (
                    <div>
                      <div className="border p-6 rounded-lg shadow-lg bg-green-500 text-green-50">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                          <div className="space-y-2">
                            <h3 className="text-2xl font-bold">
                              Carbon Footprint
                            </h3>
                            <p className="text-4xl font-bold">
                              {(
                                data.statistics.co2.grid.grams +
                                data.statistics.co2.renewable.grams
                              ).toFixed(2)}{" "}
                              gCO2
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-2xl font-bold">Energy Usage</h3>
                            <p className="text-4xl font-bold">
                              {data.statistics.energy.toFixed(6)} kWh
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-2xl font-bold">Rating</h3>
                            <p className="text-4xl font-bold">{data.rating}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">
                          Detailed Statistics
                        </h2>
                        <div className="overflow-x-auto">
                          <table className="w-full table-auto border-collapse">
                            <thead>
                              <tr className="bg-gray-200">
                                <th className="px-4 py-2 text-left">Metric</th>
                                <th className="px-4 py-2 text-left">Value</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="px-4 py-2">URL</td>
                                <td className="px-4 py-2">{data.url}</td>
                              </tr>
                              <tr className="border-b">
                                <td className="px-4 py-2">
                                  Carbon Footprint (Grid)
                                </td>
                                <td className="px-4 py-2">
                                  {data.statistics.co2.grid.grams.toFixed(2)}{" "}
                                  gCO2
                                </td>
                              </tr>
                              <tr className="border-b">
                                <td className="px-4 py-2">
                                  Carbon Footprint (Renewable)
                                </td>
                                <td className="px-4 py-2">
                                  {data.statistics.co2.renewable.grams.toFixed(
                                    2
                                  )}{" "}
                                  gCO2
                                </td>
                              </tr>
                              <tr className="border-b">
                                <td className="px-4 py-2">Energy Usage</td>
                                <td className="px-4 py-2">
                                  {data.statistics.energy.toFixed(6)} kWh
                                </td>
                              </tr>
                              <tr className="border-b">
                                <td className="px-4 py-2">Cleaner Than</td>
                                <td className="px-4 py-2">
                                  {(data.cleanerThan * 100).toFixed(2)}%
                                </td>
                              </tr>
                              <tr className="border-b">
                                <td className="px-4 py-2">Rating</td>
                                <td className="px-4 py-2">{data.rating}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p>No results</p>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}

// import { useState } from "react";

// export default function Modal() {
//   const [showModal, setShowModal] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const [data, setData] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const handleSearch = async () => {
//     console.log("clicked");
//     // search with axios :
//     try {
//       setLoading(true);
//       setError("");
//       const response = await fetch(
//         `http://localhost:3001/carbon?url=${encodeURIComponent(inputValue)}`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const data = await response.json();
//       setLoading(false);
//       console.log("======================data=======================");
//       console.log(data);

//       if (data.error) {
//         setError(`Error: ${data.error.message}`);
//       } else {
//         const carbonEmissions = data.statistics.co2.total;
//         setData(`Carbon Emissions: ${carbonEmissions} gCO2`);
//       }
//     } catch (error) {
//       setLoading(false);
//       setError(`Error: ${error.message}`);
//     }
//   };
//   return (
//     <>
//       <div
//         id="inputs"
//         className="flex flex-col lg:flex-row mt-8 gap-y-2 w-full px-8 md:px-0 sm:min-w-[45vw] md:w-[35dvw]"
//       >
//         <input
//           type="text"
//           placeholder="Enter your website"
//           className="w-full text-base py-3 px-4 border-none focus:outline-none"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button
//           onClick={() => {
//             handleSearch();
//             setShowModal(true);
//           }}
//           className="w-full py-3 text-white bg-[#5656a6] rounded-3xl lg:rounded-s-none lg:w-fit text-nowrap px-8 font-semibold"
//         >
//           Get your results
//         </button>
//       </div>

//       {showModal && (
//         <>
//           <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//             <div className="relative w-auto my-6 mx-auto max-w-3xl">
//               {/* Content */}
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                 {/* Body */}
//                 <div className="relative">
//                   {loading ? (
//                     <div className="flex items-center justify-center h-full">
//                       <svg
//                         className="animate-spin h-8 w-8 text-blue-500"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M12 8v4m0 4v4m0-4v4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                         />
//                       </svg>
//                     </div>
//                   ) : (
//                     ""
//                   )}
//                   {error ? (
//                     <p className="text-red-500 text-lg leading-relaxed">
//                       {error}
//                     </p>
//                   ) : data ? (
//                     <div className="">
//                       {/* <div className="space-y-4 text-center">
//                         <h1 className="text-3xl font-bold">
//                           Website Carbon Data
//                         </h1>
//                         <p className="text-muted-foreground">
//                           Discover the environmental impact of your website and
//                           take steps to reduce its carbon footprint.
//                         </p>
//                       </div> */}
//                       <div className="mt-10">
//                         <div
//                           className="border p-6 rounded-lg shadow-lg bg-green-500 text-green-50"
//                           data-v0-t="card"
//                         >
//                           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//                             <div className="space-y-2">
//                               <h3 className="text-2xl font-bold">
//                                 Carbon Footprint
//                               </h3>
//                               <p className="text-4xl font-bold">0.5 kg CO2</p>
//                             </div>
//                             <div className="space-y-2">
//                               <h3 className="text-2xl font-bold">
//                                 Energy Usage
//                               </h3>
//                               <p className="text-4xl font-bold">1.2 kWh</p>
//                             </div>
//                             <div className="space-y-2">
//                               <h3 className="text-2xl font-bold">Rating</h3>
//                               <p className="text-4xl font-bold">A</p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="mt-10">
//                         <h2 className="text-2xl font-bold mb-4">
//                           Detailed Statistics
//                         </h2>
//                         <div className="overflow-x-auto">
//                           <table className="w-full table-auto">
//                             <thead>
//                               <tr className="bg-muted text-muted-foreground">
//                                 <th className="px-4 py-2 text-center">Metric</th>
//                                 <th className="px-4 py-2 text-center">Value</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               <tr className="border-b">
//                                 <td className="px-4 py-2">Carbon Footprint</td>
//                                 <td className="px-4 py-2">0.5 kg CO2</td>
//                               </tr>
//                               <tr className="border-b">
//                                 <td className="px-4 py-2">Energy Usage</td>
//                                 <td className="px-4 py-2">1.2 kWh</td>
//                               </tr>
//                               <tr className="border-b">
//                                 <td className="px-4 py-2">Rating</td>
//                                 <td className="px-4 py-2">A</td>
//                               </tr>
//                               <tr className="border-b">
//                                 <td className="px-4 py-2">Website Visits</td>
//                                 <td className="px-4 py-2">10,000</td>
//                               </tr>
//                               <tr className="border-b" />
//                             </tbody>
//                           </table>
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <p>No results</p>
//                   )}
//                 </div>

//                 {/* Footer */}
//                 <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
//                   <button
//                     className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Close
//                   </button>
//                   {/* <button
//                     className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Save Changes
//                   </button> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//         </>
//       )}
//     </>
//   );
// }
