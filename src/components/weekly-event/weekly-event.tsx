import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from '@material-ui/pickers';


function WeeklyEvent() {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
      new Date('1970-01-01T18:00:00'),
    );
  
    const handleDateChange = (date: Date | null) => {
      setSelectedDate(date);
    };

    return (<MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardTimePicker
            variant="inline"
            ampm={false}
            margin="normal"
            id="time-picker"
            label="Event starts at"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
          <KeyboardTimePicker
            variant="inline"
            ampm={false}
            margin="normal"
            id="time-picker"
            label="Event ends at"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>);
}
export default WeeklyEvent;