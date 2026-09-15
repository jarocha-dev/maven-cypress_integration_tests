#!/bin/bash

set -euxo pipefail

SCRIPT_DIR=$(dirname $(readlink -f $0))

export PATH=$SCRIPT_DIR/target/mysql-dist/bin:$PATH

CYPRESS_TOTAL_TESTS=$(cat target/cypress-reports/test-* | grep "<testcase" | wc -l)
CYPRESS_TESTS_FAILED=$(cat target/cypress-reports/test-* | grep "<testsuite " | grep --invert-match "Root" | grep failures | sed -E "s/.*failures=\"([[:digit:]]+)\".*/\1/" | paste -sd+ | bc)

cat nodejs/cypress/cypress-report-summary-template.xml |\
	sed "s/TOTAL_TESTS/${CYPRESS_TOTAL_TESTS}/" |\
	sed "s/TESTS_FAILED/${CYPRESS_TESTS_FAILED}/" > target/cypress-reports/cypress-report-summary.xml
