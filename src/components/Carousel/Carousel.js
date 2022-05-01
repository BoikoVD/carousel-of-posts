import React from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import Swiper from 'react-id-swiper';
import Slide from '../Slide/Slide';
import './Carousel.css';

const Carousel = React.forwardRef(({ swiperRef }) => {
  const posts = useSelector(state => state.posts);

  const swiperParams = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 230,
      scale: 0.9,
      modifier: 1,
      slideShadows: false
    }
  }

  React.useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const prevCount = swiperRef.current.swiper.slides.length;
      swiperRef.current.swiper.update();
      const currentCount = swiperRef.current.swiper.slides.length;
      if (currentCount > prevCount) {
        swiperRef.current.swiper.slideTo(posts.posts.length)
      }
    }
  }, [posts]);

  return (
    <div className="slider">
      {
        posts.isLoading
          ?
          <Spin size="large" className="spinner" />
          :
          <Swiper {...swiperParams} ref={swiperRef} >
            {posts.posts.map(post => <div className="slide" key={post.id}>
              <Slide
                title={post.title}
                body={post.body}
                postId={post.id}
              />
            </div>)}
          </Swiper>
      }
    </div>
  );
})

export default Carousel;