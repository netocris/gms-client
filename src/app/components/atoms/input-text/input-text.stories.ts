import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action} from '@storybook/addon-actions';

import { InputTextComponent } from './input-text.component';

storiesOf('Atoms|Input Text', module)
  .addDecorator(
    moduleMetadata({
      declarations: [InputTextComponent]
    })
  )
  .add('default', () => ({
    component: InputTextComponent,
    props: {}
  }))  
  .add('with action', () => ({
    template: `<app-input-text></app-input-text>`,
    props: {      
      outputEventEmmitter: action('outputEventEmmitter')
    }
  }));