import { CommonModule } from '@angular/common';

import { storiesOf, moduleMetadata } from '@storybook/angular';
import { number, withKnobs } from '@storybook/addon-knobs';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToggleLinkComponent } from './../../atoms/toggle-link/toggle-link.component';
import { PaginationComponent } from './pagination.component';


const stories = storiesOf('Organisms|Card', module);

/* required by customization */
stories.addDecorator(withKnobs);
stories.addDecorator(
  moduleMetadata({
    declarations: [PaginationComponent, ToggleLinkComponent, NgbModule],
    imports: [CommonModule]
  })
);

stories
  .add('default', () => ({
    component: PaginationComponent,
    props: {}
  }))
  .add('with text', () => ({  
    template: `<app-pagination></app-pagination>`,
    props: {}
  }))
  .add('customization', () => ({
    component: PaginationComponent,
    props: {
      page: number('page', 1),
      pageSize: number('pageSize', 5)
    }
  }));