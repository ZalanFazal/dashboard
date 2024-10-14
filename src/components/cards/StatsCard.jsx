import { Card, CardContent, Typography, Box } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Example for an icon

const StatsCard = ({ title, value, change, icon, color }) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* Title */}
          <Typography variant="h6">{title}</Typography>

          {/* Value and Icon */}
          <Box display="flex" alignItems="center">
            {/* Display value with custom color */}
            <Typography variant="h6" color={color} style={{ marginRight: '8px' }}>
              {value}
            </Typography>
            {/* Optional icon */}
            {icon && icon}
          </Box>
        </Box>

        {/* Change Indicator */}
        {change && (
          <Box display="flex" alignItems="center" style={{ marginTop: '8px' }}>
            <ArrowUpwardIcon color="success" style={{ marginRight: '4px' }} /> {/* Arrow icon indicating change */}
            <Typography variant="body2" color="textSecondary">{change}</Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
