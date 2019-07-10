import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from './button.component';

storiesOf('Button', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ButtonComponent]
    })
  )
  .add('default', () => ({
    component: ButtonComponent,
    props: {
      valueModel: 'Click'
    }
  }))
  .add('disabled', () => ({
      template: `<app-button [valueModel]="valueModel" [disabled]="disabled"></app-button>`,
      props: {
        valueModel: 'Click',
        disabled: true
      }
    }),
    { 
      notes: 'disabled button' 
    }
  )
  .add('with action', () => ({
      template: `<app-button [valueModel]="valueModel" [disabled]="disabled" (buttonEventEmmitter)="buttonEventEmmitter($event)"></app-button>`,
      props: {
        valueModel: 'Click',
        disabled: false,
        buttonEventEmmitter: action('buttonEventEmmitter')
      }
    }),
    { 
      notes: 'some action with button onclick event' 
    }
  );