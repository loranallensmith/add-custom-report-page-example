# add-custom-report-page-example

An example WooCommerce Admin extension that demonstrates how to build a custom report that uses WooCommerce Components to query data using core WooCommerce Data Stores.

This extension registers a custom report page with WooCommerce Admin that uses the `withSelect` React hook to connect the rendered Report component to the WooCommerce Reports Data Store. The `ReportFilters` component updates the query parameters, which in turn updates the query provided to the Reports Data Store and refreshes the `TableCard` in the report.

The rendered report also contains `Card` objects with some basic debugging data to help demonstrate what data is being passed around when you modify the report filters with the `ReportFilters` dropdown.


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

---

This extension was generated using the `create-wc-extension` script that comes bundled with WooCommerce Admin.

---

See [wp-scripts](https://github.com/WordPress/gutenberg/tree/master/packages/scripts) for more usage information.

