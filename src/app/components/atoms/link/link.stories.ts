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
    template: `<app-link [linkValue]="linkValue"></app-link>`,
    props: {
      linkValue: 'default'
    }
  }))
  .add('url', () => ({
    template: `<app-link [linkValue]="linkValue" [url]="url"></app-link>`,
    props: {
      linkValue: 'google',
      url: 'http://www.google.com'      
    }
  }))
  .add('target', () => ({
    template: `<app-link [linkValue]="linkValue" [url]="url" [target]="target"></app-link>`,
    props: {
      linkValue: 'google',
      url: 'http://www.google.com',
      target: true      
    }
  }));

storiesOf('Components|Link', module)
  .addDecorator(withKnobs)
  .add('customization', () => ({
    component: LinkComponent,
    props: {
      linkValue: text('linkValue', 'google'),
      url: text('url', 'http://www.google.com'),
      target: boolean('target', false)      
    }
  }));