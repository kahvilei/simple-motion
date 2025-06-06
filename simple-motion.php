<?php
/**
 * Plugin Name:         Simple Motion
 * Description:         Adds simple exit and entrance animation options and positioning features for default blocks.
 * Author:              Katie Britton
 * Version:             0.1.0
 * Requires at least:   6.5
 */

 /**
 * Enqueue Editor scripts.
 */
function simple_motion_enqueue_block_editor_assets() {
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	wp_enqueue_script(
		'simple-motion-editor-scripts',
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		$asset_file['dependencies'],
		$asset_file['version']
	);

	wp_set_script_translations(
		'simple-motion-editor-scripts',
		'simple-motion'
	);
}
add_action( 'enqueue_block_editor_assets', 'simple_motion_enqueue_block_editor_assets' );