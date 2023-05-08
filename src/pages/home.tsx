import { useState, useEffect } from 'react'
import Slider from '../components/slider/slider'
import Section from '../components/section'
import { Film } from '../interfaces'
import TrendingHero from '../components/trending-hero'
import Card from '../components/card'

export default function Home() {
  const [trendings, setTrendings] = useState<Film[]>([])
  const [inTheaters, setInTheaters] = useState<Film[]>([])

  const fetch = () => {
    const arrs: Film[] = []

    for (let i = 0; i < 6; i++) {
      arrs.push({
        id: i,
        mediaType: 'tv',
        title: 'Lorem ipsum dolor, sit amet ipsa?',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, debitis minima. Possimus, nemo ad, laudantium saepe quidem eos reprehenderit voluptatum iusto adipisci, explicabo quos suscipit eum. Iste debitis ad in.',
        coverPath: '',
        genreIds: [1, 2, 3, 4, 5, 6],
        posterPath: '',
        seasons: [],
      })
    }

    setTrendings(arrs)
    setInTheaters(arrs)
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <>
      {/* trending */}
      <Section className="py-0">
        <Slider
          className="slick-hero"
          autoplay={true}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {trendings.map((film, idx) => {
            return <TrendingHero film={film} key={idx}></TrendingHero>
          })}
        </Slider>
      </Section>
      {/* in theaters */}
      <Section title="In Theaters">
        <Slider
          isMovieCard={true}
          autoplay={true}
          slidesToShow={5}
          slidesToScroll={5}
        >
          {inTheaters.map((film, idx) => {
            return <Card film={film} key={idx}></Card>
          })}
        </Slider>
      </Section>
      {/* populars */}
      {/* top rated tv */}
      {/* top rated movies */}
    </>
  )
}
