import { storiesOf, moduleMetadata } from '@storybook/angular';
import { text, boolean, withKnobs } from '@storybook/addon-knobs';

import { LinkComponent } from './link.component';

storiesOf('Atoms|Link', module)
  .addDecorator(
    moduleMetadata({
      declarations: [LinkComponent]
    })
  )
  .add('default', () => ({
    template: `<app-link [value_]="value_" [target_]="target_"></app-link>`,
    props: {
      value_: 'Click me',
      target_: true
    }
  }))
  .add('url', () => ({
    template: `<app-link [value_]="value_" [url_]="url_" [target_]="target_"></app-link>`,
    props: {
      value_: 'Google',
      url_: 'http://www.google.com',
      target_: true

    }
  }))
  .add('target', () => ({
    template: `<app-link [value_]="value_" [url_]="url_" [target_]="target_"></app-link>`,
    props: {
      value_: 'Google',
      url_: 'http://www.google.com',
      target_: true
    }
  }));

storiesOf('Atoms|Link', module)
  .addDecorator(withKnobs)
  .add('customization', () => ({
    component: LinkComponent,
    props: {
      value_: text('value_', 'Google'),
      url_: text('url_', 'http://www.google.com'),
      target_: boolean('target_', false)      
    }
  }));