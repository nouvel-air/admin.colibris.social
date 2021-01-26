import React from 'react';
import { Layout } from 'react-admin';
import ColibrisAppBar from './ColibrisAppBar';
import ColibrisMenu from './ColibrisMenu';

const ColibrisLayout = props => <Layout {...props} appBar={ColibrisAppBar} menu={ColibrisMenu} />;

export default ColibrisLayout;
