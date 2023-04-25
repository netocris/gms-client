import { storiesOf, moduleMetadata } from '@storybook/angular';

import { SpinnerComponent } from './spinner.component';

storiesOf('Molecules|Spinner', module)
  .addDecorator(
    moduleMetadata({
      declarations: [SpinnerComponent]
    })
  )
  .add('default', () => ({
    template: `<app-spinner></app-spinner>`,
    props: {      
    }
  }));