
import styles from "./Ballon.module.css"

const Balloon = ({ content, extraClassName1, extraClassName2 }) => {
    return (
        <div className={`${styles.balloon} ${styles[extraClassName1]} ${styles[extraClassName2]}`}>
            {content}
        </div>
    );
};

export default Balloon;


