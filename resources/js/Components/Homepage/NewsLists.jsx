const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div
                key={i}
                className="group card w-[18rem] cursor-pointer rounded-none lg:w-[22rem]"
            >
                <figure className="max-w-md">
                    <img src={data.image} alt="Image" />
                </figure>
                <div className="card-body mt-5 p-0">
                    <div className="card-actions mt-0 flex justify-between lg:mt-2">
                        <div className="badge-outline badge rounded-none p-2 text-xs">
                            {data.author}
                        </div>
                        <div className="badge-inline badge rounded-none p-2 text-xs">
                            {data.category}
                        </div>
                    </div>
                    <h2 className="card-title mt-0 cursor-pointer text-2xl font-bold line-clamp-2 group-hover:text-yellow-600 lg:mt-2">
                        {data.title}
                    </h2>
                    <p className="mt-0 line-clamp-3 lg:mt-2">
                        {data.description}
                    </p>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return <div className="py-20 text-5xl font-bold">No news to display!</div>;
};

const NewsLists = ({ news }) => {
    return !news ? noNews() : isNews(news);
};

export default NewsLists;
