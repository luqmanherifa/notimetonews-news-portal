const Footer = () => {
    return (
        <div className="bg-stone-900">
            <div className="mx-auto py-10 lg:py-16 max-w-xs lg:max-w-6xl lg:flex lg:justify-between">
                <div>
                    <a href="">
                        <p className="text-3xl font-extrabold font-playfair text-yellow-400 hover:text-yellow-500">
                            NoTimeToNews
                        </p>
                    </a>
                    <div className="my-5 text-sm max-w-xs text-white font-light lg:mb-0">
                        Best news portal for you, updated every day, can be read
                        anywhere and anytime.
                    </div>
                </div>
                <div className="lg:gap-10 lg:flex">
                    <div>
                        <p className="text-white mb-2 lg:mb-5 text-sm hover:text-yellow-400 cursor-pointer">
                            Jobs
                        </p>
                        <p className="text-white mb-2 lg:mb-5 text-sm hover:text-yellow-400 cursor-pointer">
                            Sitemap
                        </p>
                        <p className="text-white mb-2 lg:mb-0 text-sm hover:text-yellow-400 cursor-pointer">
                            Newsletters
                        </p>
                    </div>
                    <div className="text-white">
                        <p className="text-white mb-2 lg:mb-5 text-sm hover:text-yellow-400 cursor-pointer">
                            About Us
                        </p>
                        <p className="text-white mb-2 lg:mb-5 text-sm hover:text-yellow-400 cursor-pointer">
                            Terms of Use
                        </p>
                        <p className="text-white mb-2 lg:mb-0 text-sm hover:text-yellow-400 cursor-pointer">
                            Privacy Policy
                        </p>
                    </div>

                    <div>
                        <p className="text-white mb-2 lg:mb-5 text-sm hover:text-yellow-400 cursor-pointer">
                            Transcripts
                        </p>
                        <p className="text-white mb-2 lg:mb-5 text-sm hover:text-yellow-400 cursor-pointer">
                            Newsource
                        </p>
                        <p className="text-white mb-0 lg:mb-0 text-sm hover:text-yellow-400 cursor-pointer">
                            Add Choices
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pb-10">
                <a href="https://github.com/luqmanherifa">
                    <p className="text-white hover:text-yellow-400 text-xs p-3">
                        © 2023 • Built by Luqman Herifa
                    </p>
                </a>
            </div>
        </div>
    );
};

export default Footer;
