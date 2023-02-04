const NewsHighlights = () => {
    return (
        <div>
            <div className="relative flex justify-center mb-20 mobile:block mobile:flex-none mobile:mb-0">
                <div className="mx-auto max-w-6xl">
                    <img src="https://raw.githubusercontent.com/luqmanherifa/notimetonews-news-portal/main/asset/img/news_highlight.png" />
                </div>
                <div className="absolute inset-y-1/2 mobile:inset-0 mobile:static">
                    <div className="max-w-3xl bg-floral p-14 mobile:p-0">
                        <p className="font-bold font-playfair text-5xl cursor-pointer hover:text-yellow-600 mobile:text-lg">
                            ChatGPT passes exams from law and business schools
                        </p>
                        <p className="text-lg mt-7">
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
