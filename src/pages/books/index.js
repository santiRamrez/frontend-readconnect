import { useState, useEffect } from 'react'
import Header from '../../components/header'
import BookCard from '@/components/bookCard'
import Loader from '@/components/loader'

import Typography from '@mui/material/Typography';

import HTTP from '../../utils/HTTP'
// import PaginationData from '@/utils/pagination'

import styles from './bookPage.module.css'


export default function Books() {
  const [auth, setAuth] = useState(true)
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = new HTTP()
    request.getAll("books").then((response) => {
      const data = makeListOfBooks(response)
      setBooks(data)
      setLoading(false)

    })
    return () => {
      console.log("Component Out!")
    }
  }, [])

  // const isAuth = () => {
  //   token = localStorage.getItem("redconnect")
  //   if (!token) {
  //     setAuth(false) 
  //   } else {
  //     setAuth(true)
  //   }
  // }
 
  const makeListOfBooks = (list) => {
    if(list) {
      const arr = list.slice(0, 101)
      return arr.map((obj, _i) =>  <BookCard key={_i} image={obj.imgURI} id={obj.id} url={""}title={obj.title || ""} shortDescrip={obj.shortDescrip} />)
    }
    else {
      ["No data"]
    }
  }

  
    return (
      <main>
        <Header/>
        <Typography textAlign="center" variant="h4">Books</Typography>
        <div className={styles.bookContainer}>
          {books}
        </div> 
        {loading ? <Loader/> : ""}
      </main>
    )
  }