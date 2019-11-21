import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import useStyles from './FiltersStyles';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import { labelTransform } from 'utils';

const theme = createMuiTheme({
  palette: {
    primary: yellow,
  },
});

const Filters = ({options, setFilters, resetDataFilters}) => {
  const [filters, changeFilters] = useState({
    device_type: 'any',
    activation_status: 'any',
    place_id: 'any',
    protocol:'any'
  });

  const classes = useStyles();

  const handleChange = name => event => {
    const { value } = event.target;
    if(value === 'parking sensor') {
      changeFilters(prevProps => ({
        ...prevProps,
        [name] : 'parking_sensor'
      }));
    }
    else if(value === 'other sensor') {
      changeFilters(prevProps => ({
        ...prevProps,
        [name] : 'other_sensor'
      }));
    } else if(value === "without") {
      changeFilters(prevProps => ({
        ...prevProps,
        [name] : null
      }));
    } else {
    changeFilters(prevProps => ({
      ...prevProps,
      [name] : value
    }));
  }
  }

  const applyFilters = (e) => {
    e.preventDefault(); 
    setFilters(filters);
  };
  const resetFilters = () => {
    changeFilters({
      device_type: 'any',
      activation_status: 'any',
      place_id: 'any',
      protocol:'any'
    });
    resetDataFilters(true);
  }
  
  return (
    <div className={classes.container}>
      <form onSubmit={applyFilters} className={classes.root} >
        {options.map(option =>(
          <div key={option.name} className={classes.selectBox}>
          <InputLabel 
            className={classes.label} 
            htmlFor={option.name}
          >
            {labelTransform(option.name)}
          </InputLabel>
            <Select 
              className={classes.select} 
              onChange={handleChange(option.name)}
              native
            >
              {option.options.map((itemForSelect, i) => {
                return (
                <option 
                  className={classes.option}
                  key={i} 
                  selected={itemForSelect === filters[option.name]}
                >
                  {itemForSelect}
                </option>
              )})} 
            </Select>
            </div>
          ))
          }
        <ThemeProvider theme={theme}>
          <div className={classes.buttonBox}>
          <Button 
            variant="contained" 
            type='submit' 
            color="primary" 
            className={classes.button}
          >
            Apply
          </Button>
          <Button 
            variant="contained" 
            onClick={resetFilters} 
            className={classes.button}
          >
            Reset
          </Button>
          </div>
        </ThemeProvider>
      </form>
    </div>
  )
}
export default Filters;