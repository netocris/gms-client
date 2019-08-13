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
    template: `<app-button [value_]="value_"></app-button>`,
    props: {
      value_: 'Click me'
    }
  }))
  .add('disabled', () => ({
    template: `<app-button [value_]="value_" [disabled_]="disabled_"></app-button>`,
    props: {
      value_: 'Disabled',
      disabled_: true
    }
  }))
  .add('with action', () => ({
    template: `<app-button [value_]="value_" [disabled_]="disabled_" (eventEmmitter)="eventEmmitter($event)"></app-button>`,
    props: {
      value_: 'with action',
      disabled_: false,
      eventEmmitter: action('eventEmmitter')
    }
  }));

storiesOf('Atoms|Button', module)
  .addDecorator(withKnobs)
  .add('customization', () => ({
    component: ButtonComponent,
    props: {
      value_: text('value_', 'Click me'),
      disabled_: boolean('disabled_', false)      
    }
  }));