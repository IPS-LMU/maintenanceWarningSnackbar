## maintenance warning snackbar

Super simple vanilla JavaScript lib (under 40 lines of code (excluding CSS string)) to display a maintenance warning side bar.
The snackbar is shown for 5 seconds and then disappear unless it is closed by user prior to 
the 5 seconds being up.

How it works:

- if a txt file is returned from a certain hard-coded URL -> display txt in snackbar
- if not -> don't do anything

### Usage

simply include this lib in your `index.html` file:

`<script src="maintenanceWarningSnackbar.js"></script>`

To avoid CSS bleed every CSS item has the prefix: `maintenance-warning-snackbar` (which I know
isn't a perfect solution but we are keeping this a simple as possible)