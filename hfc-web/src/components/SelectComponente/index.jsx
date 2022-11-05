import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Select, { SelectChangeEvent } from '@mui/material/Select';


export const SelectComponente = ({dadosSelect, inputLabel, value, handleChange, maxWithSelect = 400, minWidthSelect = 120 }) => {

  // const [age, setAge] = React.useState('');

  // const handleChange = (event: SelectChangeEvent) => {
  //   // setAge(event.target.value);
  //   console.log(event.target.value);
  // };

  return (
    <>
      <Box sx={{ minWidth: minWidthSelect, maxWidth: {maxWithSelect} }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{inputLabel}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label={inputLabel}
            onChange={handleChange}
          >
            {dadosSelect.map(item => {
              return <MenuItem value={item.codigo}>{`${item.codigo} - ${item.descricao}`}</MenuItem>
            })}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
