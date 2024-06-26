import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';

export default function TimePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticTimePicker orientation="landscape" disablePast={true}/>
    </LocalizationProvider>
  );
}
