import {useState, useEffect} from 'react'

import Header from '../../components/header'
import Loader from '@/components/loader'

import Typography from '@mui/material/Typography';

import styles from './bookPage.module.css'

import HTTP from '../../utils/HTTP'

export default function BookPage() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const request = new HTTP()

    }, [])


    return (
        <main>
          <Header/>
          <Typography textAlign="center" variant="h4">Books</Typography>
          <div className={styles.bookPage}>
            {"Hola"}
          </div> 
          {loading ? <Loader/> : ""}
        </main>
    )
}