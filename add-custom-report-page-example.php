<?php
/**
 * Plugin Name: add-custom-report-page-example
 *
 * @package WooCommerce\Admin
 */

/**
 * Register the JS.
 */
function add_extension_register_script() {
	if ( ! class_exists( 'Automattic\WooCommerce\Admin\Loader' ) || ! \Automattic\WooCommerce\Admin\Loader::is_admin_or_embed_page() ) {
		return;
	}

	$script_path       = '/build/index.js';
	$script_asset_path = dirname( __FILE__ ) . '/build/index.asset.php';
	$script_asset      = file_exists( $script_asset_path )
		? require( $script_asset_path )
		: array( 'dependencies' => array(), 'version' => filemtime( $script_path ) );
	$script_url = plugins_url( $script_path, __FILE__ );

	wp_register_script(
		'add-custom-report-page-example',
		$script_url,
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);

	wp_register_style(
		'add-custom-report-page-example',
		plugins_url( '/build/index.css', __FILE__ ),
		// Add any dependencies styles may have, such as wp-components.
		array(),
		filemtime( dirname( __FILE__ ) . '/build/index.css' )
	);

	wp_enqueue_script( 'add-custom-report-page-example' );
	wp_enqueue_style( 'add-custom-report-page-example' );
}

add_action( 'admin_enqueue_scripts', 'add_extension_register_script' );


/**
 * Add "Example" as a Analytics submenu item.
 *
 * @param array $report_pages Report page menu items.
 * @return array Updated report page menu items.
 */
function add_report_add_report_menu_item( $report_pages ) {
	$report_pages[] = array(
		'id'     => 'example-analytics-report',
		'title'  => __( 'Example', 'woocommerce-admin' ),
		'parent' => 'woocommerce-analytics',
		'path'   => '/analytics/example',
	);

	return $report_pages;
}
add_filter( 'woocommerce_analytics_report_menu_items', 'add_report_add_report_menu_item' );
