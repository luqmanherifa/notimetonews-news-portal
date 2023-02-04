import React, { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";

export default function EditNews(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
        };
        Inertia.post("/news/update", data);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="card w-full bg-base-100 shadow-xl m-4">
                <div className="p-4 text-2xl flex justify-center items-center">
                    Edit News
                </div>
                <div className="card-body">
                    <input
                        type="text"
                        placeholder="Title"
                        className="input input-bordered w-full m-2"
                        onChange={(title) => setTitle(title.target.value)}
                        defaultValue={props.myNews.title}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        className="input input-bordered w-full m-2"
                        onChange={(description) =>
                            setDescription(description.target.value)
                        }
                        defaultValue={props.myNews.description}
                    />
                    <input
                        type="text"
                        placeholder="Category"
                        className="input input-bordered w-full m-2"
                        onChange={(category) =>
                            setCategory(category.target.value)
                        }
                        defaultValue={props.myNews.category}
                    />
                    <button
                        className="btn btn-primary m-2"
                        onClick={() => handleSubmit()}
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
}
