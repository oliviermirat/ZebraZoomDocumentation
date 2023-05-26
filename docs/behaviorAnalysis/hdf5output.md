---
sidebar_position: 9
---

# Hdf5 output format (beta version)

## Parameter to add in configuration file (will no longer be necessary in the near future)

As the hdf5 file format is still in beta mode, it is currently required to add the following parameter in your configuration file in order to get the hdf5 file as an output:

```
"storeH5": 1
```

(in the near future, an hdf5 file will be produced by default and adding this parameter will no longer be required)

The hdf5 file is saved in the ZZoutput folder.

## General structure of the hdf5 file

The general structure of this output file is as follows:

```
Attributes: ['videoFPS', 'videoPixelSize', 'numberOfFrames', 'pathToRawVideo', 'ZebraZoomVersionUsed', 'trackingStartTime', 'trackingEndTime', 'timeSpentOnWellDetection', 'timeSpentOnBackgroundExtraction', 'timeSpentOnTracking', 'timeSpentOnParametersExtraction']

//configurationFileUsed/
    Attributes: ['configFileParam1', 'configFileParam2', 'configFileParam3', etc...]
    
//wellPositions/
               /well0/
                   Attributes: ['topLeftX', 'topLeftY', 'lengthX', 'lengthY']
               /well1/
                   Attributes: ['topLeftX', 'topLeftY', 'lengthX', 'lengthY']

//dataForWell0/
              /dataForAnimal0/
                             /dataPerFrame/
                                          /HeadPos
                                             Attributes: column_names = ['X' 'Y']
                                          /Heading
                                          /TailAngle
                                          /BoutNumber
                                          /tailPositionX
                                             Attributes: Columns = ['TailPosX0' 'TailPosX1' 'TailPosX2' 'TailPosX3' 'TailPosX4' 'TailPosX5' 'TailPosX6' 'TailPosX7' 'TailPosX8' 'TailPosX9']
                                          /tailPositionY
                                             Attributes: Columns = ['TailPosY0' 'TailPosY1' 'TailPosY2' 'TailPosY3' 'TailPosY4' 'TailPosY5' 'TailPosY6' 'TailPosY7' 'TailPosY8' 'TailPosY9']                     
                                          /curvature
                                             Attributes = [parametersUsedForCalculation]
                                             Attributes: Columns = ['Pos1' 'Pos2' 'Pos3' 'Pos4' 'Pos5' 'Pos6' 'Pos7' 'Pos8']
                                          /tailAngleHeatMap
                                             Attributes = [parametersUsedForCalculation]
                                             Attribute: column_names = ['Pos0' 'Pos1' 'Pos2' 'Pos3' 'Pos4' 'Pos5' 'Pos6' 'Pos7' 'Pos8' 'Pos9']
                                             
                             /listOfBouts/
                                 Attributes: ['numberOfBouts']
                                         /bout0/
                                               /bendAmplitude
                                               /bendTiming
                                         /bout1/
                                               /bendAmplitude
                                               /bendTiming
                             /kinematicParametersPerBout/
                                 Attributes: ['boutStart', 'boutEnd', 'Mean TBF', 'Mean absolute TBA', 'Number of Oscillations', etc...]
```

## Reading an hdf5 output file directly with Python

Here is an example of how an hdf5 output file can be read:

```
import h5py
filename = "./zebrazoom/ZZoutput/headEmbeddedZebrafishLarva_2023_05_22-14_06_24.h5"
f = h5py.File(filename, "r")
print(f.keys())
print(f["dataForWell0/dataForAnimal0/dataPerFrame"].keys())
print(f["dataForWell0/dataForAnimal0/dataPerFrame/HeadPos"][:])
```

## Reading an hdf5 output file through the data API (recommended method)

The most recommended way of reading this hdf5 file however is to use the [ZebraZoom Data API](/docs/behaviorAnalysis/dataapi) (still in beta mode). This data API allows to easily retrieve data from the hdf5 with code as simple as:

```
import zebrazoom.dataAPI as dataAPI
videoName = "headEmbeddedZebrafishLarva"
[videoFPS, videoPixelSize] = dataAPI.getFPSandPixelSize(videoName)
[curvatureValues, xTimeValues, yDistanceAlongTheTail] = dataAPI.getCurvaturePerBout(videoName, numWell, numAnimal, numBout)
dataAPI.plotCurvatureYaxisApproximate(curvatureValues, xTimeValues, yDistanceAlongTheTail, videoFPS, videoPixelSize)
```
