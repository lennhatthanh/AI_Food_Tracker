import { Button } from "@/components/ui/button";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { MoveRight } from "lucide-react";
export default function LandingPage() {
    return (
        <Fragment>
            <header>
                <div className="mx-auto px-15 py-5 flex justify-between">
                    <div className="flex gap-3 items-center">
                        <img src={logo} className="w-10 h-10 rounded-md" />
                        <p className="font-bold text-lg">AI Food Tracker</p>
                    </div>
                    <div className="flex items-center gap-10">
                        <a href="" className="font-medium">
                            Features
                        </a>
                        <a href="" className="font-medium">
                            How it works
                        </a>
                        <Button className="text-black text-[16px] font-bold px-7 hover:bg-primary/90 hover:scale-105">
                            Login
                        </Button>
                    </div>
                </div>
            </header>
            <section>
                <div className="mx-auto px-15 py-20 items-center grid grid-cols-2 gap-20">
                    <div className="flex flex-col gap-5">
                        <p className="text-[12px] px-2 py-1 rounded-xl w-fit border-1 font-bold border-green-300 bg-green-100 text-green-500 flex items-center gap-1">
                            <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                            NEW: GPT-4 VISION POWERED
                        </p>
                        <p className="text-7xl font-bold">
                            Track Your <span className="text-green-500">Calories</span> with <br /> AI
                        </p>
                        <p className="text-gray-500 max-w-lg text-[18px]">
                            Upload a photo of your meal and get instant calorie and nutrition analysis. No more manual
                            logging, just snap and eat.
                        </p>
                        <div className="flex gap-5 text">
                            <Button className="px-8 py-5 text-lg font-semibold bg-primary text-black hover:scale-105">
                                Try Now
                                <MoveRight className="h-7 w-7" />
                            </Button>
                            <Button className="px-8 py-5 text-lg font-semibold bg-blue-400 hover:scale-105">Login with Google</Button>
                        </div>
                    </div>
                    <div>hello</div> 
                </div>
            </section>
        </Fragment>
    );
}
