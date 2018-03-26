import React, {Component} from 'react';
import WidgetComponent from "../../../components/Widget";
import { Bar, Line, Doughnut, Pie, Radar } from 'react-chartjs-2';
import {authHeader} from "../../../helpers/auth-header";

class ChartsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charts: {
        barChart: {},
        lineChart: {},
        doughnutChart: {},
        pieChart: {},
        radarChart: {}
      }
    };
    this.requestOptions = {
      method: 'GET',
      headers: authHeader()
    };
  }

  componentWillMount() {
    this.loadChartsData();
  }

  loadChartsData() {
    fetch('/stats/charts', this.requestOptions)
      .then(response => response.json())
      .then(response => {
        let charts = response.data[0];
        this.setState({charts})
      });
  }

  render() {
    return (
      <div className="content-wrapper container-fluid px-5 mb-4 trans-03-in-out">

        <div className="row">

          <div className="col-lg-12">
            <WidgetComponent header='Line Chart' className='shadow-01' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua.'>
              <Line
                data={this.state.charts.lineChart}
                options={this.state.charts.lineChart.options}
                height={80}
              />
            </WidgetComponent>
          </div>

          <div className="col-xl-6">
            <WidgetComponent header='Bar chart' className='shadow-01' excerpt='A bar chart provides a way of showing data values represented as vertical bars.'>
              <Bar
                data={this.state.charts.barChart}
                options={this.state.charts.barChart.options}
                height={80}
              />
            </WidgetComponent>
          </div>

          <div className="col-xl-6">
            <WidgetComponent header='Horizontal stacked chart' className='shadow-01' excerpt='A horizontal bar chart is a variation on a vertical bar chart.'>
              <Bar
                data={this.state.charts.barChart}
                options={this.state.charts.barChart.options}
                height={80}
              />
            </WidgetComponent>
          </div>

          <div className="col-xl-4 col-md-12">
            <WidgetComponent header='Doughnut chart' className='shadow-01' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
             incididunt ut labore et dolore'>
              <Doughnut
                data={this.state.charts.doughnutChart}
                options={this.state.charts.doughnutChart.options}
                height={80}
              />
            </WidgetComponent>
          </div>

          <div className="col-xl-4 col-md-12">
            <WidgetComponent header='Pie chart' className='shadow-01' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
             incididunt ut labore'>
              <Pie
                data={this.state.charts.pieChart}
                options={this.state.charts.pieChart.options}
                height={80}
              />
            </WidgetComponent>
          </div>

          <div className="col-xl-4 col-md-12">
            <WidgetComponent header='Radar Chart' className='shadow-01' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
             incididunt ut labore et dolore'>
              <Radar
                data={this.state.charts.radarChart}
                options={this.state.charts.radarChart.options}
                height={80}
              />
            </WidgetComponent>
          </div>
        </div>

      </div>
    );
  }
}

export default ChartsPage;
