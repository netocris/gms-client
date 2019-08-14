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
    component: LinkComponent,
    props: {}
  }))
  .add('url', () => ({
    template: `<app-link [valueModel]="valueModel" [url]="url" [target]="target"></app-link>`,
    props: {
      valueModel: 'Google',
      url: 'http://www.google.com',
      target: true
    }
  }))
  .add('target', () => ({
    template: `<app-link [valueModel]="valueModel" [url]="url" [target]="target"></app-link>`,
    props: {
      valueModel: 'Google',
      url: 'http://www.google.com',
      target: true
    }
  }));

storiesOf('Atoms|Link', module)
  .addDecorator(withKnobs)
  .add('customization', () => ({
    component: LinkComponent,
    props: {
      valueModel: text('valueModel', 'Google'),
      url: text('url', 'http://www.google.com'),
      target: boolean('target', false)      
    }
  }));