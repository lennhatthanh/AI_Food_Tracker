import { Button } from "@/components/ui/button";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.png";
import { motion } from "framer-motion";
import { ArrowUp, CameraIcon, ChartLine, ChartSpline, File, Flame, LogOut, SquareChartGantt, Zap } from "lucide-react";
export default function LandingPage() {
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0 },
    };
    return (
        <Fragment>
            <a
                href="#hero"
                className="w-fit fixed p-5 bg-primary bottom-5 right-5 z-60 animate-bounce rounded-full cursor-pointer"
            >
                <ArrowUp className="font-bold w-5 h-5" />
            </a>
            <header className="fixed w-full z-50 bg-green-100">
                <div className="mx-auto px-15 py-5 flex justify-between shadow-primary/20 shadow-2xl">
                    <div className="flex gap-3 items-center">
                        <img src={logo} className="w-10 h-10 rounded-md" />
                        <p className="font-bold text-lg">AI Food Tracker</p>
                    </div>
                    <div className="flex items-center gap-10">
                        <a href="#features" className="font-medium">
                            Features
                        </a>
                        <a href="#works" className="font-medium">
                            How it works
                        </a>
                        <Button className="text-black text-[16px] font-bold px-7 hover:bg-primary/90 hover:scale-105">
                            Login
                        </Button>
                    </div>
                </div>
            </header>
            <section
                id="hero"
                className="mx-auto px-15 pb-20 pt-30 items-center md:grid md:grid-cols-2 gap-10 flex flex-col"
            >
                <motion.div
                    className="flex flex-col gap-5"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
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
                        </Button>
                        <Button className="px-8 py-5 text-lg font-semibold bg-white border-2 border-border text-black hover:scale-105">
                            <LogOut className="w-7 h-7" />
                            Login with Google
                        </Button>
                    </div>
                </motion.div>
                <div className="w-full relative">
                    <div className="absolute inset-0 bg-green-500/30 blur-3xl rounded-3xl"></div>
                    <div className="bg-white border-green-100 border-1 backdrop-blur-xl rounded-3xl w-full h-full">
                        <div className="p-5">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                src={hero}
                                alt=""
                                className="rounded-xl"
                            />
                        </div>
                    </div>
                    <div className="absolute bottom-10 -left-10 flex gap-2 bg-white rounded-lg p-2 items-center animate-bounce">
                        <div className="p-2 bg-primary/50 rounded-lg">
                            <Zap />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-400">ANALYSIS</p>
                            <p className="font-extrabold">450 Calories</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="features" className="mx-auto px-15 py-20 items-center gap-2 flex flex-col">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-5xl font-bold"
                >
                    Powerful Features
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-lg text-gray-600 font max-w-2xl text-center"
                >
                    Everything you need to maintain a healthy lifestyle with the power of AI at your fingertips.
                </motion.p>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-3 gap-10 relative mt-20"
                >
                    <div className="absolute bg-primary/20 blur-3xl inset-0 rounded-3xl"></div>
                    <motion.div
                        variants={item}
                        transition={{ duration: 0.6 }}
                        className="border-1 bg-white z-1 border-border/30 flex flex-col p-8 rounded-lg gap-4"
                    >
                        <div className="p-3 rounded-xl bg-primary/20 w-fit">
                            <CameraIcon className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-bold text-2xl">AI Food Recognition</h4>
                        <p className="font-stretch-extra-condensed">
                            Simply upload a photo and our advanced AI instantly detects dishes, ingredients, and portion
                            sizes with high accuracy.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={item}
                        transition={{ duration: 0.6 }}
                        className="border-1 bg-white z-1 border-border/30 flex flex-col p-8 rounded-lg gap-4"
                    >
                        <div className="p-3 rounded-xl bg-primary/20 w-fit">
                            <SquareChartGantt className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-bold text-2xl">Nutrition Tracking</h4>
                        <p className="font-stretch-extra-condensed">
                            Go beyond calories. Automatically track your macros (carbs, protein, fats), vitamins, and
                            minerals from every meal you snap.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={item}
                        transition={{ duration: 0.6 }}
                        className="border-1 bg-white z-1 border-border/30 flex flex-col p-8 rounded-lg gap-4"
                    >
                        <div className="p-3 rounded-xl bg-primary/20 w-fit">
                            <ChartLine className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-bold text-2xl">Daily Insights</h4>
                        <p className="font-stretch-extra-condensed">
                            Visualize your health journey with detailed charts and personalized nutrition reports
                            generated daily by AI.
                        </p>
                    </motion.div>
                </motion.div>
            </section>
            <section id="works" className="mx-auto px-15 py-20 flex flex-col items-center gap-2">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-5xl font-bold"
                >
                    How It Works
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-lg text-gray-600 max-w-2xl text-center"
                >
                    Three simple steps to better health
                </motion.p>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-3 gap-20 relative mt-20"
                >
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="border border-primary/50 w-full absolute top-9 origin-left"
                    />
                    <motion.div variants={item} className="flex flex-col items-center gap-4">
                        <motion.div whileHover={{ scale: 1.1 }} className="p-5 rounded-full bg-green-200 z-10">
                            <File className="w-7 h-7 text-primary" />
                        </motion.div>

                        <h1 className="font-bold text-xl">Upload food image</h1>
                        <p className="text-center">Take a quick snap of your plate before you eat</p>
                    </motion.div>
                    <motion.div variants={item} className="flex flex-col items-center gap-4">
                        <motion.div whileHover={{ scale: 1.1 }} className="p-5 rounded-full bg-green-200 z-10">
                            <ChartSpline className="w-7 h-7 text-primary" />
                        </motion.div>

                        <h1 className="font-bold text-xl">AI analyzes meal</h1>
                        <p className="text-center">Our neural network identifies every single ingredient</p>
                    </motion.div>
                    <motion.div variants={item} className="flex flex-col items-center gap-4">
                        <motion.div whileHover={{ scale: 1.1 }} className="p-5 rounded-full bg-green-200 z-10">
                            <Flame className="w-7 h-7 text-primary" />
                        </motion.div>

                        <h1 className="font-bold text-xl">See calories instantly</h1>
                        <p className="text-center">Get a full nutritional breakdown in mere seconds</p>
                    </motion.div>
                </motion.div>
            </section>
            <section id="features" className="mx-auto px-15 py-20 items-center gap-2 flex flex-col">
                <div className="bg-primary/50 border-primary/10 border-1 rounded-xl p-12 flex flex-col items-center gap-10 text-center">
                    <motion.h1
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-6xl font-extrabold max-w-5xl"
                    >
                        Start tracking your nutrition today
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-lg max-w-3xl"
                    >
                        Join thousands of others who have simplified their diet tracking with the power of artificial
                        intelligence.
                    </motion.p>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-15 py-3 text-md rounded-xl bg-black font-bold text-primary outline-0"
                    >
                        Login With Google
                    </motion.button>
                </div>
            </section>
            <footer className="mx-auto px-15 py-10 items-center gap-2 flex justify-between shadow-primary/10 shadow-2xl">
                <div className="flex gap-3 items-center">
                    <img src={logo} className="w-10 h-10 rounded-md" />
                    <p className="font-bold text-lg">AI Food Tracker</p>
                </div>
                <div className="flex gap-10">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Contact</p>
                </div>
                <div className="text-gray-500">© 2026 AI Food Tracker. All rights reserved.</div>
            </footer>
        </Fragment>
    );
}
