import React from 'react';
import {
  TextField,
  SimpleShowLayout,
  UrlField,
  RichTextField,
  ImageField
} from 'react-admin';
import { Show, SeparatedListField } from '@semapps/archipelago-layout';
import { ReferenceArrayField } from "@semapps/semantic-data-provider";
import ProductTitle from './ProductTitle';

const ProductShow = props => (
  <Show title={<ProductTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="pair:label" />
      <RichTextField source="pair:comment" />
      <RichTextField source="pair:description" />
      <UrlField source="pair:webPage" />
      <ImageField source="pair:depictedBy" />
      <ReferenceArrayField source="pair:hasTopic" reference="Theme">
        <SeparatedListField link="show">
          <TextField source="pair:label" />
        </SeparatedListField>
      </ReferenceArrayField>
    </SimpleShowLayout>
  </Show>
);

export default ProductShow;
