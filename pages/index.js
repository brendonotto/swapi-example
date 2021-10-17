import Head from "next/head";
import styles from "../styles/Home.module.css";
import * as React from "react";
import axios from "axios";

export default function Home() {
  const [value, setValue] = React.useState(1);
  const [person, setPerson] = React.useState(null);

  const handleSearch = async function () {
    let person = await axios.get(`/api/people/${value}`);
    console.log("Person", person);

    setPerson(person.data);
  };

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
        <span>
          <pre>
            {person && (
              <div>
                <p>Name: {person.name}</p>
                <p>Height: {person.height}</p>
                <p>Mass: {person.mass}</p>
              </div>
            )}
          </pre>
        </span>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
