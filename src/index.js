/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'create-block/better-blocks', {

	title: __( 'Better Blocks', 'create-block' ),
	description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
		'create-block'),
	category: 'widgets',
	icon: 'smiley',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
	 *
	 * @param {Object} [props] Properties passed from the editor.
	 *
	 * @return {WPElement} Element to render.
	 */
	edit( { className } ) {
		return (
			<p className={ className }>
				{ __(
					'Better Blocks – hello from the editor!',
					'create-block'
				) }
			</p>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by the block editor into `post_content`.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
	 *
	 * @return {WPElement} Element to render.
	 */
	save() {
		return (
			<p>
				{ __(
					'Better Blocks – hello from the saved content!',
					'create-block'
				) }
			</p>
		);
	},
} );

registerBlockType( 'create-block/better-blocks-2', {

	title: __( 'Better Blocks 2', 'create-block' ),
	description: __(
		'another block.',
		'create-block'
	),
	category: 'widgets',
	icon: 'heart',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
	 *
	 * @param {Object} [props] Properties passed from the editor.
	 *
	 * @return {WPElement} Element to render.
	 */
	edit( { className } ) {
		return (
			<p className={ className }>
				{ __(
					'Better Blocks – whoa!',
					'create-block'
				) }
			</p>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by the block editor into `post_content`.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
	 *
	 * @return {WPElement} Element to render.
	 */
	save() {
		return (
			<p>
				{ __(
					'Better Blocks – whoa!',
					'create-block'
				) }
			</p>
		);
	},
} );

