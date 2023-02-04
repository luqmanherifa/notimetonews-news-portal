const Footer = () => {
    return (
        <div className="bg-stone-900">
            <div className="flex mx-auto max-w-6xl  justify-between py-24">
                <div>
                    <a href="">
                        <p className="text-3xl font-bold font-playfair text-yellow-400 hover:text-yellow-500">
                            NoTimeToNews
                        </p>
                    </a>
                    <div className="mt-5 text-sm max-w-xs text-white font-light">
                        Best news portal for you, updated every day, can be read
                        anywhere and anytime.
                    </div>
                </div>
                <div className="flex gap-10">
                    <div>
                        <p className="text-white mb-5 text-sm hover:text-yellow-400 cursor-pointer">
                            Jobs
                        </p>
                        <p className="text-white mb-5 text-sm hover:text-yellow-400 cursor-pointer">
                            Sitemap
                        </p>
                        <p className="text-white text-sm hover:text-yellow-400 cursor-pointer">
                            Newsletters
                        </p>
                    </div>
                    <div className="text-white">
                        <p className="text-white mb-5 text-sm hover:text-yellow-400 cursor-pointer">
                            About Us
                        </p>
                        <p className="text-white mb-5 text-sm hover:text-yellow-400 cursor-pointer">
                            Terms of Use
                        </p>
                        <p className="text-white text-sm hover:text-yellow-400 cursor-pointer">
                            Privacy Policy
                        </p>
                    </div>

                    <div>
                        <p className="text-white mb-5 text-sm hover:text-yellow-400 cursor-pointer">
                            Transcripts
                        </p>
                        <p className="text-white mb-5 text-sm hover:text-yellow-400 cursor-pointer">
                            Newsource
                        </p>
                        <p className="text-white text-sm hover:text-yellow-400 cursor-pointer">
                            Add Choices
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pb-10">
                <a href="https://github.com/luqmanherifa">
                    <p className="text-white hover:text-yellow-400 text-xs">
                        © 2023 • Built by Luqman Herifa
                    </p>
                </a>
            </div>
        </div>
    );
};

export default Footer;
