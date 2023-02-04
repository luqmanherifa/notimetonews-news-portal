import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import Category from "@/Components/Homepage/Category";
import NewsHighlights from "@/Components/Homepage/NewsHighlights";
import NewsLists from "@/Components/Homepage/NewsLists";
import Paginator from "@/Components/Homepage/Paginator";
import Footer from "@/Components/Homepage/Footer";

export default function Homepage(props) {
    return (
        <div className="min-h-screen">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <Category />
            <div className="flex justify-start max-w-6xl mx-auto mt-10 mb-12">
                <p className="font-playfair font-bold text-5xl text-highlight transition-all duration-1000 ease-out cursor-pointer">
                    News Highlights
                </p>
            </div>
            <div className="flex justify-center max-w-7xl mx-auto">
                <NewsHighlights />
            </div>
            <hr className="border-b border-b-valhalla/30 my-16 max-w-6xl mx-auto" />
            <div className="flex justify-between mx-auto max-w-6xl mb-8">
                <div>
                    <p className="font-playfair font-bold text-5xl text-highlight transition-all duration-1000 ease-out cursor-pointer">
                        News Today
                    </p>
                </div>
                <div>
                    <Paginator meta={props.news.meta} />
                </div>
            </div>
            <div className="flex justify-center flex-row flex-wrap items-stretch p-4 max-w-7xl mx-auto gap-12">
                {/* sm:flex-col sm:items-center  */}
                <NewsLists news={props.news.data} />
            </div>
            <hr className="border-b border-b-valhalla/30 mt-16 max-w-6xl mx-auto" />
            <Footer />
        </div>
    );
}
