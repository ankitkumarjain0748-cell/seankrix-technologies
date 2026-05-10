"use client";

import { useRouter } from "next/router";
import services from "../../json/services.json";
import Image from "next/image";
import Layout from "@/Components/Layout";

export default function ServiceDetailsPage() {

    const router = useRouter();
    console.log(router)
    // URL se slug nikalna
    const slug = router.query.slug;

    // JSON data match karna
    const service = services.find(
        (item) => item.slug === slug
    );


    // Agar service na mile
    if (!service) {
        return (
            <div className="h-screen bg-black text-white flex items-center justify-center text-4xl font-bold">
                Service Not Found
            </div>
        );
    }

    return (
        <Layout>
            <div className="bg-black text-white min-h-screen overflow-hidden">

                {/* HERO SECTION */}
                <section className="relative h-[85vh] flex items-center justify-center">

                    <Image
                        src={service.bannerImage}
                        alt={service.title}
                        fill
                        priority
                        className="object-cover opacity-30"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>

                    <div className="relative z-10 max-w-5xl text-center px-6">

                        <p className="text-cyan-400 uppercase tracking-[5px] text-sm mb-5">
                            Premium IT Services
                        </p>

                        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                            {service.title}
                        </h1>

                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
                            {service.shortDesc}
                        </p>

                        <div className="flex flex-wrap justify-center gap-5">

                            <button
                                onClick={() => router.push("/contact")}
                                className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300"
                            >
                                Get Started
                            </button>

                            <button
                                onClick={() => router.push("/portfolio")}
                                className="border border-white/20 hover:border-cyan-400 hover:text-cyan-400 px-8 py-4 rounded-2xl transition-all duration-300"
                            >
                                View Portfolio
                            </button>

                        </div>
                    </div>
                </section>

                {/* ABOUT */}
                <section className="py-24 px-6 md:px-16">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <div>

                            <p className="text-cyan-400 font-semibold mb-3">
                                About Service
                            </p>

                            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                Building Modern Digital Solutions
                            </h2>

                            <p className="text-gray-400 leading-relaxed text-lg">
                                {service.description}
                            </p>

                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

                            <h3 className="text-2xl font-bold mb-8">
                                Technologies We Use
                            </h3>

                            <div className="flex flex-wrap gap-4">

                                {service.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-5 py-3 rounded-xl text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}

                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-black to-gray-950">

                    <div className="text-center mb-16">

                        <p className="text-cyan-400 font-semibold mb-3">
                            Features
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold">
                            What You Will Get
                        </h2>

                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {service.features.map((feature, index) => (

                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2"
                            >

                                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl mb-6">
                                    ✦
                                </div>

                                <h3 className="text-xl font-semibold mb-4">
                                    {feature}
                                </h3>

                                <p className="text-gray-400 leading-relaxed">
                                    High-quality modern solutions designed for business growth.
                                </p>

                            </div>

                        ))}

                    </div>
                </section>

                {/* PROCESS */}
                <section className="py-24 px-6 md:px-16">

                    <div className="text-center mb-20">

                        <p className="text-cyan-400 font-semibold mb-3">
                            Our Process
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold">
                            How We Work
                        </h2>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {service.process.map((item, index) => (

                            <div
                                key={index}
                                className="relative bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden"
                            >

                                <div className="absolute top-0 right-0 text-[120px] font-black text-white/5">
                                    {item.step}
                                </div>

                                <div className="relative z-10">

                                    <span className="text-cyan-400 text-sm font-semibold">
                                        Step {item.step}
                                    </span>

                                    <h3 className="text-2xl font-bold mt-4 mb-4">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed">
                                        {item.desc}
                                    </p>

                                </div>
                            </div>

                        ))}

                    </div>
                </section>

                {/* BENEFITS */}
                <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-gray-950 to-black">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <div className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10">

                            <Image
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
                                alt="Benefits"
                                fill
                                className="object-cover"
                            />

                        </div>

                        <div>

                            <p className="text-cyan-400 font-semibold mb-3">
                                Benefits
                            </p>

                            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-10">
                                Why Businesses Choose Us
                            </h2>

                            <div className="space-y-5">

                                {service.benefits.map((benefit, index) => (

                                    <div
                                        key={index}
                                        className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl px-6 py-5"
                                    >

                                        <div className="w-10 h-10 rounded-full bg-cyan-500 text-black flex items-center justify-center font-bold">
                                            ✓
                                        </div>

                                        <p className="text-lg text-gray-200">
                                            {benefit}
                                        </p>

                                    </div>

                                ))}

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}