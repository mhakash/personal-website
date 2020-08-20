import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  IoLogoGithub as GithubLogo,
  IoLogoFacebook as FacebookLogo,
  IoLogoLinkedin as LinkedInLogo,
  IoLogoTwitter as TwitterLogo
} from "react-icons/io";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Akash</title>
        <meta
          name="description"
          content="I am Mehdi Hassan Akash, software developer and tech enthusiastic"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} style={{ fontSize: "2.25rem", fontWeight:"bold" }}>
          Mehdi Hassan <span style={{color: "#00D"}}>Akash</span>
        </h1>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li className={styles.iconLink}>
            <a href="https://github.com/mhakash" target="_">
              <GithubLogo title="github" size={32}  />
            </a>
          </li>
          <li className={styles.iconLink}>
            <a href="https://facebook.com/mhakash21" target="_">
              <FacebookLogo title="facebook" size={32}  />
            </a>
          </li>
          <li className={styles.iconLink}>
            <a href="https://linkedin.com/in/mhakash" target="_">
              <LinkedInLogo title="linkedin" size={32} />
            </a>
          </li>
          <li className={styles.iconLink}>
            <a href="https://twitter.com/mhakash21" target="_">
              <TwitterLogo title="twitter" size={32} />
            </a>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <img src="/akash.svg" alt="mhakash logo" className={styles.logo} />
        2020
      </footer>
    </div>
  );
}
