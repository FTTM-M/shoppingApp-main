import { RotatingLines } from "react-loader-spinner"
import styles from "./Loading.module.css"

function Loading() {
  return (
    <div className={styles.loader}>
        <RotatingLines  color="#501952" width="100px" height="100px" /></div>)
}

export default Loading