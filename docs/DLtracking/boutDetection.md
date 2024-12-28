---
sidebar_position: 3
---

# Bout detection with ZebraZoom's deep learning based tracking

**Please contact us at info@zebrazoom.org if you need help!**

## 1 - Create a configuration file

Create a configuration file to either track <a href="/docs/DLtracking/centerOfMassTracking" target="_blank">centers of mass</a> or <a href="/docs/DLtracking/tailTracking" target="_blank">fish tails</a>.

## 2 - Detect bouts of movements with heads / centers of mass coordinates:

Add the following parameter in your configuration file:

"coordinatesOnlyBoutDetectionMinDistDataAPI"

set it to a minimum distance threshold above which movement is detected.

Then set:

"frameGapComparision"

in order to calculate the distance between frame n and frame n + frameGapComparision (which will then be compared to the threshold set above).

Finally, you can also set:

"fillGapFrameNb"

to a maximum number of frames with which subsequent bouts detected will be combined.

This updated configuration file can be used to detect bouts of movements.



If you have any questions or experience any issues with this method, please don't hesitate to contact us at: info@zebrazoom.org
