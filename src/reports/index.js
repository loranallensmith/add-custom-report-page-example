/**
 * External dependencies
 */
import { Fragment } from '@wordpress/element';
import { withSelect } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { ReportFilters, TableCard, Card } from '@woocommerce/components';
import { REPORTS_STORE_NAME } from '@woocommerce/data';
import { getCurrentDates } from '@woocommerce/date';


const Report = ( { path, query, reportOrders } ) => {

	// Extract the date values from the query parameters
	const selectedDates = getCurrentDates(query);

	// Take a look at your console to see what shape this object takes
	console.log("selectedDates:", selectedDates);

	// Table Headers
	const headers = [
		{ key: 'order_number', label: 'Order Number'},
		{ key: 'status', label: 'Status'},
		{ key: 'date_created', label: 'Date Created'},
	]

	// This function converts the raw JSON from the data store to the format that the TableCard component expects.
	const getRowsContent = (data = []) => {
		const rows = data.map( ( row ) => {
			return [
				{
					display: row.order_number,
					value: row.order_number
				},
				{
					display: row.status,
					value: row.status
				},
				{
					display: row.date_created,
					value: row.date_created
				},
			]
		});
		return rows;
	}

	// This returns the cards that make up our demo report.
	return (
		<Fragment>
			<ReportFilters
				query={ query }
				path={ path }
				filters={ [] }
				advancedFilters={ {} }
			/>

			<Card
			  title="selectedDates Object"
				description="This object is generated from the query parameters that the ReportFilters component updates when you select a preset or custom range."
			>
				<p>{ JSON.stringify(selectedDates) }</p>
				<small>Note: The primary and secondary date ranges correspond to the reporting period and the comparison period.</small>
			</Card>

			<Card
				title="Raw Orders Query Data"
				description="This is the stringified JSON that the ordersQuery retrieves from the getReportItems query."
			>
				<p>{ JSON.stringify(reportOrders) }</p>
			 </Card>

			<TableCard
				title="Orders Queried"
				caption="This is a table with some orders data."
				headers={ headers }
				rows={ getRowsContent(reportOrders)}
				rowsPerPage={10}
				totalRows={10}
				perPage={10}
				total={() => {}}
			/>
		 </Fragment>
	 );
 };

// Use the withSelect React hook from wp.data to connect to core data stores
export default withSelect( (select, props) => {
	const { getReportItems, getReportItemsError, isResolving } = select(
		REPORTS_STORE_NAME
	);

	// Extract the date values from the query parameters.
  	// We'll format out our 'after' and 'before' dates to provide to the orders query below as ISO strings.
	const selectedDates = getCurrentDates(props.query);
	const afterDate = selectedDates.primary.after.format();
	const beforeDate = selectedDates.primary.before.format();

	// Construct a query object to provide to the Reports Data Store.
	const ordersQuery = {
		page: 1,
		per_page: 5,
		after: afterDate,
		before: beforeDate,
		extended_info: true,
		match: 'any',
		_fields: [
			'order_id',
			'order_number',
			'date_created',
			'status',
			'total_sales',
			'extended_info.customer',
			'extended_info.products',
		],
	};

	// Call the getReportItems selector of the Reports Data Store
  // We can use the isError and isRequesting values to conditionally render alternate views,
  // but we'll omit those views for now to keep this example focused on the data flow.
	const reportOrders = getReportItems( 'orders', ordersQuery ).data;
	const isError = Boolean( getReportItemsError( 'orders', ordersQuery ) );
	const isRequesting = isResolving( 'getReportItems', [
		'orders',
		ordersQuery,
	] );

	if (typeof reportOrders === 'undefined' || isRequesting) {
		return { isRequesting: true };
	}

  // The constants we're returning will get mapped to respective properties on the Report object.
	return {
		reportOrders,
		isError,
		isRequesting,
	};

	})(Report);
