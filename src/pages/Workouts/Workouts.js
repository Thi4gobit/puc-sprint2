import React, { useState } from 'react';
import Workout from '../../components/Workout';
import Filter from '../../components/Filter';
import styles from './Workouts.module.css';

const database = require('../../database.json');

const Workouts = () => {
    const [workoutList] = useState(database);
    const [selectedActivityType, setSelectedActivityType] = useState('All Activities');
    const [startDate, setStartDate] = useState('2023-01-01');
    const [endDate, setEndDate] = useState(`${new Date().toISOString().split("T")[0]}`);

    const filteredWorkouts = workoutList.filter(workout => {
        const matchesActivity = selectedActivityType === 'All Activities' || workout.activity.name === selectedActivityType;
        const workoutDate = new Date(workout.date.split('/').reverse().join('-'));
        const matchesStartDate = !startDate || new Date(startDate) <= workoutDate;
        const matchesEndDate = !endDate || new Date(endDate) >= workoutDate;
        return matchesActivity && matchesStartDate && matchesEndDate;
    });

    return (
        <div className="container-fluid px-0 ps-md-3">
            <Filter
                selectedActivityType={selectedActivityType}
                setSelectedActivityType={setSelectedActivityType}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
            />
            <div className={styles.title}>{`Workouts`} </div>
            {filteredWorkouts.map((workout) => (
                <Workout key={workout.id} data={workout} />
            ))}
        </div>
    );
};

export default Workouts;
