import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectGroupProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const SelectGroup: React.FC<SelectGroupProps> = ({ value, setValue }) => {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(Number(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">Period</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={`${value}`}
          label={'Period'}
          onChange={handleChange}
        >
          <MenuItem value={1}>1 day</MenuItem>
          <MenuItem value={7}>7 days</MenuItem>
          <MenuItem value={14}>14 days</MenuItem>
          <MenuItem value={30}>30 days</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectGroup;
