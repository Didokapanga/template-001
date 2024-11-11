"use client"; // Ajoutez cette ligne en haut du fichierimport { useState } from "react";

import Image from "next/image";
import { useState } from "react";

export default function TestimonialSection() {
    // Tableau de témoignages
    const testimonials = [
        {
            name: "Alice",
            role: "Developer",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa consequatur excepturi sequi perferendis obcaecati facilis illo incidunt architecto vitae in. ",
            image: "/images/u1.jpg",
        },
        {
            name: "Bob",
            role: "Designer",
            text: "Nullam bibendum ligula non enim ultricies cursus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa consequatur excepturi sequi perferendis obcaecati facilis illo incidunt architecto vitae in.",
            image: "/images/u2.jpg",
        },
        {
            name: "Charlie",
            role: "Project Manager",
            text: "Vivamus eget dui vel sapien posuere tincidunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa consequatur excepturi sequi perferendis obcaecati facilis illo incidunt architecto vitae in.",
            image: "/images/u3.jpg",
        },
        {
            name: "Diana",
            role: "Marketing Specialist",
            text: "Fusce cursus, metus id tincidunt consectetur, lorem urna varius odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa consequatur excepturi sequi perferendis obcaecati facilis illo incidunt architecto vitae in.",
            image: "/images/u4.jpg",
        },
    ];

    // Témoignage sélectionné par défaut
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Fonction pour changer le témoignage
    const handleSelectTestimonial = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div className="container overflow-hidden lg:w-2/4 w-full mb-8 mx-auto px-4 py-4 flex items-center justify-around flex-col mt-7 gap-5 text-white text-center">
            <div className="flex lg:gap-8 gap-2">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        onClick={() => handleSelectTestimonial(index)}
                        className={` lg:w-24 lg:h-24 w-20 h-20 overflow-hidden rounded-full cursor-pointer ${selectedIndex === index ? "ring-4 ring-blue-500" : ""
                            }`}
                    >
                        <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={400}
                            height={400}
                            className="object-cover w-full h-full"
                        />
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center gap-4 p-4 rounded-lg">
                <h4 className="text-xl font-semibold">{testimonials[selectedIndex].name}</h4>
                <h5 className="text-lg text-gray-200">{testimonials[selectedIndex].role}</h5>
                <p className="text-sm text-gray-100">{testimonials[selectedIndex].text}</p>
            </div>
        </div>
    );
}
