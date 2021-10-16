import Head from "next/head";
import styles from "../styles/Home.module.css";
import * as React from "react";

export default function Home() {
  const [value, setValue] = React.useState("");

  const handleSearch = function () {};

  return (
    <div className={styles.container}>
      <Head>
        <title>SWAPI Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>SWAPI Example</h1>

        <span>
          <label styles="margin 2px" htmlFor="character-search">
            Character Search:
          </label>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            id="character-search"
            type="text"
          ></input>
        </span>
        <button type="submit" onClick={() => handleSearch()}>
          Search
        </button>
        <p></p>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
