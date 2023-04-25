import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action} from '@storybook/addon-actions';
import { text, boolean, withKnobs } from '@storybook/addon-knobs';

import { ButtonComponent } from './button.component';

storiesOf('Atoms|Button', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ButtonComponent]
    })
  )
  .add('default', () => ({
    component: ButtonComponent,
    props: {}
  }))
  .add('disabled', () => ({
    template: `<app-button [disabled]="disabled"></app-button>`,
    props: {      
      disabled: true
    }
  }))
  .add('with action', () => ({
    template: `<app-button (eventEmmitter)="eventEmmitter($event)"></app-button>`,
    props: {
      eventEmmitter: action('eventEmmitter')
    }
  }));

storiesOf('Atoms|Button', module)
  .addDecorator(withKnobs)
  .add('customization', () => ({
    component: ButtonComponent,
    props: {
      valueModel: text('valueModel', 'valueModel'),
      disabled: boolean('disabled', false)      
    }
  }));