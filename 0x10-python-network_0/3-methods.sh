#!/bin/bash
# Use curl to send a HEAD request (-I option) to the specified URL (-X option).
curl -sI -X "$1" | grep Allow | cut -d ' ' -f2-
