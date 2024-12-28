---
sidebar_position: 2
---

# Tracking fish tails with ZebraZoom's deep learning based tracking

**Please contact us at info@zebrazoom.org if you need help!**

## 1 - Create a configuration file to track the center of mass

First create a configuration to track the center of mass by following this <a href="/docs/DLtracking/centerOfMassTracking" target="_blank">tutorial</a>.

## 2 - Find tail tracking parameters

Open ZebraZoom's GUI, in the "Create Configuration File" column, click on "Prepare initial configuration file for tracking". Select the video you want to track, and then click on "Head and tail tracking of freely swimming fish", then click "Next", choose any areas/wells layout, then "I want the tracking to run on the entire video". Select "No" for bout detection, and most importantly choose the "Fastest algorithm" option (this is the most important step). Then click on the two points asked. You may then click on "Adjust Tracking" to optimize the tracking parameters (you can also come back to this step later on to optimize tracking parameters). Finally click "Next" and save the configuration file.

## 3 - Update your configuration file

In the configuration file that you've just created in step 2, copy paste these following parameters (with their corresponding values):

"maxDepth", "steps", "paramGaussianBlur", "authorizedRelativeLengthTailEnd", "thetaDiffAcceptAfterAuthorizedRelativeLengthTailEnd", "nbList", "nbListAfterAuthorizedRelativeLengthTailEnd", "thetaDiffAccept", "authorizedRelativeLengthTailEnd2", "thetaDiffAcceptAfterAuthorizedRelativeLengthTailEnd2", "nbListAfterAuthorizedRelativeLengthTailEnd2", "maximumMedianValueOfAllPointsAlongTheTail", "headEmbededParamTailDescentPixThreshStop", "minimumHeadPixelValue", "nbTailPoints", "paramGaussianBlurForHeadPosition"

into the configuration file that you initially created in step 1. Also, set the parameter:

"trackTail" to the value 1

in the configuration file created in step 1.

Once the configuration file initially created in step 1 is updated, you can use it to track fish tails using ZebraZoom.


If you have any questions or experience any issues with this method, please don't hesitate to contact us at: info@zebrazoom.org
