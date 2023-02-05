const NewsHighlights = () => {
    return (
        <div>
            <div className="flex justify-start mx-auto mb-5 max-w-xs lg:max-w-6xl lg:mb-12 lg:mt-10">
                <p className="font-playfair font-bold text-3xl text-highlight transition-all duration-1000 ease-out cursor-pointer lg:text-5xl">
                    News Highlights
                </p>
            </div>
            <div className="relative block flex-none mb-0 lg:mb-24 lg:flex lg:justify-center">
                <div className="mx-auto max-w-6xl mb-5 lg:mb-0">
                    <img src="https://raw.githubusercontent.com/luqmanherifa/notimetonews-news-portal/main/asset/img/news_highlight.png" />
                </div>
                <div className="inset-0 static lg:absolute lg:inset-y-1/2">
                    <div className="max-w-3xl bg-floral p-0 lg:p-14 lg:mx-auto">
                        <p className="font-bold font-playfair text-3xl cursor-pointer hover:text-yellow-600 lg:text-5xl">
                            ChatGPT passes exams from law and business schools
                        </p>
                        <p className="text-lg mt-5 lg:mt-7 line-clamp-5 lg:line-clamp-none">
                            ChatGPT is smart enough to pass prestigious
                            graduate-level exams though not with particularly
                            high marks. The powerful new AI chatbot tool
                            recently passed law exams in four courses at the
                            University of Minnesota and another exam at
                            University of Pennsylvania’s Wharton School of
                            Business, according to professors at the schools.
                            Professors at the University of Minnesota Law School
                            recently graded the tests blindly. After completing
                            95 multiple choice questions and 12 essay questions,
                            the bot performed on average at the level of a C+
                            student, achieving a low but passing grade in all
                            four courses.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsHighlights;
