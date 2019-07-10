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
      valueModel: 'Click'
    }
  }))
  .add('disabled', () => ({
    template: `<app-button [valueModel]="valueModel" [disabled]="disabled"></app-button>`,
    props: {
      valueModel: 'Click',
      disabled: true
    }
  }))
  .add('with action', () => ({
    template: `<app-button [valueModel]="valueModel" [disabled]="disabled" (buttonEventEmmitter)="buttonEventEmmitter($event)"></app-button>`,
    props: {
      valueModel: 'Click',
      disabled: false,
      buttonEventEmmitter: action('buttonEventEmmitter')
    }
  }));

storiesOf('Components|Button', module)
  .addDecorator(withKnobs)
  .add('customization', () => ({
    component: ButtonComponent,
    props: {
      valueModel: text('valueModel', 'Click'),
      disabled: boolean('disabled', false)      
    }
  }));