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
            <div className="flex justify-center mx-auto max-w-xs lg:max-w-6xl">
                <NewsHighlights />
            </div>
            <hr className="border-b border-b-valhalla/30 my-8 mx-auto max-w-xs lg:max-w-6xl lg:my-12" />
            <div className=" mx-auto mb-5 max-w-xs lg:max-w-6xl lg:flex lg:justify-between lg:mb-8 lg:items-center">
                <div className="max-w-[12rem] lg:max-w-none">
                    <p className="font-playfair font-bold text-3xl text-highlight transition-all duration-1000 ease-out cursor-pointer lg:text-5xl">
                        News Today
                    </p>
                </div>
                <div className="flex justify-center mt-5 lg:flex-none lg:mt-0">
                    <Paginator meta={props.news.meta} />
                </div>
            </div>
            <div className="flex justify-center lg:flex-row flex-wrap lg:items-stretch p-4 mb-10 lg:mb-16 mx-auto gap-12 flex-col items-center max-w-xs lg:max-w-7xl lg:gap-12">
                <NewsLists news={props.news.data} />
            </div>
            <Footer />
        </div>
    );
}
