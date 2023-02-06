const Footer = () => {
    return (
        <div className="bg-stone-900">
            <div className="mx-auto max-w-xs py-10 lg:flex lg:max-w-6xl lg:justify-between lg:py-16">
                <div>
                    <a href="">
                        <p className="font-playfair text-3xl font-extrabold text-yellow-400 hover:text-yellow-500">
                            NoTimeToNews
                        </p>
                    </a>
                    <div className="my-5 max-w-xs text-sm font-light text-white lg:mb-0">
                        Best news portal for you, updated every day, can be read
                        anywhere and anytime.
                    </div>
                </div>
                <div className="lg:flex lg:gap-10">
                    <div>
                        <p className="mb-2 cursor-pointer text-sm text-white hover:text-yellow-400 lg:mb-5">
                            Jobs
                        </p>
                        <p className="mb-2 cursor-pointer text-sm text-white hover:text-yellow-400 lg:mb-5">
                            Sitemap
                        </p>
                        <p className="mb-2 cursor-pointer text-sm text-white hover:text-yellow-400 lg:mb-0">
                            Newsletters
                        </p>
                    </div>
                    <div className="text-white">
                        <p className="mb-2 cursor-pointer text-sm text-white hover:text-yellow-400 lg:mb-5">
                            About Us
                        </p>
                        <p className="mb-2 cursor-pointer text-sm text-white hover:text-yellow-400 lg:mb-5">
                            Terms of Use
                        </p>
                        <p className="mb-2 cursor-pointer text-sm text-white hover:text-yellow-400 lg:mb-0">
                            Privacy Policy
                        </p>
                    </div>

                    <div>
                        <p className="mb-2 cursor-pointer text-sm text-white hover:text-yellow-400 lg:mb-5">
                            Transcripts
                        </p>
                        <p className="mb-2 cursor-pointer text-sm text-white hover:text-yellow-400 lg:mb-5">
                            Newsource
                        </p>
                        <p className="mb-0 cursor-pointer text-sm text-white hover:text-yellow-400 lg:mb-0">
                            Add Choices
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pb-10">
                <a href="https://github.com/luqmanherifa">
                    <p className="p-3 text-xs text-white hover:text-yellow-400">
                        © 2023 • Built by Luqman Herifa
                    </p>
                </a>
            </div>
        </div>
    );
};

export default Footer;
