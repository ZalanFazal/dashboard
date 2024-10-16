import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReportIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
// import Products from "../../pages/Products";
const Sidebar = () => {
  return (
    <div style={{ width: '250px', backgroundColor: '#2E3B55',  padding: '16px', color: '#ffffff', height:'100vh'}}>
      <Typography variant="h6" style={{ marginBottom: '20px', textAlign: 'center' }}>
        MY APPLICATION
      </Typography>
      <Divider style={{ backgroundColor: '#ffffff' }} />
      <List>
        <ListItem button component={Link} to="/dashboard" style={{ '&:hover': { backgroundColor: '#3F51B5' } }}>
          <ListItemIcon style={{ color: '#ffffff' }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" style={{ color: '#ffffff' }} />
        </ListItem>

        <ListItem button component={Link} to="/inventory" style={{ '&:hover': { backgroundColor: '#3F51B5' } }}>
          <ListItemIcon style={{ color: '#ffffff' }}>
            <InventoryIcon />
          </ListItemIcon>
          <ListItemText primary="Inventory" style={{ color: '#ffffff' }} />
        </ListItem>

        <ListItem button component={Link} to="/reports" style={{ '&:hover': { backgroundColor: '#3F51B5' } }}>
          <ListItemIcon style={{ color: '#ffffff' }}>
            <ReportIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" style={{ color: '#ffffff' }} />
        </ListItem>

        <ListItem button component={Link} to="/settings" style={{ '&:hover': { backgroundColor: '#3F51B5' } }}>
          <ListItemIcon style={{ color: '#ffffff' }}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" style={{ color: '#ffffff' }} />
        </ListItem>
      </List>
      
      <ListItem button component={Link} to="/filtermethod" style={{ '&:hover': { backgroundColor: '#3F51B5' } }}>
          <ListItemIcon style={{ color: '#ffffff' }}>
            <ReportIcon />
          </ListItemIcon>
          <ListItemText primary="filtermethod" style={{ color: '#ffffff' }} />
        </ListItem>
        
    </div>
  );
};

export default Sidebar;
