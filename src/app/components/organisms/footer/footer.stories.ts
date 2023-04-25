import { CommonModule } from '@angular/common';

import { storiesOf, moduleMetadata } from '@storybook/angular';

import { FooterComponent } from './footer.component';
import { LinkComponent } from './../../atoms/link/link.component';
import { RouterLinkComponent } from './../../atoms/router-link/router-link.component';

const stories = storiesOf('Organisms|Footer', module);

stories.addDecorator(
  moduleMetadata({
    declarations: [FooterComponent, LinkComponent, RouterLinkComponent],
    imports: [CommonModule]
  })
);

stories
  .add('default', () => ({
    component: FooterComponent,
    props: {}
  }));