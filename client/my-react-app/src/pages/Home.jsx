import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "../styles/Home.css";

const Home = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.body.classList.toggle("dark-theme", !isDarkTheme);
    };

    const cards = [
        {
            title: "North Indian",
            image: "https://foodish-api.com/images/biryani/biryani21.jpg",
            rating: 4.5,
            cuisine: "Indian",
            deliveryTime: 30,
        },
        {
            title: "South Indian",
            image: "https://foodish-api.com/images/idly/idly19.jpg",
            rating: 4.2,
            cuisine: "Indian",
            deliveryTime: 25,
        },
        {
            title: "Chinese",
            image: "https://foodish-api.com/images/pasta/pasta15.jpg",
            rating: 4.8,
            cuisine: "Chinese",
            deliveryTime: 20,
        },
        {
            title: "Fast Food",
            image: "https://foodish-api.com/images/samosa/samosa20.jpg",
            rating: 4.7,
            cuisine: "Fast Food",
            deliveryTime: 35,
        }
    ];

    return (
        <div className="home">
            <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            <div className="banner">
                <h1>Discover the Best Food in Your Area!</h1>
                <button className="cta-button">Explore Now</button>
            </div>
            <div className="card-container">
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
