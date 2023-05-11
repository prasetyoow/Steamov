import { useEffect, useRef, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import {
  Link,
  useLocation,
  useSearchParams,
  useNavigate,
} from 'react-router-dom'

import { mergeClassName } from '../utils'
import Container from '../components/Container'
import { SearchResult } from '../components/Search-result'

const MENU_CLASS = `
  px-1.5
  py-1
  hover:bg-primary
  rounded-md
  mobile:px-6
`
const MENU_CLASS_ACTIVE = `
  bg-primary
`

export default function Header() {
  const location = useLocation()
  const [params, _] = useSearchParams()
  const navigate = useNavigate()

  const [pathname, setPathname] = useState('')
  const pathnameRef = useRef('')
  const defaultKeyword = useRef('')

  const [keyword, setKeyword] = useState('')
  const [isSearchFocus, setIsSearchFocus] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  const goToSearchPage = () => {
    if (keyword) {
      defaultKeyword.current = keyword
      navigate(`/search?q=${keyword}`)
      setIsSearchFocus(false)
      searchRef.current?.blur()
    }
  }

  const initKeyword = () => {
    if (pathnameRef.current === '/search') {
      setKeyword(params.get('q') || '')
    } else {
      setKeyword('')
    }
  }

  const onWindowClick = () => {
    setIsSearchFocus(false)
    initKeyword()
  }

  const getMenuClass = (path: string) => {
    if (path === pathname) {
      return mergeClassName(MENU_CLASS, MENU_CLASS_ACTIVE)
    }
    return mergeClassName(MENU_CLASS)
  }

  useEffect(() => {
    setPathname(location.pathname)
    pathnameRef.current = location.pathname
    defaultKeyword.current = params.get('q') || ''
  }, [location.pathname])

  useEffect(() => {
    window.addEventListener('click', onWindowClick)
    return () => {
      window.removeEventListener('click', onWindowClick)
    }
  }, [])

  return (
    <div className="bg-header sticky top-0 z-[99]">
      <Container className="flex items-center justify-between gap-3">
        {/* brand & menu */}
        <div className="flex items-center gap-6">
          {/* brand */}
          <h1 className="text-2xl font-semibold">
            <Link to={'/'}>Streamu</Link>
          </h1>
          {/* menu */}
          <div className="pt-1 flex item-center gap-1.5 mobile:fixed mobile:bottom-0 mobile:left-0 mobile:right-0 mobile:justify-center mobile:py-3 mobile:bg-header mobile:gap-6">
            <Link className={getMenuClass('/movies')} to={'/movies'}>
              Movies
            </Link>
            <Link className={getMenuClass('/tv')} to={'/tv'}>
              TV
            </Link>
          </div>
        </div>

        {/* search */}
        <div className="border-b-[1.5px] border-white flex items-center p-1 flex-[0.5] focus-within:border-primary relative">
          <input
            onClick={(e) => {
              e.stopPropagation()
              setIsSearchFocus(true)
            }}
            onKeyDown={(e) => (e.key === 'Enter' ? goToSearchPage() : '')}
            onInput={(e) => setKeyword(e.currentTarget.value)}
            type="text"
            className="bg-transparent outline-0 flex-1"
            placeholder="search..."
          />
          <IoIosSearch size={18} />
          {/* result search */}
          {isSearchFocus ? (
            <SearchResult
              keyword={keyword}
              goToSearchPage={goToSearchPage}
            ></SearchResult>
          ) : (
            ''
          )}
        </div>
      </Container>
    </div>
  )
}
