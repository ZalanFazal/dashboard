import React from 'react';
import { Grid, Card, CardContent, Typography } from "@mui/material";
import LineChart from "../components/charts/LineChart";
import InfoCard from "../components/cards/InfoCard";
import PieChartComponent from "../components/PieChartComponent"; // Import the PieChart component
import { useSelector } from "react-redux"; // Import useSelector

const Dashboard = () => {
  const earnings = useSelector((state) => state.infoCard.earnings);
  const spendThisMonth = useSelector((state) => state.infoCard.spendThisMonth);
  const sales = useSelector((state) => state.infoCard.sales);

  return (
    <div style={{ padding: '2rem', overflow: 'hidden' }}>
      <Typography variant="h4" gutterBottom>
        Main Dashboard
      </Typography>
      <Typography variant="h6" gutterBottom>
        Info Card
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <InfoCard title="Earnings" value={earnings} />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoCard title="Spend this month" value={spendThisMonth} />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoCard title="Sales" value={sales} />
        </Grid>
      </Grid>

      {/* Line Chart */}
      <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        <Grid item xs={12} md={6}>
          <Card style={{ height: '300px' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Weekly Revenue
              </Typography>
              <LineChart />
            </CardContent>
          </Card>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Card style={{ height: '300px' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Sales Distribution
              </Typography>
              <PieChartComponent />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
