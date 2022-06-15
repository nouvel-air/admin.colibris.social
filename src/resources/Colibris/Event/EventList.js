import React from 'react';
import { Datagrid, TextField, ShowButton } from 'react-admin';
import { MultiViewsList } from "@semapps/archipelago-layout";
import { MapList } from "@semapps/geo-components";
import { CalendarList } from '@semapps/date-components';
import frLocale from '@fullcalendar/core/locales/fr';
import ListIcon from "@material-ui/icons/List";
import MapIcon from "@material-ui/icons/Map";
import EventIcon from '@material-ui/icons/Event';

const EventList = props => (
  <MultiViewsList
    views={{
      calendar: {
        label: 'Calendrier',
        icon: EventIcon,
        perPage: 1000,
        pagination: false,
        list: (
          <CalendarList
            locale={frLocale}
            label="pair:label"
            startDate="pair:startDate"
            endDate="pair:endDate"
            linkType="show"
          />
        )
      },
      list: {
        label: 'Liste',
        icon: ListIcon,
        sort: { field: 'pair:label', order: 'ASC' },
        perPage: 25,
        list:
          <Datagrid rowClick="show">
            <TextField source="pair:label" />
            <ShowButton />
          </Datagrid>
      },
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
    }}
    {...props}
  />
);

export default EventList;
