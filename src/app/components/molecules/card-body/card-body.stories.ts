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
    component: CardBodyComponent,
    props: {}
  }))
  .add('text', () => ({
    template: `<app-card-body [valueModel]="valueModel"></app-card-body>`,
    props: {
      valueModel: 'some text'
    }
  }));

  storiesOf('Molecules|Card Body', module)
  .addDecorator(withKnobs)
  .add('customization', () => ({
    component: CardBodyComponent,
    props: {
      valueModel: text('valueModel', 'write some text')
    }
  }));