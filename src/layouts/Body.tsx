import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home'
import { Film } from '../pages/film'
import { Catalog } from '../pages/catalog'

export const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Catalog type="movie" />} />
      <Route path="/tv" element={<Catalog type="tv" />} />
      <Route path="/search" element={<Catalog type="search" />} />

      <Route path="/movie/:id" element={<Film mediaType="movie" />} />
      <Route path="/tv/:id" element={<Film mediaType="tv" />} />
    </Routes>
  )
}
