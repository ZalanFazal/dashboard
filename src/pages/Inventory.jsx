import React from 'react'; // Import React
import { Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper } from "@mui/material";
import AddInventoryItem from '../components/AddInventoryItem'; // Ensure this import path is correct
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/inventory/inventorySlice'; // Ensure the path is correct

const Inventory = () => {
  // useSelector and useDispatch hooks should be inside the component
  const inventoryItems = useSelector((state) => state.inventory.items);
  const dispatch = useDispatch();

  const handleAddItem = (newItem) => {
    dispatch(addItem(newItem)); // Dispatch the action with the new item
    setInventoryItems((prevItems) => [...prevItems, newItem]); // Update state with new item

  };

  return (
    <div style={{ padding: '1rem' }}>
      <Typography variant="h4" gutterBottom>
        Inventory
      </Typography>
      <AddInventoryItem onAddItem={handleAddItem} /> {/* Form to add new items */}
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventoryItems.map((item) => ( // Use the state variable here
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>${item.price}</TableCell>
              </TableRow>
            ))}
            {/* Changes is madeeee */}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Inventory;
