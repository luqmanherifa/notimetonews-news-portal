import { Link } from "@inertiajs/inertia-react";

const Navbar = ({ user }) => {
    return (
        <div>
            <div className="navbar max-w-6xl mx-auto h-24 p-0">
                <div className="flex-1">
                    <a href="">
                        <p className="text-3xl font-extrabold font-playfair hover:text-yellow-600">
                            NoTimeToNews
                        </p>
                    </a>
                </div>
                <div className="flex-none gap-2">
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
                            <div className="w-10 rounded-full">
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
