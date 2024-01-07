import React, { useState } from "react";
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const images = [
    './img/nisekoi.png',
    './img/zom100.png',
    './img/grand_blue.png',
    './img/boku_no_hero.png',
    './img/grand_blue.png',
    './img/boku_no_hero.png',
    './img/grand_blue.png',
    './img/boku_no_hero.png',
    './img/grand_blue.png',
    './img/boku_no_hero.png',
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
  
    const lastIndex = images.length - 1;
  
    if (startIndex + 8 >= images.length) {
      setStartIndex(0); 
    } else {
      setStartIndex(prevIndex => prevIndex + 1);
    }
  
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300); 
  };
  
  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
  
    if (startIndex === 0) {
      setStartIndex(images.length - 1); 
    } else {
      setStartIndex(prevIndex => prevIndex - 1);
    }
  
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const visibleImages = images.slice(startIndex, startIndex + 8);

  return (
    <div className="bg-[#253238] flex h-screen justify-center">
      <div className="w-[1920px] justify-center flex-col bg-[#141414] p-[20px] mt-[20px]">
      <div className="bg-[#2D2D2D] w-full p-[10px]">
          <div
            className={`bg-[#252525] rounded-[50px]  inline-flex w-[40px] h-[40px] items-center justify-center ${styles.icon}`}
          >
            <span className="text-white text-[20px]">
              <FontAwesomeIcon icon={faBullhorn} />
            </span>
          </div>
          <div className={styles.notification}>
            <ul>
              <li className={`text-[#F3DD3C] ${styles.listItem}`}>
                Lưu hoặc nhớ ngay link rút gọn
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-white">
                  bit.ly/2tenvietsub
                </a>
                để truy cập khi nhà mạng chặn!
              </li>
              <li className={`text-[#F3DD3C] ${styles.listItem}`}>
                Mời bạn tham gia Group
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-[#E62117]">
                  tại đây!
                </a>
                hoặc tham gia Discord
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-[#E62117]">
                  tại đây!
                </a>
                để ủng hộ{" "}
                <span className="text-[#E62117]">2tenvietsub</span>
              </li>
              <li className={`text-[#F3DD3C] ${styles.listItem}`}>
                Do thiếu hút kinh phí nên quảng cáo có thể gây khó chịu, rất mong các bạn thông cảm!
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.slider}>
          <div className={styles.sliderContainer}>
            {visibleImages.map((image, index) => (
              <div className={styles.slide} key={index}>
                <img src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>

        </div>
        <div>
          <button className="text-white" onClick={prevSlide} disabled={startIndex === 0}>
            Previous
          </button>
          <button className="text-white" onClick={nextSlide}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Home;