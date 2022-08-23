import "./styles.css";
import { CanvasJSChart } from "canvasjs-react-charts";

var React = require("react");
var Component = React.Component;

var dataPoints = [
  0,
  1,
  7,
  11,
  14,
  19,
  22,
  28,
  29,
  33,
  36,
  39,
  42,
  47,
  48,
  51,
  54,
  56,
  59,
  59
];
class App extends Component {
  render() {
    const options = {
      theme: "light2",
      title: {
        text: "Salary Progression of a person"
      },
      axisY: {
        title: "Salary in USD",
        prefix: "$"
      },
      data: [
        {
          type: "line",
          yValueFormatString: "$#,##0.00",
          dataPoints: dataPoints
        }
      ]
    };
    return (
      <div>
        <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
      </div>
    );
  }

  componentDidMount() {
    var chart = this.chart;
    chart.render();
  }
}
module.exports = App;
