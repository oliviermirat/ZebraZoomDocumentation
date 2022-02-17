---
sidebar_position: 6
---

# Calculating fish tail curvature

To make ZebraZoom calculate the curvature of every bout detected, you can set the parameter "perBoutOutput" to 1 (the default value is 0).
This will create in each of the output folders a subfolder called "perBoutOutput" that will contain for each bout detected: a plot of the tail angle, the curvature plot, a pickle file containing the curvature data (see [here an example](https://github.com/oliviermirat/ZebraZoom/blob/master/readAndAnalyzeZZoutputWithPython/loadCurvature.py) of how to load pickled data), and a short video of the bout with the fish position being adjusted in order for the head of the fish to be in the middle top of the video and the main axis of the tail to be aligned with the y axis.
The curvature is being calculated using the method described in this [Wikipedia page](https://en.wikipedia.org/wiki/Curvature#In_terms_of_a_general_parametrization) (see the section "In terms of a general parametrization") in this [section of the ZebraZoom code](https://github.com/oliviermirat/ZebraZoom/blob/master/zebrazoom/code/dataPostProcessing/perBoutOutput.py).

You can also adjust the following parameters inside the configuration file:

- "perBoutOutputVideoStartStopFrameMargin" (default value is 0): this will create a video of the bout starting perBoutOutputVideoStartStopFrameMargin frames before the beginning of the bout and ending perBoutOutputVideoStartStopFrameMargin frames after the bout.

- "perBoutOutputYaxis": you can specify the range of the y axis of the tail angle plot with this parameter. For example choosing the value [-100, 100] will create a tail angle plot axis going from -100 to 100. When no value is set for this parameter (by default), the range of the y axis will be automatically chosen by matplotlib.

- "nbTailPoints": number of points tracked along the tail (default value is 10)

- "curvatureMedianFilterSmoothingWindow": 2d median filter applied on the curvature plot (the default value, 0, will lead to no median filter being applied)

- "smoothTailHeadEmbeded": Warning: you should most likely keep this parameter to its default value, -1. Indeed, choosing another value (higher than 0) will lead to a smoothing of the points along the tail of the animal: from experience, we have observed that such smoothing can lead to inaccurate curvature values.

- "nbPointsToIgnoreAtCurvatureBeginning" and "nbPointsToIgnoreAtCurvatureEnd" represents the number of points to NOT plot / ignore when plotting the curvature (starting from respectively the rostral and caudal ends of the tail) (default values for both of these parameters is 0). The parameter "nbPointsToIgnoreAtCurvatureBeginning" can be useful when the tracking is too noisy close to the base of the tail for "good" curvature values to be calculated. 

- "nbPointsToIgnoreAtCurvatureEnd" could be useful in similar circumstances.

As an example, you can calculate the curvature of the two example videos provided with ZebraZoom ([headEmbeddedZebrafishLarva.avi](https://drive.google.com/file/d/1ERVQZvTzBD69jUEjBOTA9BvH4gOdwC7N/view) and [4wellsZebrafishLarvaeEscapeResponses.avi](https://drive.google.com/file/d/1y00yli9XbcJlzFSbJgnVAM9yDvCWNCb2/view)) with the two configuration files initially provided, just by adding a few parameters to these initial configuration files:

For headEmbeddedZebrafishLarva.avi you can use the configuration provided ([headEmbeddedZebrafishLarva.json](https://github.com/oliviermirat/ZebraZoom/blob/master/zebrazoom/configuration/headEmbeddedZebrafishLarva.json)) by adding the two parameters "perBoutOutput": 1 and "nbTailPoints": 20 to it.

For 4wellsZebrafishLarvaeEscapeResponses.avi, you can use the configuration file provided ([4wellsZebrafishLarvaeEscapeResponses.json](https://github.com/oliviermirat/ZebraZoom/blob/master/zebrazoom/configuration/4wellsZebrafishLarvaeEscapeResponses.json)) by adding the two parameters "perBoutOutput": 1 and "nbPointsToIgnoreAtCurvatureBeginning": 1

(if needed, you can launch ZebraZoom [through the command line](../tracking/launchingTracking#launching-the-tracking-through-the-command-line) in order to easily overwrite/add those two parameters to the configuration file initially provided)
                        