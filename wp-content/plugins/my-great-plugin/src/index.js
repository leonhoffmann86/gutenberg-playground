import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import json from '../block.json';

const { name, settings } = json;

registerBlockType(name, {
  edit: (props) => {
    const blockProps = useBlockProps();

    return (
      <div {...blockProps}>
        Hello from My Great Plugin (edit)
      </div>
    );
  },
  save: (props) => {
    const blockProps = useBlockProps.save();

    return <div>Hello from My Great Plugin (save)</div>;
  },
  ...settings,
});
