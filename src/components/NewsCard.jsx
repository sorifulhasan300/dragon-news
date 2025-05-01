import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import moment from "moment";

const NewsCard = ({ news }) => {
  const { title, image_url, author, total_view, rating, details, tags } = news;

  return (
    <div className="card bg-base-100 shadow-xl mb-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 pb-3 px-4 py-2 bg-gray-100 rounded-t-lg">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">
              {moment(author.published_date).format("YYYY-MM-DD")}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-lg">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </div>

      <div className=" p-4">
        {/* Title */}
        <h2 className="font-bold text-xl mb-3">{title}</h2>

        {/* Image */}
        <img src={image_url} alt="News" className="w-full rounded-lg mb-4" />

        {/* Details */}
        <p className="text-gray-700 text-sm">
          {details.length > 300 ? (
            <>
              {details.slice(0, 300)}...{" "}
              <span className="text-orange-500 font-semibold cursor-pointer">
                Read More
              </span>
            </>
          ) : (
            details
          )}
        </p>

        {/* Footer: Rating & Views */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2 text-orange-400">
            {Array.from({ length: rating.number }, (_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-1 text-black font-semibold">
              {rating.number}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
