# add-custom-report-page-example

An example WooCommerce Admin extension that demonstrates how to build a custom report that uses WooCommerce Components to query data using core WooCommerce Data Stores.

## About this example

This extension registers a custom report page with WooCommerce Admin that uses the [`withSelect`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/#withSelect) React hook to connect the rendered Report component to the WooCommerce Reports Data Store. The [`ReportFilters`](https://woocommerce.github.io/woocommerce-admin/#/components/packages/filters/README) component updates the query parameters, which in turn updates the query provided to the Reports Data Store and refreshes the [`TableCard`](https://woocommerce.github.io/woocommerce-admin/#/components/packages/table/README) in the report.

The rendered report also contains [`Card`](https://woocommerce.github.io/woocommerce-admin/#/components/packages/card/README) objects with some basic debugging data to help demonstrate what data is being passed around when you modify the report filters with the [`ReportFilters`](https://woocommerce.github.io/woocommerce-admin/#/components/packages/filters/README) dropdown.


## Try it out

To get started, clone this repository into the `plugins` directory of your WooCommerce development environment and run the following commands from the project directory:

```bash
nvm use
```
This ensures you're running a compatible version of Node in your shell.

```bash
npm install
```
This installs Node dependencies for this project.

```bash
npm start
```
This transpiles all of the project's JavaScript into a browser-ready asset that gets served from the `build/` directory when the extension runs.  This command also watches the JavaScript files for changes and rebuilds the browser asset if necessary.

Once the extension's JavaScript has been built, activate the extension in your WordPress environment (along with WooCommerce) and browse to `Analytics`:arrow_right:`Example` in your admin area.  You should see the sample report displayed.

<img width="1680" alt="Screen Shot 2021-03-16 at 10 12 28 PM" src="https://user-images.githubusercontent.com/3477155/111406720-2bf4f180-86a9-11eb-9f70-bf0c489ec660.png">

---

This extension was generated using the [`create-wc-extension`](https://github.com/woocommerce/woocommerce-admin/tree/b17aab156d9fb6e8fbc2ce59ba34d82fd20d9f5f/bin/starter-pack) script that comes bundled with WooCommerce Admin.

---

See [wp-scripts](https://github.com/WordPress/gutenberg/tree/master/packages/scripts) for more usage information.

