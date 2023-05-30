---
sidebar_position: 10
---

# ZebraZoom data API (beta version)

## Getting started: Example scripts

### If you installed ZebraZoom with Anaconda

ZebraZoom's API requires installing ZebraZoom with [Anaconda](/docs/gettingStarted/installation#general-method). You will then be able to easily retrieve data from ZebraZoom's output files with code such as:

```
import zebrazoom.dataAPI as dataAPI
videoName = "headEmbeddedZebrafishLarva"
[videoFPS, videoPixelSize] = dataAPI.getFPSandPixelSize(videoName)
[curvatureValues, xTimeValues, yDistanceAlongTheTail] = dataAPI.getCurvaturePerBout(videoName, numWell, numAnimal, numBout)
dataAPI.plotCurvatureYaxisApproximate(curvatureValues, xTimeValues, yDistanceAlongTheTail, videoFPS, videoPixelSize)
```

### If you installed ZebraZoom with an Installer

If you want to use the ZebraZoom data API to retrieve data from output data files generated with a version of ZebraZoom installed with ["Installers"](/docs/gettingStarted/installation#using-installers-recommended-method), you will need to specify the full path to your video, for example:

```
videoName = "C:/Users/yourName/Desktop/ZebraZoom/zebrazoom/ZZoutput/headEmbeddedZebrafishLarva"
```

### Automatic retrieval of the latest tracking using the data API

Hdf5 output files are automatically saved inside the ZZoutput folder: the name of the hdf5 file created corresponds to the name of the video, to which a timestamp is appended (corresponding to the time at which the tracking was launched).

However, when specifying the file on which you want one of the functions below to be applied, you only need to specify the name of the video (not the name of the hdf5 file containing the timestamp): the data API will automatically find the file that was produced last (as shown in the examples above).


## General helper functions

All data api functions can be found in this folder: [view code](https://github.com/oliviermirat/ZebraZoom/tree/master/zebrazoom/dataAPI).

### setFPSandPixelSize

If you did not specify the fps and pixel size of your video in the configuration file before launching the tracking, you can specify it in the hdf5 output format using the data api. This is required to use some of the other data api functions (such as the ones related to plotting the curvature for example).

```
videoFPS = 300
videoPixelSize = 0.01
dataAPI.setFPSandPixelSize(videoName, videoFPS, videoPixelSize)
```

### getFPSandPixelSize

If you specified the fps and pixel size in your video, you can retrieve them directly from the data API using the function specified below:

```
[videoFPS, videoPixelSize] = dataAPI.getFPSandPixelSize(videoName)
```

### getFirstAndLastFrame

You can retrieve the first and the last frame used to run the tracking using the function below.

```
firstFrame, lastFrame = dataAPI.getFirstAndLastFrame(videoName)
```

### getDataPerBout

You can retrieve any data for each bout detected by ZebraZoom using the function below.

```
videoName = "headEmbeddedZebrafishLarva"
numWell   = 0
numAnimal = 0
numBout = 0
parameterName = 'Heading'

headingData = dataAPI.getCurvaturePerBout(videoName, numWell, numAnimal, numBout, parameterName)
```

### getDataPerTimeInterval

You can retrieve any data for any time interval (specified in seconds) using the function below.

```
data = dataAPI.getDataPerTimeInterval(videoName, numWell, numAnimal, startTimeInSeconds, endTimeInSeconds, parameterName)
```

### listAllBouts

You can retrieve a list of start and end timings for all bouts using the function below.

```
boutTimings = dataAPI.listAllBouts(videoName, numWell, numAnimal)
```

By default, frame numbers are returned. To obtain values in seconds, `seconds=True` should be used:

```
boutTimings = dataAPI.listAllBouts(videoName, numWell, numAnimal, seconds=True)
```

### createDistanceBetweenFramesExcelFile

You can use this function to generate an excel file containing the distance travelled between each frame. The excel file will be stored in the same folder where the provided h5 file is located.

```
dataAPI.createDistanceBetweenFramesExcelFile(videoName)
```

## Curvature related functions

An example of how to use the data api to retrieve and plot the curvature can be found here [Example script](https://github.com/oliviermirat/ZebraZoom/blob/master/readAndAnalyzeZZoutputWithPython/exampleDataAPI_curvature.py)

All data api functions can be found in this folder: [view code](https://github.com/oliviermirat/ZebraZoom/tree/master/zebrazoom/dataAPI).

### getCurvaturePerBout

You can retrieve the curvature for each bout detected by ZebraZoom using the function below. If the curvature was not calculated during the tracking process, it will automatically be calculated by the dataAPI and stored inside the hdf5 format.

```
videoName = "headEmbeddedZebrafishLarva"
numWell   = 0
numAnimal = 0
numBout = 0

[curvatureValues, xTimeValues, yDistanceAlongTheTail] = dataAPI.getCurvaturePerBout(videoName, numWell, numAnimal, numBout)
```

### getCurvaturePerTimeInterval

You can retrieve the curvature for any time interval (specified in seconds) using the function below. If the curvature was not calculated during the tracking process, it will automatically be calculated by the dataAPI and stored inside the hdf5 format.

```
[curvatureValues, xTimeValues, yDistanceAlongTheTail] = dataAPI.getCurvaturePerTimeInterval(videoName, numWell, numAnimal, startTimeInSeconds, endTimeInSeconds)
```

### applyMedianFilterOnCurvature

The curvature saved in the hdf5 file does not contain any temporal smoothing (it may however contain some smoothing along the tail, if that was specified in the configuration file (with the parameter "smoothTailHeadEmbeded")). Therefore, smoothing (such as applying a median filter) can be applied later on with the function below.

```
curvatureValues = dataAPI.applyMedianFilterOnCurvature(curvatureValues, 5)
```

### plotCurvatureYaxisExact

The function below will plot the curvature while taking into account the "exact" value of the cumulative length along the tail of each point.

```
dataAPI.plotCurvatureYaxisExact(curvatureValues, xTimeValues, yDistanceAlongTheTail, videoFPS, videoPixelSize)
```

### plotCurvatureYaxisApproximate

The function below will plot the curvature while considering an approximate value on the y axis.

```
dataAPI.plotCurvatureYaxisApproximate(curvatureValues, xTimeValues, yDistanceAlongTheTail, videoFPS, videoPixelSize)
```

## More data API functions are coming! (the data API is still in "beta")
