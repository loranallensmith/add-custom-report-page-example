/**
 * External dependencies
 */

 import { addFilter } from '@wordpress/hooks';
 import { __ } from '@wordpress/i18n';

 /**
  * WooCommerce dependencies
  */

 // N/A in this example

/**
 * Local imports
 */
import './index.scss';
import Report from './reports';

 /**
  * Use the 'woocommerce_admin_reports_list' filter to add a report page.
  */
 addFilter( 'woocommerce_admin_reports_list', 'plugin-domain', ( reports ) => {
   return [
     ...reports,
     {
       report: 'example',
       title: __( 'Example', 'plugin-domain' ),
       component: Report,
       navArgs: {
         id: 'example-analytics-report'
       }
     },
   ];
 } );
