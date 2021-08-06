import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('05:00', 8),
  createData('06:00', 10),
  createData('07:00', 5),
  createData('08:00', 8),
  createData('09:00', 7),
  createData('10:00', 11),
  createData('11:00', 2),
  createData('12:00', 15),

];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
   
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}