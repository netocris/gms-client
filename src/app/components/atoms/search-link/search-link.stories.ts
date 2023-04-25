import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action} from '@storybook/addon-actions';

import { SearchLinkComponent } from './search-link.component';

storiesOf('Atoms|Search Link', module)
  .addDecorator(
    moduleMetadata({
      declarations: [SearchLinkComponent]
    })
  )
  .add('default', () => ({
    component: SearchLinkComponent,
    props: {}
  }))  
  .add('with action', () => ({
    template: `<app-search-link (eventEmmitter)="eventEmmitter($event)"></app-search-link>`,
    props: {      
      eventEmmitter: action('eventEmmitter')
    }
  }));