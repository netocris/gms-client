import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action} from '@storybook/addon-actions';

import { InputNumberComponent } from './input-number.component';

storiesOf('Atoms|Input Number', module)
  .addDecorator(
    moduleMetadata({
      declarations: [InputNumberComponent]
    })
  )
  .add('default', () => ({
    component: InputNumberComponent,
    props: {}
  }))
  .add('with action', () => ({
    template: `<app-input-number></app-input-number>`,
    props: {      
      outputEventEmmitter: action('outputEventEmmitter')
    }
  }));