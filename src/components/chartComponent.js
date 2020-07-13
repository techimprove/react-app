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
        let index = 1;
        let tableElements = this.props.dataFromDashboard.rows.map(rows => {
            return (
                <tr key={rows.row + index++} style={{ width: '100%', height: '298px' }}>
                    {rows.row.map(chart => {
                        return (
                            <td key={chart.chartId}>
                                <canvas id={chart.chartId} key={chart.chartId} style={{ width: '353px', height: '268px', backgroundColor: 'white' }}></canvas> </td>
                        )
                    })}
                </tr>
            )
        });
        return (
            <tbody>{tableElements}</tbody>
        );
    }
}
export default ChartComponent;