import React, { useState } from 'react';
import Balloon from "./Ballon";

import styles from "./Workout.module.css"

const Workout = ({data}) => {
    const [detailsVisible, setDetailsVisible] = useState(false);
    const toggleDetails = () => {
        setDetailsVisible(!detailsVisible);
    };

    const t = `${String(data.duration.hours).padStart(2, '0')}:${String(data.duration.minutes).padStart(2, '0')}:${String(data.duration.seconds).padStart(2, '0')}`;
    const allSeconds = (data.duration.seconds) + (data.duration.minutes * 60) + (data.duration.hours * 3600);
    const dist = data.length / data.activity.unit.value_km;
    let turn;
    if (data.activity.turn === 1) {
    turn = "";
    } else {
    turn = data.activity.turn;
    }
    const paceMinutes = Math.floor(allSeconds / (dist / data.activity.turn) / 60);
    const paceSeconds = Math.floor(allSeconds / (dist / data.activity.turn) % 60);
    const pace = `${paceMinutes}:${String(paceSeconds).padStart(2, '0')}`;
    
    return (
            <ul className={`row px-0 start-0 ${styles.workout}`} key={data.id}>
                <li className='col-3 col-md-auto px-0 d-none d-xl-block'>
                    <Balloon content={data.date} />
                </li>
                <li className='col-3 col-md-auto px-0 d-none d-xl-block'>
                    <Balloon content={data.activity.name} />
                </li>
                <li className='col-3 col-md-auto px-0 d-none d-xl-block'>
                    <Balloon content={<i className={`bi bi-binoculars`}> | {dist} {data.activity.unit.unit}</i>} />
                </li>
                <li className='col-3 col-md-auto px-0 d-none d-xl-block'>
                    <Balloon content={<i className={`bi bi-clock-fill`}> | {t}</i>} />
                </li>
                <li className='col-3 col-md-2 px-0 d-none d-xl-block'>
                    <Balloon
                        content={<i className={`bi bi-stopwatch-fill`}> | {pace} min/{turn}{data.activity.unit.unit}</i>}
                    />
                </li>
                <li className='col-3 col-md-auto px-0 d-none d-xl-block'>
                    <Balloon content={<i className={`bi bi-heart-fill`}> | {data.bpm} bpm</i>} />
                </li>
                <li className='col-3 col-md-auto px-0 d-none d-xl-block'>
                    <Balloon content={<i className={`bi bi-ev-station`}> | {data.kcal} kcal</i>} />
                </li>

                <li className="col-12 d-block d-xl-none" style={{ width: `400px` }} onClick={toggleDetails}>
                    <Balloon
                        content={`${data.date}  -  ${data.activity.name}`} extraClassName1={"effect"} extraClassName2={"justify"}
                    />
                </li>
                {detailsVisible && (
                    <li className={`col-12 d-block d-xl-none ${styles.text}`}>
                        <i className={`bi bi-binoculars ${styles.text}`}> {data.length} {data.activity.unit.unit}</i><br></br>
                        <i className={`bi bi-stopwatch-fill ${styles.text}`}> {pace} min/{data.activity.unit.unit}</i><br></br>
                        <i className={`bi bi-clock-fill ${styles.text}`}> {t}</i><br></br>
                        <i className={`bi bi-heart-fill ${styles.text}`}> {data.bpm} bpm</i><br></br>
                        <i className={`bi bi-ev-station ${styles.text}`}> {data.kcal} kcal</i>
                    </li>
                )}
            </ul>
    );
}

export default Workout;
