import { CommonModule } from '@angular/common';

import { storiesOf, moduleMetadata } from '@storybook/angular';

import { InputTextComponent } from './../../atoms/input-text/input-text.component';
import { SimpleSearchComponent } from './simple-search.component';

storiesOf('Molecules|Simple Search', module)
  .addDecorator(
    moduleMetadata({
      declarations: [SimpleSearchComponent, InputTextComponent],
      imports: [CommonModule]
    })
  )
  .add('default', () => ({
    template: `<app-simple-search [inputValueModel]="inputValueModel"></app-simple-search>`,
    props: {
      inputValueModel: 'test'
    }
  }));