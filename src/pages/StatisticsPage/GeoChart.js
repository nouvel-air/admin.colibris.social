import React, { useState, useMemo } from 'react';
import { makeStyles, Popover, Typography } from '@material-ui/core';
import { VectorMap } from '@south-paw/react-vector-maps';
import franceDepartments from './france-departments.json';

const heatMap = {
  '#c92500': 20,
  '#c94600': 15,
  '#c96b00': 10,
  '#c99000': 5,
  '#c9b800': 3,
  '#bdc900': 0,
};

const useStyles = makeStyles((theme) => ({
  map: ({ data }) => {
    const fillByDepartment = data && Object.fromEntries(
      Object.entries(data).map(([id, number]) => {
        return([
          `&[id="fr-${`${id}`.padStart(2, '0')}"]`,
          { fill: Object.keys(heatMap).find(color => number > heatMap[color]) }
        ])
      })
    );
    return ({
      stroke: '#fff',
      strokeWidth: 0.5,
      '& path': {
        fill: '#bdc900',
        cursor: 'pointer',
        outline: 'none',
        '&:hover': {
          fill: '#6daadc !important',
        },
        ...fillByDepartment
      }
    });
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

const GeoChart = ({ subscriptions }) => {
  const data = useMemo(() => {
    return subscriptions.reduce((acc, s) => {
      if( s.zipCode ) {
        const departmentNumber = parseInt(s.zipCode.substring(0,2), 10);
        if( acc[departmentNumber] ) {
          acc[departmentNumber]++;
        } else {
          acc[departmentNumber] = 1;
        }
      }
      return acc;
    }, {});
  }, [subscriptions]);

  const classes = useStyles({ data });

  const [anchorEl, setAnchorEl] = useState(null);
  const [departmentName, setDepartmentName] = useState(null);
  const [departmentNumber, setDepartmentNumber] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setDepartmentName(event.target.attributes.name.value);
    setDepartmentNumber(event.target.attributes.id.value.substring(3))
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return(
    <>
      <VectorMap
        {...franceDepartments}
        className={classes.map}
        layerProps={{
          onMouseEnter: (event) => handlePopoverOpen(event),
          onMouseLeave: (event) => handlePopoverClose(event)
        }}
      />
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography><strong>{departmentName}</strong></Typography>
        <Typography>{data[departmentNumber] || 0} abonné(s)</Typography>
      </Popover>
    </>
  )
};

export default GeoChart;
