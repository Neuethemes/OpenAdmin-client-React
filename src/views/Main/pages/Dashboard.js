import React, {Component} from 'react';
import Widget from "../../../components/Widget";
import Messages from "../../../components/Messages";
import Stat from "../../../components/Stat";
import ProgressList from "../../../components/ProgressList";
import { Bar, Line, Doughnut, Pie, Radar } from 'react-chartjs-2';

class PageDashboard extends Component {
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
    }
  }

  componentWillMount() {
    this.loadSummaryData();
    this.loadChartsData();
    this.loadSalesData();
    this.loadMessagesData();
  }

  loadSummaryData() {
    fetch('/stats/summary')
      .then(response => response.json())
      .then(response => {
        let summary = response.data;
        this.setState({summary})
      });
  }

  loadChartsData() {
    fetch('/stats/charts')
      .then(response => response.json())
      .then(response => {
        let charts = response.data;
        this.setState({charts})
      });
  }

  loadSalesData() {
    fetch('/stats/sales')
      .then(response => response.json())
      .then(response => {
        let sales = response.data;
        this.setState({sales})
      });
  }

  loadMessagesData() {
    fetch('/messages')
      .then(response => response.json())
      .then(response => {
        let messages = response.data;
        this.setState({messages})
      });
  }

  render() {
    return (
      <div className="container-fluid px-5 mt-5 mb-4">

        <div className="row">

          <div className="col-xl-3 col-lg-6">
            <Widget header='Income' className='headerline-danger small shadow-01' badge={this.state.summary.income.badge}>
              <Stat header={this.state.summary.income.header} excerpt={this.state.summary.income.excerpt}/>
            </Widget>
          </div>

          <div className="col-xl-3 col-lg-6">
            <Widget header='Visits' className='headerline-danger small shadow-01' badge={this.state.summary.visits.badge}>
              <Stat header={this.state.summary.visits.header} excerpt={this.state.summary.visits.excerpt}/>
            </Widget>
          </div>

          <div className="col-xl-3 col-lg-6">
            <Widget header='Orders' className='headerline-danger small shadow-01' badge={this.state.summary.orders.badge}>
              <Stat header={this.state.summary.orders.header} excerpt={this.state.summary.orders.excerpt}/>
            </Widget>
          </div>

          <div className="col-xl-3 col-lg-6">
            <Widget header='New Accounts' className='headerline-danger small shadow-01' badge={this.state.summary.new_accounts.badge}>
              <Stat header={this.state.summary.new_accounts.header} excerpt={this.state.summary.new_accounts.excerpt}/>
            </Widget>
          </div>

        </div>

        <div className="row">

          <div className="col-lg-12">
            <Widget header='Sales' className='shadow-01' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'>
              <div className="row">
                <div className="col-lg-8 py-3 my-3">
                  <Bar
                    data={this.state.charts.barChart}
                    options={this.state.charts.barChart.options}
                    height={80}
                  />
                </div>
                <div className="col-4">
                  <ProgressList data={this.state.sales}/>
                </div>
              </div>
            </Widget>
          </div>

        </div>

        <div className="row">

          <div className="col-xl-4 col-lg-6">
            <Widget header='Incoming Messages' className='shadow-01' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit'>
              <div className="mb-4">
                <h5 className="tab-title">{this.state.messages.length} Notes Received</h5>
              </div>
              <Messages list={this.state.messages}/>
            </Widget>
          </div>

          <div className="col-xl-8 col-lg-6">

            <div className="row">

              <div className="col-lg-12">
                <Widget header='Views' className='shadow-01' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'>
                  <Line
                    data={this.state.charts.lineChart}
                    options={this.state.charts.lineChart.options}
                    height={60}
                  />
                </Widget>
              </div>
            </div>

            <div className="row">

              <div className="col-xl-4 col-md-12">
                <Widget header='Traffic Source' className='shadow-01' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore'>
                  <Doughnut
                    data={this.state.charts.doughnutChart}
                    options={this.state.charts.doughnutChart.options}
                  />
                </Widget>
              </div>

              <div className="col-xl-4 col-md-12">
                <Widget header='Geography' className='shadow-01' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore'>
                  <Pie
                    data={this.state.charts.pieChart}
                    options={this.state.charts.pieChart.options}
                  />
                </Widget>
              </div>

              <div className="col-xl-4 col-md-12">
                <Widget header='Radar Chart' className='shadow-01' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore'>
                  <Radar
                    data={this.state.charts.radarChart}
                    options={this.state.charts.radarChart.options}
                  />
                </Widget>
              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default PageDashboard;
