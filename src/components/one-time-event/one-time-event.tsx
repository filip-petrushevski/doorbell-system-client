import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDateTimePicker
} from '@material-ui/pickers';

function OneTimeEvent() {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    return (<>
        <h2>One time event</h2>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardDateTimePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy hh:mm"
                    margin="normal"
                    id="date-picker-inline"
                    label="Event starts on"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <KeyboardDateTimePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy hh:mm"
                    margin="normal"
                    id="date-picker-inline"
                    label="Event ends on"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    </>);
}
export default OneTimeEvent