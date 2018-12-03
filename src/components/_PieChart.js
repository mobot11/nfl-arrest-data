import React from 'react';
import {PieChart, Pie, Legend, Tooltip, ResponsiveContainer} from 'recharts';
import PropTypes from 'prop-types';

const ArrestPieChart = ({ data }) => {
  console.log(data);
  return (
    <div className="pie-chart-container">
      <ResponsiveContainer width={800} height={400}>
        <PieChart>
          <Pie dataKey="value" isAnimationActive={false} data={data} outerRadius={100} fill="#8884d8" label/>
          <Tooltip/>
      </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

PieChart.propTypes = {};

export default ArrestPieChart;
