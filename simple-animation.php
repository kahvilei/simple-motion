<?php
/**
 * Plugin Name:         Simple Animation
 * Description:         Adds simple exit and entrance animation options for all blocks.
 * Author:              Katie Britton
 * Version:             0.1.0
 * Requires at least:   6.5
 */

 /**
 * Enqueue Editor scripts.
 */
function simple_animation_enqueue_block_editor_assets() {
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	wp_enqueue_script(
		'simple-animation-editor-scripts',
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		$asset_file['dependencies'],
		$asset_file['version']
	);

	wp_set_script_translations(
		'simple-animation-editor-scripts',
		'simple-animation'
	);
}
add_action( 'enqueue_block_editor_assets', 'simple_animation_enqueue_block_editor_assets' );

function add_animation_attrs_to_blocks_with_animation( $block_content, $block ) {

    $is_animated = $block['attrs']['simpleAnimation'] ?? false;

    // Only apply the modifications if the image is decorative.
	if (  $is_animated ) {
			$processor = new WP_HTML_Tag_Processor( $block_content );
			// Modify the img attributes using the HTML API, add settings to top level element as string
			if ( $processor->next_tag() ) {
				$processor->set_attribute( 'simple_animation', json_encode($block['attrs']['simpleAnimation']) );
			}
			return $processor->get_updated_html();
		}    

    return $block_content;
}
add_filter( 'render_block', 'add_animation_attrs_to_blocks_with_animation', 10, 2 );