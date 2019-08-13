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
    template: `<app-card-header></app-card-header>`,
    props: {      
    }
  }))
  .add('text', () => ({
    template: `<app-card-header [value_]="value_"></app-card-header>`,
    props: {
      value_: 'some text'
    }
  }));

  storiesOf('Molecules|Card Header', module)
  .addDecorator(withKnobs)
  .add('customization', () => ({
    component: CardHeaderComponent,
    props: {
      value_: text('value_', 'write some text')
    }
  }));