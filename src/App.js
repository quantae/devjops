import styles from "./App.module.css";
import Button from "./component/button/Button";
import Card from "./component/card/Card";
import NavBar from "./component/navbar/NavBar";
import data from "./data/data.json"; // import data.json


function App() {
  return (
    <div className="App">
      <div className={styles.nav}><NavBar/></div>
      <div className={styles.job_lists}>
        <Card data={data} />
      </div>
      <div style={{display:"flex", justifyConent: "center", alignItems: "center"}} className={styles.button_container}>
       
        <Button/>
       
       
      </div>
      
    </div>
  );
}

export default App;
