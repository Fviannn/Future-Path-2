import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import pradita from "../images/pradita.jpg";
import ugm from "../images/ugm.jpg";
import harvard from "../images/harvard.jpg";
import axios from 'axios';
import { getToken } from '../../../api/services/auth'; // Ensure this path is correct

const slides = [
  {
    title: "SMA Padita Dirgantara",
    rank: "Top 3 Sekolah Indonesia",
    description:
      "SMA Pradita Dirgantara mengemban amanah untuk membawa anak didik agar memiliki pengetahuan yang luas, cerdas, kreatif, berkarakter mulia, dengan rasa kemanusiaan, dan dengan disiplin yang kuat.",
    image: pradita,
  },
  {
    title: "SMAN 3 Surakarta",
    rank: "Top 245 Sekolah Indonesia",
    description:
      "Sekolah Menengah Atas Negeri 3 Surakarta, dikenal dengan nama Smaga adalah Sekolah Menengah Atas yang terdapat di Kota Surakarta, provinsi Jawa Tengah.",
    image: ugm,
  },
  {
    title: "SMA 123 Amonali",
    rank: "Top 1 Sekolah Indonesia",
    description: "Deskripsi apapun itu lah intinya ini sekolah bisa swasta bisa negri tidak dikenal dengan nama apapun karena ya ga ada di dunia nyata kocak.",
    image: harvard,
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const [news, setNews] = useState([]); // State for news
  const intervalRef = useRef(null);

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("next");
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setIsAnimating(false);
    }, 500);
    startInterval();
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("prev");
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
      setIsAnimating(false);
    }, 500);
    startInterval();
  };

  // Fetch news data on component mount
  useEffect(() => {
    const fetchNews = async () => {
      const token = getToken();
      try {
        const response = await axios.get(`http://localhost:8080/future-path/user/berita`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setNews(response.data.data); // Set the fetched news data
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <div className="relative h-screen bg-black text-white flex items-center justify-center overflow-hidden h-[764px]">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800"></div>

        {/* Slider Content */}
        <div className="relative z-10 flex items-center justify-between w-4/5">
          {/* Text Section */}
          <div
            className={`w-1/2 transition-all duration-500 transform ${isAnimating
                ? direction === "next"
                  ? "-translate-x-6 opacity-0"
                  : "translate-x-6 opacity-0"
                : "translate-x-0 opacity-100"
              }`}
          >
            <h1 className="text-6xl font-bold mb-4 text-gray-200">
              {slides[currentSlide].title}
            </h1>
            <div className="flex items-center text-lg mb-2 mr-6 text-sky-500">
              <MdVerified className="mr-2 text-sky-400" />
              <p>{slides[currentSlide].rank}</p>
            </div>
            <p className="text-lg mb-6 mr-6 text-gray-200">
              {slides[currentSlide].description}
            </p>
            <div className="flex items-center space-x-4">
              <button className="bg-gray-700 text-white px-6 py-2 rounded hover:text-white hover:bg-sky-500 active:scale-[0.9]">
                Lebih Lanjut
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`w-1/2 flex justify-end transition-all duration-500 transform ${isAnimating
                ? direction === "next"
                  ? "-translate-x-8 opacity-0"
                  : "translate-x-8 opacity-0"
                : "translate-x-0 opacity-100"
              }`}
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-[1000px] h-[500px] object-cover rounded-lg shadow-lg cursor-pointer hover:scale-[1.01] active:scale-[0.97]"
            />
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-600"
                }`}
            ></div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-20 active:scale-75"
          aria-label="Previous Slide"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-20 active:scale-75"
          aria-label="Next Slide"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* NEWS SECTION */}
      <div className="max-w-screen mx-2 my-10 p-4 border rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {Array.isArray(news) && news.length > 0 ? (
            news.map((item) => (
              <div key={item.id} className="flex items-start mb-6 border-b p-4 shadow-sm hover:shadow-inner shadow-gray-300">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold">{item.judul_berita}</h3>
                  <p className="text-gray-700">{item.isi_berita}</p>
                  <button className='border p-2 my-3 rounded-xl bg-sky-700 text-white text-sm'>
                    Lebih Lanjut
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>No news available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;