import React from 'react';
import { FilterList, FilterListItem, FilterLiveSearch } from 'react-admin';
import { Card as MuiCard, CardContent, withStyles } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';

const Card = withStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: '15em',
      marginLeft: '1em',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))(MuiCard);

const SupportedByFilter = () => (
  <FilterList label="app.filters.supportedBy" icon={<GroupIcon />}>
    <FilterListItem
      label="La Fabrique des Colibris"
      value={{ 'pair:supportedBy': process.env.REACT_APP_MIDDLEWARE_URL + 'services/lafabrique' }}
    />
    <FilterListItem
      label="Colibris Pays Creillois"
      value={{ 'pair:supportedBy': process.env.REACT_APP_MIDDLEWARE_URL + 'groups/60-pays-creillois' }}
    />
    <FilterListItem
      label="Colibris du Compiégnois"
      value={{ 'pair:supportedBy': process.env.REACT_APP_MIDDLEWARE_URL + 'groups/60-compiegnois' }}
    />
  </FilterList>
);

const ProjectFilterSidebar = () => (
  <Card>
    <CardContent>
      <FilterLiveSearch source="q" />
      <SupportedByFilter />
    </CardContent>
  </Card>
);

export default ProjectFilterSidebar;
