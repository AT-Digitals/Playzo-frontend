import React, { useState, useEffect } from 'react';
import './TimeLine.css';

export default function AboutTimelineComponent() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define your timeline data
  const timelineData = [
    {
      title: "Turf",
      year: '2024',
      content: 'Turf refers to artificial or natural grass surfaces, commonly used in sports, landscaping, or recreational areas, providing a lush, durable ground covering.',
    },
    {
      title: "PlayStation",
      year: '2023',
      content: 'PlayStations are popular gaming consoles developed by Sony, providing immersive gaming experiences with advanced graphics and technology. These gaming. ',
    },
    {
      title: "Cricket",
      year: '2022',
      content: 'Cricket is a popular bat-and-ball sport, known for its excitement, strategy, and global appeal. Played professionally and recreationally worldwide.',
    },
    {
        title: "BoardGames",
        year: '2021',
        content: 'Board games bring joy, strategy, and social interaction. From classics like Monopoly to modern hits like Catan, endless entertainment awaits.',
      },
  ];

  return (
    <div className="timeline">
      <div className="outer">
        {timelineData.map((item, index) => (
          <div className="card" key={index}>
            <div className="info">
            <h3 className="title" style={{position: "relative", color: "#15B5FC", marginTop: "5px", fontWeight: "600", fontFamily: "'Proxima Nova', sans-serif", }} data-year={item.year}>
                {item.title}
              </h3>
              <p style={{fontSize: "15px", fontFamily: "'Proxima Nova', sans-serif", fontWeight: "500", paddingLeft: "5px", marginTop: "0px"}}>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}