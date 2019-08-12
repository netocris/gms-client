import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action} from '@storybook/addon-actions';
import { text, boolean, withKnobs } from '@storybook/addon-knobs';
import { ButtonComponent } from './button.component';

storiesOf('Components|Button', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ButtonComponent]
    })
  )
  .add('default', () => ({
    template: `<app-button [buttonValue]="buttonValue"></app-button>`,
    props: {
      buttonValue: 'default'
    }
  }))
  .add('disabled', () => ({
    template: `<app-button [buttonValue]="buttonValue" [disabled]="disabled"></app-button>`,
    props: {
      buttonValue: 'disabled',
      disabled: true
    }
  }))
  .add('with action', () => ({
    template: `<app-button [buttonValue]="buttonValue" [disabled]="disabled" (eventEmmitter)="eventEmmitter($event)"></app-button>`,
    props: {
      buttonValue: 'with action',
      disabled: false,
      eventEmmitter: action('eventEmmitter')
    }
  }));

storiesOf('Components|Button', module)
  .addDecorator(withKnobs)
  .add('customization', () => ({
    component: ButtonComponent,
    props: {
      buttonValue: text('buttonValue', 'Click'),
      disabled: boolean('disabled', false)      
    }
  }));