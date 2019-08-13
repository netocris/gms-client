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
    template: `<app-input-number [value_]="value_" [placeHolder_]="placeHolder_"></app-input-number>`,
    props: {
      value_: 100,
      placeHolder_: 'input number'
    }
  }))
  .add('with action', () => ({
    template: `<app-input-number></app-input-number>`,
    props: {      
      outputEventEmmitter: action('outputEventEmmitter')
    }
  }));