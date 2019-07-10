import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action} from '@storybook/addon-actions';
import { text, boolean, withKnobs } from '@storybook/addon-knobs';
import { LinkComponent } from './link.component';

storiesOf('Components|Link', module)
  .addDecorator(
    moduleMetadata({
      declarations: [LinkComponent]
    })
  )
  .add('default', () => ({
    component: LinkComponent,
    props: {
      valueModel: 'Click'
    }
  }))
  .add('disabled', () => ({
    template: `<app-link [valueModel]="valueModel" [disabled]="disabled"></app-link>`,
    props: {
      valueModel: 'Click',
      disabled: true
    }
  }));

storiesOf('Components|Link', module)
  .addDecorator(withKnobs)
  .add('customization', () => ({
    component: LinkComponent,
    props: {
      valueModel: text('valueModel', 'Click'),
      disabled: boolean('disabled', false)      
    }
  }));