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
            <div className="mx-auto flex max-w-xs justify-center lg:max-w-6xl">
                <NewsHighlights />
            </div>
            <hr className="my-8 mx-auto max-w-xs border-b border-b-valhalla/30 lg:my-12 lg:max-w-6xl" />
            <div className=" mx-auto mb-5 max-w-xs lg:mb-8 lg:flex lg:max-w-6xl lg:items-center lg:justify-between">
                <div className="max-w-[12rem] lg:max-w-none">
                    <p className="text-highlight cursor-pointer font-playfair text-3xl font-bold transition-all duration-1000 ease-out lg:text-5xl">
                        News Today
                    </p>
                </div>
                <div className="mt-5 flex justify-center lg:mt-0 lg:flex-none">
                    <Paginator meta={props.news.meta} />
                </div>
            </div>
            <div className="mx-auto mb-10 flex max-w-xs flex-col flex-wrap items-center justify-center gap-12 p-4 lg:mb-16 lg:max-w-7xl lg:flex-row lg:items-stretch lg:gap-12">
                <NewsLists news={props.news.data} />
            </div>
            <Footer />
        </div>
    );
}
