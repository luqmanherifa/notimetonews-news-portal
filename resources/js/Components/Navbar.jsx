import { Link } from "@inertiajs/inertia-react";

const Navbar = ({ user }) => {
    return (
        <div>
            <div className="navbar mx-auto h-[124px] p-0 pt-3 max-w-xs lg:max-w-6xl block lg:flex lg:h-24">
                <div className="flex-1 flex justify-center lg:block">
                    <a href="">
                        <p className="text-3xl font-extrabold font-playfair hover:text-yellow-600">
                            NoTimeToNews
                        </p>
                    </a>
                </div>
                <div className="flex justify-between lg:flex-none mt-3 lg:gap-5 lg:mt-0">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered bg-floral rounded-full px-5"
                        />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="rounded-full w-10">
                                <img src="https://raw.githubusercontent.com/luqmanherifa/notimetonews-news-portal/main/asset/img/profile.png" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
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
