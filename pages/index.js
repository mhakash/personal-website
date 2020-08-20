import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  IoLogoGithub as GithubLogo,
  IoLogoFacebook as FacebookLogo,
  IoLogoLinkedin as LinkedInLogo,
} from "react-icons/io";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Akash</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="I am Mehdi Hassan Akash, software developer and tech enthusiastic" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} style={{fontSize:"3rem"}}>Mehdi Hassan Akash</h1>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li style={{ marginRight: "50px" }}>
            <a href="https://github.com/mhakash" target="_">
              <GithubLogo title="github" size={32}/>
            </a>
          </li>
          <li style={{ marginRight: "50px" }}>
            <a href="https://facebook.com/mhakash21" target="_">
              <FacebookLogo title="facebook" size={32} />
            </a>
          </li>
          <li style={{ marginRight: "50px" }}>
            <a href="https://linkedin.com/in/mhakash" target="_">
              <LinkedInLogo title="linkedin" size={32}/>
            </a>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        Powered by{" "}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </footer>
    </div>
  );
}
