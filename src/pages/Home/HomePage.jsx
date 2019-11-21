import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet-async';
import { setFilters, resetFilters } from 'ducks/actions/filters';
import  { getDevices } from 'ducks/actions/device-data';
import Filters from 'components/Filters/FiltersComponent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { options } from 'utils';

// styles
import useStyles from './HomeStyles';

const Home = ({setFilters, filters, getDevices, devices, resetFilters}) => {
  const classes = {
    ...useStyles(),
  };
  useEffect(() => {
    getDevices()
  }, [])
  const filteredDevices = devices && devices.filter(obj => {
    return (obj.device_type === filters.device_type || filters.device_type === "any" )
      && ((obj.activation_status && filters.activation_status === 'active') 
        || (!obj.activation_status && filters.activation_status === 'deactive') 
          || filters.activation_status === "any")
      && (obj.protocol === +filters.protocol || filters.protocol === "any")
      &&( obj.place_id === +filters.place_id || filters.place_id === "any" 
        || (!obj.place_id && !filters.place_id) )
    && obj       
  });
  return(
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
        {devices.length === 0 ? <CircularProgress size={60} className={classes.loader} /> :
        (<Paper className={classes.root}>
          <Filters options={options} setFilters={setFilters} resetDataFilters={resetFilters} />
          
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Device ID</TableCell>
                <TableCell align="center">Device type</TableCell>
                <TableCell align="center">Place ID</TableCell>
                <TableCell align="center">Activation status</TableCell>
                <TableCell align="center">Damaged Status</TableCell>
                <TableCell align="center">Protocol</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredDevices.map(row => (
                <TableRow key={row.device_id}>
                  <TableCell component="th" scope="row">
                    {row.device_id}
                  </TableCell>
                  <TableCell align="center">{row.device_type}</TableCell>
                  <TableCell align="center">{row.place_id || "-"}</TableCell>
                  <TableCell align="center">{row.activation_status ? 'Active' : 'Deactivate' }</TableCell>
                  <TableCell align="center">{row.damaged_status ? 'Damaged' : "Working"}</TableCell>
                  <TableCell align="center">{row.protocol}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters,
  devices: state.devices
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setFilters, 
  getDevices,
  resetFilters   
}, dispatch);

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home);
