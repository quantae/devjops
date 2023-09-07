import React from "react";
import styles from "./card.module.css";
import { ReactSVG } from "react-svg";

function Card({ data, }) {
  const jobLists = data;
   
  return <>
  {jobLists.map((jobList) => (
    <div className={styles.card_container} key={jobList.id}>
        <div className={`${styles.logo_container}`} style={{backgroundColor: jobList.logoBackground}}>
            <ReactSVG  src="./assets/logos/scoot.svg" />
        </div>
      <p className={styles.post_contract}>
        {jobList.postedAt} &bull; {jobList.contract}
      </p>
      <h5 className={styles.position}>{jobList.position}</h5>
      <p className={styles.company}>{jobList.company}</p>
      <h6 className={styles.location}>{jobList.location}</h6>
    </div>
  ))}
  </>
}

export default Card;
