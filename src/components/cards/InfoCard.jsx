import { Card, CardContent, Typography } from "@mui/material";

const InfoCard = ({ title, value }) => {

  
  return (
    <Card>

      <CardContent sx={{grid:1} } >
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" color="primary">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
