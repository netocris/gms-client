import { storiesOf, moduleMetadata } from '@storybook/angular';

import { text, withKnobs } from '@storybook/addon-knobs';

import { CardBodyComponent } from './card-body.component';

storiesOf('Molecules|Card Body', module)
  .addDecorator(
    moduleMetadata({
      declarations: [CardBodyComponent]
    })
  )
  .add('default', () => ({
    template: `<app-card-body></app-card-body>`,
    props: {      
    }
  }))
  .add('text', () => ({
    template: `<app-card-body [value_]="value_"></app-card-body>`,
    props: {
      value_: 'some text'
    }
  }));

  storiesOf('Molecules|Card Body', module)
  .addDecorator(withKnobs)
  .add('customization', () => ({
    component: CardBodyComponent,
    props: {
      value_: text('value_', 'write some text')
    }
  }));