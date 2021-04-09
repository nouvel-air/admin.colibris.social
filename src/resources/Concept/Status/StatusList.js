import React from 'react';
import { List, SimpleList } from 'react-admin';
import LanguageIcon from '@material-ui/icons/Language';

const StatusList = props => (
  <List perPage={25} {...props}>
    <SimpleList
      primaryText={record => record['pair:label']}
      secondaryText={record => record.type}
      leftAvatar={() => <LanguageIcon />}
    />
  </List>
);

export default StatusList;
