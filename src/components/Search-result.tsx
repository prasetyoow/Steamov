import { useState, useEffect } from 'react'
import { Film } from '../interfaces'
import Image from './Image'

interface Props {
  keyword: string
  goToSearchPage: Function
}

export default function SearchResult(props: Props) {
  const [items, setItems] = useState<Film[]>([])

  const fetch = () => {
    const arrs: Film[] = []

    for (let i = 0; i < 6; i++) {
      arrs.push({
        id: i,
        title: 'lorem',
        description: '',
        coverPath: '',
        genreIds: [1, 2, 3, 4, 5, 6],
        posterPath: '',
        seasons: [],
      })
    }

    setItems(arrs)
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <div
      className="
    absolute
    top-[48px]
    left-0
    right-0
    rounded-md
    overflow-hidden
    bg-header
    "
    >
      {items.map((film, idx) => {
        return (
          <div
            key={idx}
            className="flex items-start p-1.5 rounded-lg hover:bg-primary cursor-pointer m-1.5"
          >
            {/* images */}
            <Image
              src=""
              className="h-[72px] min-w-[102px] w-[102px]rounded-md"
            ></Image>
            {/* titles and genres  */}
            <div className="px-3 truncate">
              <p className="text-base">{film.title}</p>
              <ul className="flex flex-wrap gap-x-1.5 text-sm opacity-[0.7]">
                {film.genreIds.map((id, idx) => {
                  return <li key={idx}>item {idx}</li>
                })}
              </ul>
            </div>
          </div>
        )
      })}

      {items.length > 5 ? (
        <button
          onClick={() => props.goToSearchPage()}
          className="px-3 py-1.5 bg-primary w-full hover:text-body"
        >
          More results
        </button>
      ) : (
        ''
      )}
    </div>
  )
}
