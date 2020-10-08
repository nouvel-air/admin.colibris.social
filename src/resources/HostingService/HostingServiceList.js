import React from 'react';
import {
  List,
  Datagrid,
  EditButton,
  TextField,
  ReferenceField,
  useAuthenticated,
  SingleFieldList,
  ChipField
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import UriArrayField from '../../components/UriArrayField';

const useStyles = makeStyles({
  max3Lines: {
    display: 'block',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
    overflow: 'hidden',
    maxHeight: '4.2em'
  }
});

export const HostingServiceList = props => {
  useAuthenticated();
  const classes = useStyles();
  return (
    <List title="Offres d'hébergement" perPage={25} {...props}>
      <Datagrid rowClick="edit">
        <ReferenceField label="Oasis" source="pair:offeredBy" reference="Project">
          <TextField source="pair:label" />
        </ReferenceField>
        <TextField source="pair:description" label="Description" className={classes.max3Lines} />
        <UriArrayField reference="HostingServiceType" source="pair:hasType" label="Catégories">
          <SingleFieldList>
            <ChipField source="pair:label" />
          </SingleFieldList>
        </UriArrayField>
        <EditButton basePath="/HostingService" />
      </Datagrid>
    </List>
  );
};

export default HostingServiceList;
