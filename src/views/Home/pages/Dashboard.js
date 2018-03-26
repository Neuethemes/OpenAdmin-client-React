import React, { Component } from 'react';
import WidgetComponent from "../../../components/Widget";
import MessagesComponent from "../../../components/Messages";
import StatComponent from "../../../components/Stat";
import ProgressListComponent from "../../../components/ProgressList";
import { Bar, Line, Doughnut, Pie, Radar } from 'react-chartjs-2';
import { authHeader } from "../../../helpers/auth-header";

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: {
        income: {},
        visits: {},
        orders: {},
        new_accounts: {}
      },
      charts: {
        barChart: {},
        lineChart: {},
        doughnutChart: {},
        pieChart: {},
        radarChart: {}
      },
      sales: [],
      messages: []
    };
    this.requestOptions = {
      method: 'GET',
      headers: authHeader()
    };
  }

  componentWillMount() {
    this.loadSummaryData();
    this.loadChartsData();
    this.loadSalesData();
    this.loadMessagesData();
  }

  loadSummaryData() {
    fetch('http://127.0.0.1:3003/stats/summary', this.requestOptions)
      .then(response => response.json())
      .then(response => {
        let summary = response.data[0];
        this.setState({summary})
      });
  }

  loadChartsData() {
    fetch('http://127.0.0.1:3003/stats/charts', this.requestOptions)
      .then(response => response.json())
      .then(response => {
        let charts = response.data[0];
        this.setState({charts})
      });
  }

  loadSalesData() {
    fetch('http://127.0.0.1:3003/stats/sales', this.requestOptions)
      .then(response => response.json())
      .then(response => {
        let sales = response.data;
        this.setState({sales})
      });
  }

  loadMessagesData() {
    fetch('http://127.0.0.1:3003/messages', this.requestOptions)
      .then(response => response.json())
      .then(response => {
        let messages = response.messages;
        this.setState({messages})
      });
  }

  render() {
    return (
      <div className="container-fluid px-5 mt-5 mb-4">

        <div className="row">

          <div className="col-xl-3 col-lg-6">
            <WidgetComponent header='Income' className='headerline-danger small shadow-01' badge={this.state.summary.income.badge}>
              <StatComponent header={this.state.summary.income.header} excerpt={this.state.summary.income.excerpt}/>
            </WidgetComponent>
          </div>

          <div className="col-xl-3 col-lg-6">
            <WidgetComponent header='Visits' className='headerline-danger small shadow-01' badge={this.state.summary.visits.badge}>
              <StatComponent header={this.state.summary.visits.header} excerpt={this.state.summary.visits.excerpt}/>
            </WidgetComponent>
          </div>

          <div className="col-xl-3 col-lg-6">
            <WidgetComponent header='Orders' className='headerline-danger small shadow-01' badge={this.state.summary.orders.badge}>
              <StatComponent header={this.state.summary.orders.header} excerpt={this.state.summary.orders.excerpt}/>
            </WidgetComponent>
          </div>

          <div className="col-xl-3 col-lg-6">
            <WidgetComponent header='New Accounts' className='headerline-danger small shadow-01' badge={this.state.summary.new_accounts.badge}>
              <StatComponent header={this.state.summary.new_accounts.header} excerpt={this.state.summary.new_accounts.excerpt}/>
            </WidgetComponent>
          </div>

        </div>

        <div className="row">

          <div className="col-lg-12">
            <WidgetComponent header='Sales' className='shadow-01' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'>
              <div className="row">
                <div className="col-lg-8 py-3 my-3">
                  <Bar
                    data={this.state.charts.barChart}
                    options={this.state.charts.barChart.options}
                    height={80}
                  />
                </div>
                <div className="col-4">
                  <ProgressListComponent data={this.state.sales}/>
                </div>
              </div>
            </WidgetComponent>
          </div>

        </div>

        <div className="row">

          <div className="col-xl-4 col-lg-6">
            <WidgetComponent header='Incoming Messages' className='shadow-01' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit'>
              <div className="mb-4">
                <h5 className="tab-title">{this.state.messages.length} Notes Received</h5>
              </div>
              <MessagesComponent list={this.state.messages}/>
            </WidgetComponent>
          </div>

          <div className="col-xl-8 col-lg-6">

            <div className="row">

              <div className="col-lg-12">
                <WidgetComponent header='Views' className='shadow-01' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'>
                  <Line
                    data={this.state.charts.lineChart}
                    options={this.state.charts.lineChart.options}
                    height={60}
                  />
                </WidgetComponent>
              </div>
            </div>

            <div className="row">

              <div className="col-xl-4 col-md-12">
                <WidgetComponent header='Traffic Source' className='shadow-01' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore'>
                  <Doughnut
                    data={this.state.charts.doughnutChart}
                    options={this.state.charts.doughnutChart.options}
                  />
                </WidgetComponent>
              </div>

              <div className="col-xl-4 col-md-12">
                <WidgetComponent header='Geography' className='shadow-01' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore'>
                  <Pie
                    data={this.state.charts.pieChart}
                    options={this.state.charts.pieChart.options}
                  />
                </WidgetComponent>
              </div>

              <div className="col-xl-4 col-md-12">
                <WidgetComponent header='Radar Chart' className='shadow-01' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore'>
                  <Radar
                    data={this.state.charts.radarChart}
                    options={this.state.charts.radarChart.options}
                  />
                </WidgetComponent>
              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default DashboardPage;
