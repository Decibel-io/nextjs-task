import React, { ReactNode, useState } from 'react';
import {
  FormControl,
  MenuItem,
  Select as MuiSelect,
  SelectProps,
  Box,
  Typography,
} from '@mui/material';

interface ISelect extends SelectProps {
  onSelectOption?: (option: number | string) => void;
  options?: {
    id?: string | number;
    label: ReactNode;
    value: number | string;
  }[];
  label?: string;
  showNone?: boolean;
  displayRequired?: boolean;
}

function Select({
  value,
  options,
  label = '',
  placeholder,
  showNone = false,
  displayRequired = false,
  onSelectOption,
  error,
  ...props
}: ISelect) {
  const [val, setVal] = useState(value);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          marginY: 1,
        }}
      >
        {label && (
          <Box>
            <Typography>{label}</Typography>
          </Box>
        )}
        <FormControl>
          <MuiSelect
            sx={{
              ...props.sx,
              '.MuiOutlinedInput-notchedOutline': { border: 0 },
            }}
            // variant='standard'
            placeholder={placeholder}
            value={val}
            onChange={(event: any) => {
              const value = event.target.value;
              setVal(value);
              onSelectOption && onSelectOption(value);
            }}
            {...props}
          >
            {showNone && (
              <MenuItem value={'0'}>
                <em>None</em>
              </MenuItem>
            )}
            {options?.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </MuiSelect>
        </FormControl>
      </Box>
      {error && (
        <Typography
          variant='subtitle1'
          color='red'
          sx={{ textAlign: 'center' }}
        >
          Required
        </Typography>
      )}
    </Box>
  );
}
export default Select;
