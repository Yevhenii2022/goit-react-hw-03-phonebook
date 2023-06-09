import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import InputAdornment from '@mui/material/InputAdornment';

export class Filter extends Component {
  static propTypes = {
    setFilter: PropTypes.func.isRequired,
  };
  state = {
    value: '',
  };

  handleInputChange = ({ target }) => {
    this.setState({ value: target.value });
    this.props.setFilter(target.value.toLowerCase().trim());
  };

  render() {
    return (
      <div>
        <TextField
          style={{
            width: 300,
          }}
          variant="outlined"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
          InputLabelProps={{ shrink: true }}
          placeholder="find a contact by name"
          aria-describedby="find a contact by name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonSearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
    );
  }
}
