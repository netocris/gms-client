import { CommonModule } from '@angular/common';

import { storiesOf, moduleMetadata } from '@storybook/angular';

import { HeaderComponent } from './header.component';
import { RouterLinkComponent } from '../../atoms/router-link/router-link.component';
import { ImageComponent } from './../../atoms/image/image.component';
import { ButtonComponent } from './../../atoms/button/button.component';

const stories = storiesOf('Organisms|Footer', module);

stories.addDecorator(
  moduleMetadata({
    declarations: [HeaderComponent, RouterLinkComponent, ImageComponent, ButtonComponent],
    imports: [CommonModule]
  })
);

stories
  .add('default', () => ({
    component: HeaderComponent,
    props: {}
  }));