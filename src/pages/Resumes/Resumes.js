import React, { useState } from 'react';
import Resume from "../../components/Resume";
import Filter from '../../components/Filter';
import styles from './Resumes.module.css';

const database = require('../../database.json');

export default function FilteredWorkouts() {
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

    // Calculate total and average values
    const totalDuration = filteredWorkouts.reduce((acc, workout) => {
        return acc + (workout.duration.hours * 3600) + (workout.duration.minutes * 60) + workout.duration.seconds;
    }, 0);

    const totalDistance = filteredWorkouts.reduce((acc, workout) => acc + workout.length, 0);
    const totalDistanceForPace = filteredWorkouts.reduce((acc, workout) => acc + workout.length / (workout.activity.unit.value_km * workout.activity.turn), 0);
    const totalCalories = filteredWorkouts.reduce((acc, workout) => acc + workout.kcal, 0);
    const totalBpm = filteredWorkouts.reduce((acc, workout) => acc + workout.bpm, 0);

    const averageBpm = Math.round(totalBpm / filteredWorkouts.length);
    
    const paceMinutes = Math.floor(totalDuration / (totalDistanceForPace) / 60);
    const paceSeconds = Math.floor(totalDuration / (totalDistanceForPace) % 60);
    const pace = `${paceMinutes}:${String(paceSeconds).padStart(2, '0')}`;

    let turn = '';
    if (filteredWorkouts.length > 0 && filteredWorkouts[0].activity) {
    turn = filteredWorkouts[0].activity.turn === '1' ? '' : filteredWorkouts[0].activity.turn;
    }
    const unit = filteredWorkouts[0].activity.unit.unit
    
    return (
        <div className="container-fluid px-0 ps-md-3">
            <Filter
                selectedActivityType={selectedActivityType}
                setSelectedActivityType={setSelectedActivityType}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
            />
            <div className={styles.title}>{`Resume`} </div>
            {selectedActivityType === 'All Activities' ? (
                <Resume 
                    totalDuration={totalDuration} 
                    totalDistance={totalDistance} 
                    pace={`N/A`}
                    totalCalories={totalCalories} 
                    averageBpm={averageBpm}
                />
                ) : (
                <Resume 
                    totalDuration={totalDuration} 
                    totalDistance={totalDistance} 
                    pace={`${pace} min/${turn}${unit}`}
                    totalCalories={totalCalories} 
                    averageBpm={averageBpm}
                />
            )}
        </div>
    );
}

