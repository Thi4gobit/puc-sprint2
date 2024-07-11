
import styles from './Filter.module.css';

const database = require('../database.json');

const Filter = ({ selectedActivityType, setSelectedActivityType, setStartDate, setEndDate }) => {
    const activityNames = database.map(item => item.activity.name);
    const activityType = [...new Set(activityNames), 'All Activities'];


    const handleActivityTypeChange = (type) => {
        setSelectedActivityType(type);
    };

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    return (
        <div className={styles.container1}>
            <div className="btn-group me-2 mt-2 mb-2 d-block d-sm-inline">
                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {selectedActivityType}
                </button>
                <ul className="dropdown-menu">
                    {activityType.map((type, index) => (
                        <li key={index}>
                            <buttom className="dropdown-item" onClick={() => handleActivityTypeChange(type)}>
                                {type}
                            </buttom>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="form-group me-2 mb-2 d-block d-sm-inline">
                <input type="date" className="btn btn-secondary btn-sm" id="startDate" onChange={handleStartDateChange} max={new Date().toISOString().split("T")[0]} min="01-01-2023" />
            </div>

            <div className="form-group d-block d-sm-inline">
                <input type="date" className="btn btn-secondary btn-sm" id="endDate" onChange={handleEndDateChange} max={new Date().toISOString().split("T")[0]} min="01-01-2023" />
            </div>
        </div>
    );
};

export default Filter;
