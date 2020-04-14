import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import axios from 'axios';
// @ts-ignore
import { NotificationManager } from 'react-notifications';

type FlagsState = {
  eventsOn: boolean,
  isHome: boolean,
  errorHappened: boolean
}

const EVENTS_ON_KEY = 'eventsOn';
const IS_HOME_KEY = 'isHome';
const FLAG_KEYS = [EVENTS_ON_KEY, IS_HOME_KEY];
const BASE_URL = 'http://localhost:8080/api/';
const FLAGS_URL = BASE_URL + 'flags/';
const SYSTEM_STATE_URL = BASE_URL + 'systemOn';
class FlagsControl extends Component<{}, FlagsState>{
  public readonly state: Readonly<FlagsState> = {
    isHome: false,
    eventsOn: false,
    errorHappened: false
  }

  componentWillMount() {
    this.fetchFlagValues();
  }

  fetchFlagValues() {
    FLAG_KEYS.forEach(key => {
      axios.get(FLAGS_URL + key)
        .then(res => {
          this.setState({
            ...this.state,
            [key]: res.data
          })
        }).catch(e => {
          if (!this.state.errorHappened) {
            NotificationManager.error('Error while fetching the flag values!', 'Error!');
            this.setState({
              ...this.state,
              errorHappened: true
            });
          }
        });
    });
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
    axios.patch(FLAGS_URL + event.target.name, {
      value: event.target.checked
    }).catch(e => {
      NotificationManager.error('Flag value has not been updated!', 'Error!');
    }).then(() => {
      axios.get(SYSTEM_STATE_URL).then((res) => {
        if (res.data) {
          NotificationManager.success('Doorbell system is on!', 'Success!');
        }
      });
      this.fetchFlagValues();
    });

  };

  render() {
    return (<FormGroup>
      <Grid container justify="center">
        <FormControlLabel
          control={<Switch checked={this.state.eventsOn} onChange={this.handleChange} name="eventsOn" />}
          label="Events"
          labelPlacement="bottom"
        />
        <FormControlLabel
          control={
            <Switch
              checked={this.state.isHome}
              onChange={this.handleChange}
              name="isHome"
              color="primary"
              disabled={this.state.eventsOn}
            />
          }
          label="Home"
          labelPlacement="bottom"
        />
      </Grid>
    </FormGroup>);
  }
}
export default FlagsControl