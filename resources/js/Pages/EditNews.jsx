import React, { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";

export default function EditNews(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
            image,
        };
        Inertia.post("/news/update", data);
        setTitle("");
        setDescription("");
        setCategory("");
        setImage("");
    };

    return (
        <div className="mx-auto min-h-screen max-w-7xl">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="py-12">
                <div className="mx-auto max-w-4xl">
                    <div className="rounded-2xl border-b border-gray-200 bg-white p-6 shadow-md">
                        <p className="mb-5">
                            You're logged in. Edit your news!
                        </p>
                        <input
                            type="text"
                            placeholder="Title"
                            className="input-bordered input mb-3 block w-full"
                            onChange={(title) => setTitle(title.target.value)}
                            defaultValue={props.myNews.title}
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            className="input-bordered input mb-3 block w-full"
                            onChange={(description) =>
                                setDescription(description.target.value)
                            }
                            defaultValue={props.myNews.description}
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            className="input-bordered input mb-3 block w-full"
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                            defaultValue={props.myNews.category}
                        />
                        <input
                            type="text"
                            placeholder="Image"
                            className="input-bordered input mb-5 block w-full"
                            onChange={(image) => setImage(image.target.value)}
                            defaultValue={props.myNews.image}
                        />
                        <button
                            className="btn-primary btn w-full bg-blue-600 hover:bg-blue-700"
                            onClick={() => handleSubmit()}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
