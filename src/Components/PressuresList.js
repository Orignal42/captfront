import React from "react";
import "../App.css";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

class PressuresList extends React.Component {
    // Permet de récupérer l'api
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    fetch(`http://127.0.0.1:8000/api/pressures/all`)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        this.setState({
          datas: json,
        });
      });
  }

  render() {
    const { datas } = this.state;
    return (
      <>
            {/* permet de retourner l'api et de transformer en graphique */}
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            data={datas}
            dataKey="bar"
            margin={{ left: 50, right: 300, top: 30 }}
          >
            <CartesianGrid />
            <XAxis
              dataKey="id"
              interval={"preserveStartEnd"}
              domain={["datmax", "max"]}
            />
            <YAxis></YAxis>
            <Legend />
            <Tooltip />
            <Line dataKey="bar" stroke="red" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  }
}

export default PressuresList;
