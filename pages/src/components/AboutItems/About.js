import styles from './About.module.css'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
const About=()=> {
  return (
      <div className={styles.container}>
      <div className={styles.main}>
        
      <div className={styles.backgroundimg}>
      <div className={styles.about}>
        <h1 >What we do</h1>
            <p  className={styles.aboutHeading}>Plus tree is a collection of individual brought together by the drive to save mother nature.
              <br />We are located in Kenya with the aim of targeting communites and regions that are in need of trees.
              <br />We also organise and improve livelihoods of impoverished farmers by identifying regions and areas that
              <br/> are in need of trees and helping them in tree planting. </p>
      </div>        </div>
      </div>
      <div className={styles.details}>

          <div  className={styles.mission}>
              <h1 className={styles.heading}>Our mission</h1>
              <p>Don't make trees rare, keep them with care.</p>
              <p className={styles.visionPara}>Our aim is to reach out to areas and regions that are in need of trees and help in planting the trees.</p>
              <FormatQuoteIcon className={styles.quote }/>  
        </div>
          
      
          <div className={styles.vision}>
          <h1 className={styles.heading}>Our Vision</h1>
              <p className={styles.paragraph}>To improve mother nature by improving the livelihood of trees in every part of kenya.</p>
        <FormatQuoteIcon className={styles.quote }/>
        </div>

      <div className={styles.values}>
      <h1 className={styles.heading}>Core Values</h1>
 
<p className={styles.paragraph}>Integrity. </p>

<p className={styles.paragraph}>Care -for self, for colleagues, for clients, for the trees.</p>
<p className={styles.paragraph}>Community empowerment.</p>

          <p className={styles.paragraph}>Appreciation for trees.</p>
          <FormatQuoteIcon className={styles.quote } />

        </div>
        </div>
        
    </div>
  )
}

export default About
