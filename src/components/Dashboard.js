import React, { useEffect } from 'react';
import chartData from './../assets/ChartData.json';
import ChartComponent from './chartComponent.js';

function Dashboard() {

    return (
        <div>
            <table className='table table-bordered'>
                <ChartComponent dataFromDashboard={chartData}></ChartComponent>
            </table>
        </div>
    )
}

export default Dashboard;