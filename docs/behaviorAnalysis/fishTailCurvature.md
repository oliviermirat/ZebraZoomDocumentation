---
sidebar_position: 6
---

# Calculating fish tail curvature


## Summary

To calculate the curvature for every bouts, you can add, for instance, the following parameters inside your configuration file:
          
"perBoutOutput": 1, "nbTailPoints": 30, "curvatureMedianFilterSmoothingWindow": 7, "smoothTailHeadEmbeded": 60, "smoothTailHeadEmbededNbOfIterations": 3, "createPandasDataFrameOfParameters": 1, "videoFPS": fpsInYourVideo, "videoPixelSize": pixelSizeInYourVideo

You can decrease slightly "curvatureMedianFilterSmoothingWindow" if the fps in your video is low (or increase it slightly if it is very high (but this parameter should always be an odd number.

You will then be able to find the curvature data inside the pickle file generated in the result folder for your video. If you run the "4 - Analyze ZebraZoom's output" from the main menu of the GUI, the resulting pickle file saved in the "raw data" folder will also contain the curvature data for every bout for which it was calculated. You can then easily load and plot the curvature data with a script such as this one: [example script](
https://github.com/oliviermirat/ZebraZoom/blob/master/readAndAnalyzeZZoutputWithPython/loadAndPlotCurvature.py).


## Parameters

You can further adjust the parameters inside the configuration file:

- "perBoutOutput" (default value is 0): must be set to 1 to calculate the curvature

- "nbTailPoints" (default value is 10): number of points along the tail to interpolate and to then calculate the curvature

- "curvatureMedianFilterSmoothingWindow" (default value is 3): window of the median filter applied on the curvature

- "smoothTailHeadEmbeded" (default value, -1): if set to a value different than -1, a smoothing condition will be applied to the tail interpolation. "nbTailPoints" or 2x"nbTailPoints" can often be a good value for this parameter, but trial and error is often needed to decide what the ideal value should be. This parameter is used as the parameter "s" of the [splprep scipy function](https://docs.scipy.org/doc/scipy/reference/generated/scipy.interpolate.splprep.html).

- "smoothTailHeadEmbededNbOfIterations" (default value, 1): number of times the smoothing spline is applied to on the points along the tail.

- it is highly recommended to add the parameters: "createPandasDataFrameOfParameters": 1, "videoFPS": fpsInYourVideo, "videoPixelSize": pixelSizeInYourVideo, inside your configuration file in order for the pickle data to be saved in the result folder and for the curvature data to be stored inside that pickle file.

- the parameters "saveCurvaturePlots", "saveTailAngleGraph", "saveSubVideo", "saveCurvatureData" (all at 0 by default), if set to 1, will respectively create inside a "perBoutOutput" folder (inside the result folder): a curvature plot for each bout, a tail angle graph for each bout, a sub video for each bout, and a file containing the raw curvature data.

- "perBoutOutputYaxis": you can specify the range of the y axis of the tail angle plot with this parameter. For example choosing the value [-100, 100] will create a tail angle plot axis going from -100 to 100. When no value is set for this parameter (by default), the range of the y axis will be automatically chosen by matplotlib.


## Algorithm used to calculate the curvature

The curvature is being calculated using the method described in this [Wikipedia page](https://en.wikipedia.org/wiki/Curvature#In_terms_of_a_general_parametrization) (see the section "In terms of a general parametrization") in this [section of the ZebraZoom code](https://github.com/oliviermirat/ZebraZoom/blob/master/zebrazoom/code/dataPostProcessing/perBoutOutput.py).