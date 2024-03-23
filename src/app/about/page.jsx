import Styles from './about.module.css'
const AboutPage=()=>{
    return(
        <div className={Styles.container}>
      <div className={Styles.textContainer}>
        <h2 className={Styles.subtitle}>About Agency</h2>
        <h1 className={Styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={Styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={Styles.boxes}>
          <div className={Styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={Styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={Styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
     
     
    </div>
    )
}
export default AboutPage






