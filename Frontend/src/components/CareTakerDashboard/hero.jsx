import backgroundImage from '../assets/RCA.png';
import profileImageUrl from '../assets/default.png'

export function ProfileCard({ careTakerData }) {
  return (
    <div className="relative w-full">
      <div
        className="h-32 sm:h-23 md:h-56 bg-cover bg-center shadow-md"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      <div className="relative flex flex-row items-center md:items-start justify-center md:justify-start ml-6 sm:ml-10 mt-[-2rem] sm:mt-[-13.5rem]">
        <div className="bg-white gap-3 p-4 sm:p-6 rounded-lg shadow-lg flex flex-row items-center justify-center space-x-0 sm:space-x-6 space-y-2 sm:space-y-0">

          <img
            className="w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 object-cover border border-gray-200 shadow-lg"
            src={profileImageUrl}
            alt="Student Profile"
          />

          <div className="text-gray-800 flex flex-col gap-1 sm:gap-2">
            <div className="font-semibold text-xl sm:text-2xl">{careTakerData.name}</div>
            <p className="text-xs sm:text-sm">{"hello"}</p>
            <p className="text-xs sm:text-sm flex items-center mt-1 sm:mt-2">
              <span role="img" aria-label="Hostel">🏨</span> {careTakerData.hostel}
            </p>
            <p className="text-xs sm:text-sm flex items-center">
              <span role="img" aria-label="Complaints">👥</span> {careTakerData.numberOfComplaints} Complaints
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

