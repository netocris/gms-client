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
    component: ButtonComponent,
    props: {
      modelValue: 'Click'
    }
  }))
  .add('disabled', () => ({
    template: `<app-button [modelValue]="modelValue" [disabled]="disabled"></app-button>`,
    props: {
      modelValue: 'Click',
      disabled: true
    }
  }))
  .add('with action', () => ({
    template: `<app-button [modelValue]="modelValue" [disabled]="disabled" (eventEmmitter)="eventEmmitter($event)"></app-button>`,
    props: {
      modelValue: 'Click',
      disabled: false,
      eventEmmitter: action('eventEmmitter')
    }
  }));

storiesOf('Components|Button', module)
  .addDecorator(withKnobs)
  .add('customization', () => ({
    component: ButtonComponent,
    props: {
      modelValue: text('modelValue', 'Click'),
      disabled: boolean('disabled', false)      
    }
  }));