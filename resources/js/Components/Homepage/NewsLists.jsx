const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div
                key={i}
                className="card w-[18rem] rounded-none group cursor-pointer lg:w-[22rem]"
            >
                <figure className="max-w-md">
                    <img src={data.image} alt="Image" />
                </figure>
                <div className="card-body p-0 mt-5">
                    <div className="card-actions mt-0 lg:mt-2 flex justify-between">
                        <div className="badge badge-outline p-2 rounded-none text-xs">
                            {data.author}
                        </div>
                        <div className="badge badge-inline p-2 rounded-none text-xs">
                            {data.category}
                        </div>
                    </div>
                    <h2 className="card-title cursor-pointer group-hover:text-yellow-600 line-clamp-2 font-bold text-2xl mt-0 lg:mt-2">
                        {data.title}
                    </h2>
                    <p className="line-clamp-3 mt-0 lg:mt-2">
                        {data.description}
                    </p>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return <div>No news to display!</div>;
};

const NewsLists = ({ news }) => {
    return !news ? noNews() : isNews(news);
};

export default NewsLists;
