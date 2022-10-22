import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './src/components/AboutItems/About'

export default function Home() {
  return (
    <div>
      <About/>
     {/* <h1>PlusTree</h1> */}
    </div>
  )
}
