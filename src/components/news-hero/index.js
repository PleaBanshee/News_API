import React from 'react';
import Slider from 'react-slick';
import NewsHeroItem from '../news-hero-item';

export default function NewsHero({ headlines }) {

    const news = headlines.map((article, index) => <NewsHeroItem article={article} key={index} />)

    return <Slider
        lazyLoad={true}
        arrows={false} children={news}
        dots={true}
        speed={800}
        pauseOnDotsHover={false}
        pauseOnHover={false}
        pauseOnFocus={false}
        swipeToSlide={true}
        autoplaySpeed={10000}
        autoplay={true} />
}
