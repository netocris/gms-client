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
    template: `<app-image></app-image>`,
    props: {
    }
  }));

  storiesOf('Atoms|Image', module)
  .addDecorator(withKnobs)
  .add('customization', () => ({
    component: ImageComponent,
    props: {
      src_: text('src_', 'assets/images/user.png'),
      title_: text('title_', 'the user image'),      
      alt_: text('alt_', 'user image'),
    }
  }));