import React from 'react';
import { AutocompleteArrayInput, AutocompleteInput,  NumberInput, ReferenceInput, SimpleForm, TextInput } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import MarkdownInput from 'ra-input-markdown';
import UriArrayInput from "../../components/UriArrayInput";

const useStyles = makeStyles({
  inlineBlock: { display: 'inline-flex', marginRight: '1rem' }
});

const HostingServiceForm = props => {
  const classes = useStyles();
  return(
    <SimpleForm initialValues={{ 'oasis:minCapacity': 1 }} {...props}>
      <ReferenceInput label="Oasis" reference="Project" source="pair:offeredBy" fullWidth>
        <AutocompleteInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
      </ReferenceInput>
      <MarkdownInput multiline source="pair:description" label="Description" fullWidth />
      <UriArrayInput label="Catégories" reference="HostingServiceType" source="pair:hasType">
        <AutocompleteArrayInput optionText="pair:label" fullWidth />
      </UriArrayInput>
      <NumberInput source="oasis:minCapacity" label="Capacité minimale" formClassName={classes.inlineBlock} />
      <NumberInput source="oasis:maxCapacity" label="Capacité maximale" formClassName={classes.inlineBlock} />
      <TextInput source="oasis:price" label="Prix" fullWidth />
      <TextInput source="oasis:bookingUrl" label="Lien d'inscription" fullWidth helperText="Pour une inscription par email: mailto:adresse@domain.com"/>
    </SimpleForm>
  );
};

export default HostingServiceForm;
