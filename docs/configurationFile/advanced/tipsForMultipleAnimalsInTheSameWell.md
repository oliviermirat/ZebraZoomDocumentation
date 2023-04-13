---
sidebar_position: 7
---

# Tips for multiple animals tracking in the same well

## Setting unsure animal positions to NaN

You can add the parameter:

"removeLargeInstantaneousDistanceData" : maxDistanceInPixels 

in your configuration file in order to set animal positions to NaN for all frames n for which the distance between frame n-1 and frame n is above maxDistanceInPixels.

This will thus remove the "jumps" in the data and simply set to NaN values frames where the positions were likely lost or switched from one animal to another. Importantly, these NaN values will be taken into account when calculating kinematic parameters with ZebraZoom (such as when calculating the distance, speed or angular velocity) (the jumps won't be taken into account).

## Heading calculation

For more accurate heading calculation, you may choose to switch in the configuration file the value of the parameter "headingCalculationMethod" from "simplyFromPreviousCalculations" to "fromPreviousCalculationsAndAdjustWithPreviousFrame".

## Heading visualization

If you want to be able to visualize the heading values calculated, you can switch the parameter "validationVideoPlotHeading" from 0 to 1.

## Possible solution to avoid losing animals when their body area briefly shrinks

If you are in a situation where animals body area briefly shrinks, you may reduce (for example by dividing them by 2 or 3) in your configuration file the value of the following parameters:

"minArea", "minAreaBody", "minTailSize"
