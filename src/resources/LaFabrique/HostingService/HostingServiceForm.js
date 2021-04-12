import React from 'react';
import {
  AutocompleteArrayInput,
  AutocompleteInput,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  ImageInput
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import MarkdownInput from 'ra-input-markdown';
import { ImageField, ReferenceArrayInput } from '@semapps/semantic-data-provider';

const useStyles = makeStyles({
  inlineBlock: { display: 'inline-flex', marginRight: '1rem' }
});

const HostingServiceForm = props => {
  const classes = useStyles();
  return (
    <SimpleForm initialValues={{ 'oasis:minCapacity': 1 }} {...props}>
      <TextInput source="pair:label" fullWidth />
      <ReferenceInput reference="Oasis" source="pair:offeredBy" fullWidth perPage={250}>
        <AutocompleteInput optionText="pair:label" fullWidth />
      </ReferenceInput>
      <MarkdownInput multiline source="pair:description" fullWidth />
      <ImageInput source="oasis:image" accept="image/*" multiple>
        <ImageField source="src" />
      </ImageInput>
      <ReferenceArrayInput reference="Type" filter={{ a: 'oasis:HostingServiceType' }} source="pair:hasType">
        <AutocompleteArrayInput optionText="pair:label" fullWidth />
      </ReferenceArrayInput>
      <NumberInput source="oasis:minCapacity" formClassName={classes.inlineBlock} />
      <NumberInput source="oasis:maxCapacity" formClassName={classes.inlineBlock} />
      <TextInput source="oasis:price" fullWidth />
      <TextInput
        source="oasis:bookingUrl"
        fullWidth
        helperText="Pour une inscription par email: mailto:adresse@domain.com"
      />
    </SimpleForm>
  );
};

export default HostingServiceForm;
