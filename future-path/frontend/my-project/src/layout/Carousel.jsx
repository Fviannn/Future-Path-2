// src/components/Carousel.js
import React, { useState, useEffect } from 'react';
import Havard from '../images/ITB.jpeg';

const Carousel = () => {
    const slides = [
        { id: 1, image: Havard, caption: 'Caption 1' },
        { id: 2, image: Havard, caption: 'Caption 2' },
        { id: 3, image: Havard, caption: 'Caption 3' },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Ganti slide setiap 3 detik

        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative  w-full">
            <div className="flex justify-center items-center">
                <button onClick={prevSlide} className="absolute left-0 z-10 text-white">❮</button>
                <img src={slides[currentSlide].image} alt={slides[currentSlide].caption} className="w-5/6 h-5/6 rounded-xl" /> {/* Ubah ukuran gambar */}
                <button onClick={nextSlide} className="absolute right-0 z-10 text-white">❯</button>
            </div>
            <div className="flex justify-center mt-2">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        className={`w-5 h-1 mx-2 ${currentSlide === index ? 'bg-black' : 'bg-white'}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;