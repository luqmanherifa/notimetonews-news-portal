import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
            image,
        };
        Inertia.post("/news", data);
        setIsNotif(true);
        setTitle("");
        setDescription("");
        setCategory("");
        setImage("");
    };

    useEffect(() => {
        if (!props.myNews) {
            Inertia.get("/news");
        }
        return;
    }, []);

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <p className="m-2">You're logged in!</p>
                        <div className="m-2">
                            {isNotif && (
                                <div className="alert alert-success shadow-lg">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="stroke-current flex-shrink-0 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>{props.flash.message}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <input
                            type="text"
                            placeholder="Title"
                            className="input input-bordered w-full m-2"
                            onChange={(title) => setTitle(title.target.value)}
                            value={title}
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            className="input input-bordered w-full m-2"
                            onChange={(description) =>
                                setDescription(description.target.value)
                            }
                            value={description}
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            className="input input-bordered w-full m-2"
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                            value={category}
                        />
                        <input
                            type="text"
                            placeholder="Image"
                            className="input input-bordered w-full m-2"
                            onChange={(image) => setImage(image.target.value)}
                            value={image}
                        />
                        <button
                            className="btn btn-primary m-2"
                            onClick={() => handleSubmit()}
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto p-4">
                    {props.myNews && props.myNews.length > 0 ? (
                        props.myNews.map((news, i) => {
                            return (
                                <div
                                    key={i}
                                    className="card w-full bg-base-100 shadow-xl m-4 mx-auto"
                                >
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {news.title}
                                        </h2>
                                        <p>{news.description}</p>
                                        <div className="badge badge-inline">
                                            {news.category}
                                        </div>
                                        <div className="max-w-xs">
                                            <img src={news.image} />
                                        </div>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">
                                                <Link
                                                    href={route("edit.news")}
                                                    method="get"
                                                    data={{ id: news.id }}
                                                    as="button"
                                                >
                                                    Edit
                                                </Link>
                                            </div>
                                            <div className="badge badge-outline">
                                                <Link
                                                    href={route("delete.news")}
                                                    method="post"
                                                    data={{ id: news.id }}
                                                    as="button"
                                                >
                                                    Delete
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="m-4">
                            <div className="alert alert-warning shadow-lg">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-current flex-shrink-0 h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        />
                                    </svg>
                                    <span>No news input!</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Authenticated>
    );
}
