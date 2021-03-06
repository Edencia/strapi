import React from 'react';
import { FormattedMessage } from 'react-intl';

const DocumentationSection = () => (
  <ul style={{ marginTop: '20px' }}>
    <li style={{ marginLeft: '4.5rem' }}>
      <FormattedMessage id="content-type-builder.menu.section.documentation.guide" />
      &nbsp;
      <FormattedMessage id="content-type-builder.menu.section.documentation.guideLink">
        {message => (
          <a
            href="http://strapi.io/documentation/3.0.0-beta.x/guides/models.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            {message}
          </a>
        )}
      </FormattedMessage>
    </li>
  </ul>
);

export default DocumentationSection;
