'use client'

import { useState, useEffect } from 'react'
import Header from '../../components/header'
import BookCard from '@/components/bookCard'
import Loader from '@/components/loader'

import Typography from '@mui/material/Typography';

import HTTP from '../../utils/HTTP'
// import PaginationData from '@/utils/pagination'

import styles from './bookPage.module.css'

//Next js
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'


export default function Books() {
  const [auth, setAuth] = useState(true)
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true);

  const router = useRouter()
  const params = useParams()

  useEffect(() => {
    const request = new HTTP()
    request.getAll("books").then((response) => {
      const data = makeListOfBooks(response)
      setBooks(data)
      setLoading(false)
      isAuth()
    })
    return () => {
      console.log("Component Out!")
    }
  }, [])

  const isAuth = () => {
    const token = localStorage.getItem("redconnect")
    if (!token) {
      setAuth(false) 
      router.push("/")
    } else {
      // Compare token at the response with token at localstorage
      setAuth(true)
    }

  }
 
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