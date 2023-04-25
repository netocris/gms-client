import { storiesOf, moduleMetadata } from '@storybook/angular';

import { ToggleLinkComponent } from './toggle-link.component';

storiesOf('Atoms|Toggle Link', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ToggleLinkComponent]
    })
  )
  .add('default', () => ({
    component: ToggleLinkComponent,
    props: {}
  }))
  .add('url', () => ({
    template: `<app-toggle-link [valueModel]="valueModel" [url]="url"></app-toggle-link>`,
    props: {
      valueModel: 'Google',
      url: 'http://www.google.com'
    }
  }));