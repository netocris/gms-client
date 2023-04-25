import { storiesOf, moduleMetadata } from '@storybook/angular';

import { text, withKnobs } from '@storybook/addon-knobs';

import { CardHeaderComponent } from './card-header.component';

storiesOf('Molecules|Card Header', module)
  .addDecorator(
    moduleMetadata({
      declarations: [CardHeaderComponent]
    })
  )
  .add('default', () => ({
    tcomponent: CardHeaderComponent,
    props: {}
  }))
  .add('text', () => ({
    template: `<app-card-header [valueModel]="valueModel"></app-card-header>`,
    props: {
      valueModel: 'some text'
    }
  }));

  storiesOf('Molecules|Card Header', module)
  .addDecorator(withKnobs)
  .add('customization', () => ({
    component: CardHeaderComponent,
    props: {
      valueModel: text('valueModel', 'write some text')
    }
  }));