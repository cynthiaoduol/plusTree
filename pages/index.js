import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Data from './Data'
import About from './src/components/AboutItems/About'
import Homepage from './Homepage/Homepage'

export default function Home() {
  return (
    <div>
     <Homepage/>
    </div>
  )
}
