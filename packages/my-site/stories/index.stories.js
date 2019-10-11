import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { MySite } from '../src/MySite.js';
import '../my-site.js';

storiesOf('my-site', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(MySite))
  .add(
    'Alternative Title',
    () => html`
      <my-site .title=${'Something else'}></my-site>
    `,
  );
