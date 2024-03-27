---
sidebar_position: 6
---

# Getting x, y coordinates (+ tailAngle and other raw data if available)

## During configuration file creation

At the end of the configuration file creation pipeline, choose the option "Save coordinates and tail angle even when fish isn't moving (in csv/excel format)"

![alt text](https://zebrazoom.org/img/saveCoordinatesOption.png)

Alternatively, if you have already created a configuration file, you can also add the following parameter in your configuration file:

"saveAllDataEvenIfNotInBouts": 1

When running the tracking, an excel file containing the x, y position will be created in the ZZoutput folder. This ZZoutput folder is accessible by clicking on this button of the front page:

![alt text](https://zebrazoom.org/img/goToZZoutputFolder.png)

## If the tracking has already been run

### With default hdf5 format

The most recommended method is to use the dataAPI:

[Get coordinates and other raw data with dataAPI (per bout)](/docs/behaviorAnalysis/dataapi#getdataperbout)

[Get coordinates and other raw data with dataAPI (per time interval)](/docs/behaviorAnalysis/dataapi#getdatapertimeinterval)

Don't forget to first load the dataAPI with:

```
import zebrazoom.dataAPI as dataAPI
```

And to [set the video fps and pixelsize](/docs/behaviorAnalysis/dataapi#setfpsandpixelsize) if necessary (when retrieving data per time interval for example).

in order to be able to use the dataAPI.

Otherwise, it's also possible to access the hdf5 file directly:

[Get coordinates and other raw data directly from hdf5 file](/docs/behaviorAnalysis/hdf5output)


### With legacy json format

Use the createDistanceBetweenFramesExcelFile option which will create an excel file with the (x, y) coordinates in addition to the "instantaneous distance" travelled between each subsequent frame:

[Get coordinates and other raw data with createDistanceBetweenFramesExcelFile script](/docs/behaviorAnalysis/instantaneousDistanceExcelFileCreate)

Otherwise, it's also possible to access the json file directly:

[Get coordinates and other raw data directly from the json file](/docs/behaviorAnalysis/ZZoutputAnalysisWithPython)
