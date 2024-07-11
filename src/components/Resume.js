import React from 'react';
import Balloon from "./Ballon";
import styles from './Resume.module.css';

const formatDuration = (duration) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const Resume = ({totalDuration, totalDistance, pace, totalCalories, averageBpm}) => {
    return (
        <ul className={`row px-2 start-0 d-block ${styles.resume}`}>
            <li className='mb-2 px-0' style={{ width: `200px` }} >
                <Balloon
                    content={<i className={`bi bi-binoculars`}>{` | ${totalDistance.toFixed(1)} km (Total)`}</i>}
                    extraClassName2={"justify"}
                />
            </li>
            <li className='mb-2 px-0' style={{ width: `200px` }} >
                <Balloon
                    content={<i className={`bi bi-clock-fill`}>{` | ${formatDuration(totalDuration)} (Total)`}</i>}
                    extraClassName2={"justify"}
                />
            </li>
            <li className='mb-2 px-0' style={{ width: `200px` }} >
                <Balloon
                    content={<i className={`bi bi-stopwatch-fill`}>{` | ${pace} `}</i>}
                    extraClassName2={"justify"}
                />
            </li>
            <li className='mb-2 px-0' style={{ width: `200px` }} >
                <Balloon
                    content={<i className={`bi bi-heart-fill`}>{` | ${averageBpm} bpm (Average)`}</i>}
                    extraClassName2={"justify"}
                />
            </li>
            <li className='mb-2 px-0' style={{ width: `200px` }} >
                <Balloon
                    content={<i className={`bi bi-ev-station`}>{` | ${totalCalories} kcal (Total)`}</i>}
                    extraClassName2={"justify"}
                />
            </li> 
        </ul>
    );
}

export default Resume;
