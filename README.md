## maintenance warning snackbar

Super simple vanilla JavaScript lib (under 40 lines of code (excluding CSS string)) to display a maintenance warning side bar.
The snackbar is shown for X seconds (currently 10 seconds) and then disappears unless it is closed by the user prior to the X seconds being up.

How it works:

- fetch https://www.phonetik.uni-muenchen.de/admin/public/api/availability/outages.php if there is an outage within the next 3 days -> fetch text from https://www.phonetik.uni-muenchen.de/admin/public/api/availability/next_outage_text.php and display it in snackbar
- if not -> don't do anything

### Usage

simply include this lib in your `index.html` file:

`<script src="maintenanceWarningSnackbar.js"></script>`

To avoid CSS bleed every CSS item has the prefix: `maintenance-warning-snackbar` (which I know
isn't a perfect solution but we are keeping this a simple as possible)

## For Developers

Start some form of dev server:

- `python3 -m http.server`