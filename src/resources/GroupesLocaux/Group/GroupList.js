import React from 'react';
import { Datagrid, TextField, ShowButton } from 'react-admin';
import { MultiViewsList } from "@semapps/archipelago-layout";
import MapIcon from "@material-ui/icons/Map";
import { MapList } from "@semapps/geo-components";
import ListIcon from "@material-ui/icons/List";

const GroupList = props => (
  <MultiViewsList
    views={{
      map: {
        label: 'Carte',
        icon: MapIcon,
        perPage: 1000,
        pagination: false,
        list:
          <MapList
            latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude'] }
            longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude'] }
            label={record => record['pair:label']}
            description={record => record['pair:description']}
            scrollWheelZoom
          />
      },
      list: {
        label: 'Liste',
        icon: ListIcon,
        sort: { field: 'pair:label', order: 'ASC' },
        perPage: 25,
        list:
          <Datagrid rowClick="show">
            <TextField source="name" />
            <TextField source="preferredUsername" />
            <ShowButton />
          </Datagrid>
      }
    }}
    {...props}
  />
);

export default GroupList;
