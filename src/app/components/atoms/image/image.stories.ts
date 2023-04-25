import { storiesOf, moduleMetadata } from '@storybook/angular';
import { text, withKnobs } from '@storybook/addon-knobs';

import { ImageComponent } from './image.component';

storiesOf('Atoms|Image', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ImageComponent]
    })
  )
  .add('default', () => ({
    component: ImageComponent,
    props: {}
  }))
  .add('user', () => ({
    template: `<app-image [src]="src" [title]="title" [title]="title"></app-image>`,
    props: {
      src: 'assets/images/user.png',
      title: 'the user image',
      alt: 'user image'
    }
  }));

  storiesOf('Atoms|Image', module)
  .addDecorator(withKnobs)
  .add('customization', () => ({
    component: ImageComponent,
    props: {
      src: text('src', 'assets/images/user.png'),
      title: text('title', 'the user image'),      
      alt: text('alt', 'user image'),
    }
  }));