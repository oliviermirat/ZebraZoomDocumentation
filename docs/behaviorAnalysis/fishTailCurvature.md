---
sidebar_position: 6
---

# Calculating fish tail curvature


## First step

To calculate the curvature for every bout, you can add, for instance, the following parameters inside your configuration file:

```
"perBoutOutput": 1, 
"nbTailPoints": 30, 
"curvatureMedianFilterSmoothingWindow": 7, 
"smoothTailHeadEmbeded": -1, 
"smoothTailHeadEmbededNbOfIterations": 1, 
"createPandasDataFrameOfParameters": 1, 
"videoFPS": fpsInYourVideo, 
"videoPixelSize": pixelSizeInYourVideo
```

To get more smoothing of the tail you could also change, for instance:

```
"smoothTailHeadEmbeded": 60, "smoothTailHeadEmbededNbOfIterations": 3
```

You can also slightly decrease `"curvatureMedianFilterSmoothingWindow"` if the fps in your video is low (or increase it slightly if it is very high) but this parameter should always be an odd number.

Finally, if you add `"saveCurvaturePlots" : 1` in your configuration file, a curvature plot will be generated in the result folder for each bout.

## Saving and retrieving raw curvature data

### Saving and retrieving data with the "per bout" system:

If you put `"createPandasDataFrameOfParameters": 1` in your configuration file (as suggested above), a pickle file will be generated in the result folder for your video. This pickle file can be used to load and plot the curvature data with a script such as this one: 

[Example Script ("per bout" data saving)](
https://github.com/oliviermirat/ZebraZoom/blob/master/readAndAnalyzeZZoutputWithPython/loadAndPlotCurvature.py).

### Saving and retrieving data with the "per frame" system:

If you put `"saveAllDataEvenIfNotInBouts": 1` in your configuration file, a csv file will be generated in the result folder for each fish in your video. These csv files can then be used to load and plot the curvature data with a script such as this one: 

[Example Script ("per frame" data saving)](
https://github.com/oliviermirat/ZebraZoom/blob/master/readAndAnalyzeZZoutputWithPython/loadAndPlotCurvatureFromAllFramesData.py).

### Saving and retrieving data with the "one curvature data file for each bout" system:

If you want one file per bout containing the curvature data to be saved in the result folder, you can set `"saveCurvatureData" : 1` in your configuration file.

## Standardizing curvature values and x axis length across a dataset
By default, the curvature scales and the x axis total length (in time) will change from one curvature graph to the next. To remediate to this potential problem, you can:

Set `maxCurvatureValues` to a value different than 0 in your configuration file: this will fix the maximum curvature values displayed to the value chosen.

Set `curvatureXaxisNbFrames` to a value different than 0 in your configuration file: this will set the x axis (time) to the fixed number of frame chosen (the x axis is still converted to seconds if you set `"videoFPS"` as suggested above).

When reloading and plotting the curvature with the previously mentioned example scripts: [Example Script ("per bout" data saving)](
https://github.com/oliviermirat/ZebraZoom/blob/master/readAndAnalyzeZZoutputWithPython/loadAndPlotCurvature.py) and [Example Script ("per frame" data saving)](
https://github.com/oliviermirat/ZebraZoom/blob/master/readAndAnalyzeZZoutputWithPython/loadAndPlotCurvatureFromAllFramesData.py), you can adjust these same values at the beginning of the script (`maxCurvatureValues` and `curvatureXaxisNbFrames`).

## Curvature graphs units

As long as `"videoFPS"` and `"videoPixelSize"` are specified (as suggested above), curvature graphs will be plotted in seconds and mm. The y axis (in mm) will correspond to the length of the tail for the first frame of the bout.

## Complete list of curvature related parameters

You can further adjust the parameters inside the configuration file:

- "perBoutOutput" (default value is 0): must be set to 1 to calculate the curvature

- "nbTailPoints" (default value is 10): number of points along the tail to interpolate and to then calculate the curvature

- "curvatureMedianFilterSmoothingWindow" (default value is 3): window of the median filter applied on the curvature

- "smoothTailHeadEmbeded" (default value, -1): if set to a value different than -1, a smoothing condition will be applied to the tail interpolation. "nbTailPoints" or 2x"nbTailPoints" can often be a good value for this parameter, but trial and error is often needed to decide what the ideal value should be. This parameter is used as the parameter "s" of the [splprep scipy function](https://docs.scipy.org/doc/scipy/reference/generated/scipy.interpolate.splprep.html).

- "smoothTailHeadEmbededNbOfIterations" (default value, 1): number of times the smoothing spline is applied to the points along the tail.

- it is highly recommended to add the parameters: "createPandasDataFrameOfParameters": 1, "videoFPS": fpsInYourVideo, "videoPixelSize": pixelSizeInYourVideo, inside your configuration file in order for the pickle data to be saved in the result folder and for the curvature data to be stored inside that pickle file.

- the parameters "saveCurvaturePlots", "saveTailAngleGraph", "saveSubVideo", "saveCurvatureData" (all at 0 by default), if set to 1, will respectively create inside a "perBoutOutput" folder (inside the result folder): a curvature plot for each bout, a tail angle graph for each bout, a sub video for each bout, and a file containing the raw curvature data.

- "colorMapCurvature" (default value, 'BrBG'): colormap used to plot the curvature, colormap choices can be seen [here in the 'Diverging' paragraph](https://matplotlib.org/3.5.1/tutorials/colors/colormaps.html)

- "perBoutOutputYaxis": you can specify the range of the y axis of the tail angle plot with this parameter. For example choosing the value [-100, 100] will create a tail angle plot axis going from -100 to 100. When no value is set for this parameter (by default), the range of the y axis will be automatically chosen by matplotlib.

- "alternativeCurvatureCalculation": set to 1 if you want the curvature to be calculated in an alternative way (using successive angles to calculate the second derivative), you might also need to set "saveCurvaturePlots" to 1 to see the results of this alternative curvature calculation method

- "maxCurvatureValues" and "curvatureXaxisNbFrames": allow to standardize curvature values and x axis length across a dataset as explained above

## Algorithm used to calculate the curvature

The curvature is being calculated using the method described in this [Wikipedia page](https://en.wikipedia.org/wiki/Curvature#In_terms_of_a_general_parametrization) (see the section "In terms of a general parametrization") in this [section of the ZebraZoom code](https://github.com/oliviermirat/ZebraZoom/blob/master/zebrazoom/code/dataPostProcessing/perBoutOutput.py).