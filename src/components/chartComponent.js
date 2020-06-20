import React, { Component } from 'react';
import Chart from 'chart.js';

class ChartComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.createChart();
    }
    // test it again from visual studio
    createChart = () => {
        this.props.dataFromDashboard.data.map((data) => {
            var ctx = document.getElementById(data.chartId).getContext('2d');
            var chart = new Chart(ctx, {

                type: data.type,

                data: data.data,

                options: data.options
            });
        })
    }

    render() {
        let tableElements = this.props.dataFromDashboard.rows.map(rows => {
            return (
                <tr style={{ width: '100%', height: '298px' }}>
                    {rows.row.map(chart => {
                        return (
                            <td>
                                <canvas id={chart.chartId} key={chart.chartId} style={{ width: '353px', height: '268px', backgroundColor: 'white' }}></canvas> </td>
                        )
                    })}
                </tr>
            )
        });
        return (
            <div>{tableElements}</div >
        );
    }
}
export default ChartComponent;