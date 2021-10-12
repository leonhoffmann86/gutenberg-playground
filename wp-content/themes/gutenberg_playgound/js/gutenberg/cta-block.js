import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType('gutenberg/cta-block', {
  // Build in attributes
  title: __('Call To Action'),
  description: 'This is a call to action block',
  category: 'theme',
  icon: {
    background: 'red',
    foreground: 'blue',
    src: 'dashicons-superhero-alt',
  },
  keywords: [__('Key 1'), __('Key 2'), __('Key 3')],
  supports: {
    html: false,
    align: true,
  },
  // Custom attributes
  attributes: {
    yourAttr: {
      type: 'string',
    },
  },
  // Custom functions

  // Build in functions
  edit: (props) => {
    return <h2>My Backend</h2>;
  },
  save: (props) => {
    return <h2>My Frontend</h2>;
  },
});
