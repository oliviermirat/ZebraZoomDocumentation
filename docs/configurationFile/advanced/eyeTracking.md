---
sidebar_position: 6
---

# Eye Tracking

This will only work if there are enough pixels per eye and if the eyes are much darker than the rest of the body of the zebrafish (swim bladder excluded). To make the eye tracking work, set the following parameters to the appropriate values:
"eyeTracking" (default 0): Set this parameter to 1 for the eye tracking to be performed.
"headCenterToMidEyesPointDistance" (default 10): approximate distance (in pixels) between the center of the head (automatically detected by ZebraZoom) and the mid-point between the center of the two eyes.
"eyeBinaryThreshold" (default 50): threshold value (between 0 and 255) to differentiate the eyes (and the swim bladder) from the rest of the body.
"midEyesPointToEyeCenterMaxDistance" (default 10): maximum accepted distance (in pixels) between the mid-eye point and the center of an eye
"eyeHeadingSearchAreaHalfDiameter" (default 40): half diameter (in pixels) of the sub-image on which the heading is calculated for an eye.
"headingLineValidationPlotLength" (default 10): length (in pixels) of the heading line plotted on the image during the eye tracking debugging (when the parameter "debugEyeTracking" is set to 1).

It's also important to note that you can set the parameter "debugEyeTracking" and "debugEyeTrackingAdvanced" to 1 to troubleshoot this eye tracking.