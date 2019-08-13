import { storiesOf, moduleMetadata } from '@storybook/angular';

import { ToggleLinkComponent } from './toggle-link.component';

storiesOf('Atoms|Toggle Link', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ToggleLinkComponent]
    })
  )
  .add('default', () => ({
    template: `<app-toggle-link [value_]="value_"></app-toggle-link>`,
    props: {
      value_: 'Click me'
    }
  }))
  .add('url', () => ({
    template: `<app-toggle-link [value_]="value_" [url_]="url_"></app-toggle-link>`,
    props: {
      value_: 'Google',
      url_: 'http://www.google.com'
    }
  }));