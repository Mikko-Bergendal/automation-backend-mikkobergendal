Just wanted to say that the second test suite is just a copy of the
first one and there only to confirm that the reporting works as
intended.

Tried to use faker as much as possible but failed to get dates in the
required format, therefor creating reservation have fixed start and end
date.

Scripts to run tests/get reports

cypress:open           - To open cypress normally 
cypress:run            - To test every test suite headless with mochawesome reporter 
cypress:merge:json     - To merge every json in /mochawesome-report and put it in /report as output.json
cypress:final:report   - To convert output.json to html in /report
generate:merged:report - To remove /report folder and then run all of the scripts above in written order
