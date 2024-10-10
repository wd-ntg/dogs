

export const BlogPost = ({ date, author, comments, imageSrc, imageAlt, title, description }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 hover:border-[#46b193] duration-200 hover:border-[1px]">
        <img className="w-full" src={imageSrc} alt={imageAlt} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <button className="duration-200 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                Read More
            </button>
        </div>
    </div>
);