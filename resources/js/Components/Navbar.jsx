import { Link } from "@inertiajs/inertia-react";

const Navbar = ({ user }) => {
    return (
        <div>
            <div className="navbar mx-auto block h-[124px] max-w-xs p-0 pt-3 lg:flex lg:h-24 lg:max-w-6xl">
                <div className="flex flex-1 justify-center lg:block">
                    <a href="">
                        <p className="font-playfair text-3xl font-extrabold hover:text-yellow-600">
                            NoTimeToNews
                        </p>
                    </a>
                </div>
                <div className="mt-3 flex justify-between lg:mt-0 lg:flex-none lg:gap-5">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input-bordered input rounded-full bg-floral px-5"
                        />
                    </div>
                    <div className="dropdown-end dropdown">
                        <label
                            tabIndex={0}
                            className="btn-ghost btn-circle avatar btn"
                        >
                            <div className="w-10 rounded-full">
                                <img src="https://raw.githubusercontent.com/luqmanherifa/notimetonews-news-portal/main/asset/img/profile.png" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
                        >
                            {!user ? (
                                <>
                                    <li>
                                        <Link href={route("login")} as="button">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route("register")}
                                            as="button"
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link
                                            href={route("dashboard")}
                                            as="button"
                                            className="justify-between"
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
