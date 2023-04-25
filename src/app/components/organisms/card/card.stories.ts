import { CommonModule } from '@angular/common';

import { storiesOf, moduleMetadata } from '@storybook/angular';
import { text, withKnobs } from '@storybook/addon-knobs';

import { CardComponent } from './card.component';
import { CardHeaderComponent } from './../../molecules/card-header/card-header.component';
import { CardBodyComponent } from './../../molecules/card-body/card-body.component';


const stories = storiesOf('Organisms|Card', module);

/* required by customization */
stories.addDecorator(withKnobs);
stories.addDecorator(
  moduleMetadata({
    declarations: [CardComponent, CardHeaderComponent, CardBodyComponent],
    imports: [CommonModule]
  })
);

stories
  .add('default', () => ({
    component: CardComponent,
    props: {}
  }))
  .add('with text', () => ({  
    template: `<app-card [title]="title" [content]="content"></app-card>`,
    props: {
      title: 'card custom title',
      content: 'card custom content'
    }
  }))
  .add('customization', () => ({
    component: CardComponent,
    props: {
      title: text('title', 'card title'),
      content: text('content', 'card content ...')
    }
  }));