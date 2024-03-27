---
sidebar_position: 12
---


# Identifying moving and sleeping time periods for zebrafish

## Identifying moving and sleeping times of zebrafish:

The sleep and moving time periods can be calculated with the command:

python -m zebrazoom dataPostProcessing sleepVsMoving videoName speedThresholdForMoving notMovingNumberOfFramesThresholdForSleep

while replacing:

- videoName : by the name of the video for which you want to calculate the sleep and moving time periods.
If you want to do this analysis on several videos and also create a summary excel file about all the videos combined, you can also set this variable to a list of video names separated by commas. For example if you want to launch this analysis on three videos called video1, video2 and video3, you can set this variable to:<br/>
video1,video2,video3<br/>
Please note that there shouldn't be any spaces inside this variable: no spaces before or after the commas and no spaces inside the video names.

- speedThresholdForMoving : by a number representing the speed threshold between moving and non-moving time periods

- notMovingNumberOfFramesThresholdForSleep : by a number representing the 'number of frames not moving' threshold between sleep and non-sleep time periods

Optionally, some additional parameters can be added to the 'python -m zebrazoom dataPostProcessing etc...' line above, in the following order:

- maxDistBetweenTwoPointsInsideSleepingPeriod : maximum distance between the first (x, y) position of a 'sleep bout' and any points of the 'sleep bout' for the 'sleep bout' to be considered as valid. When set to -1 (default value of this parameter), no maximum distance between points inside a 'sleep bout' is taken into account when deciding where 'sleep bouts' are.

- specifiedStartTime : time at which the experiment started, you must specify this parameter in the format Hours:Minutes:Seconds (for example this could be 00:03:18 for 3 minutes and 18 seconds, or it could be 15:00:07 for 15 hours and 7 seconds, etc...). You can also put this parameter at 0 for the time 00:00:00

- distanceTravelledRollingMedianFilter : window of a rolling median filter applied on the distance travelled (before the speed is calculated). If this parameter is not specified (by default), no rolling median filter is applied.

- videoPixelSize : pixelSize of the video, if this parameter is not specified it will be set to the 'videoPixelSize' parameter set in the configuration file used to launch the tracking (and if also unspecified in the configuration file, it will be set to the value 1)

- videoFPS : fps of the video, if this parameter is not specified it will be set to the 'videoFPS' parameter set in the configuration file used to launch the tracking (and if also unspecified in the configuration file, it will be set to the value 1)

Launching this analysis with the command line 'python -m zebrazoom dataPostProcessing etc...' will generate an excel file containing all the information about instantaneous speed, moving and sleep time periods for each frame and each well of the video. The excel file is saved inside the result folder of each video (result folders are all stored inside the 'ZZoutput' folder) (and the 'ZZoutput' folder can be accessed by clicking on 'Open ZebraZoom's output folder: Access raw data' from the main menu of ZebraZoom's GUI (Graphical User Interface) (which can be opened with 'python -m zebrazoom').

## Moving and sleeping times validation through visualization:

In order to validate the moving and sleeping time periods calculated, it is then possible to visualize moving and sleeping time periods with the following commands:

python -m zebrazoom visualizeMovingAndSleepingTime movingTime videoName

(while replacing 'videoName' by the name of the video for which you want to validate results)
This command will show the coordinates of fish when and only when the previous script has found that the fish is moving.

python -m zebrazoom visualizeMovingAndSleepingTime sleepingTime videoName
(while replacing 'videoName' by the name of the video for which you want to validate results)
This command will show the coordinates of fish when and only when the previous script has found that the fish is sleeping.

Both commands above are loading results directly from the excel files previously generated in order to validate the time periods calculated in the most straightforward manner possible.
This validation through visualization will only work if the parameter 'copyOriginalVideoToOutputFolderForValidation' was set to 1 in the configuration file used to launch the tracking.
For both commands above, you can easily go through the video using the following tips: https://zebrazoom.org/validationVideoReading.html

## Identifying first sleeping time after specified time:

This can be done with the command:

python -m zebrazoom dataPostProcessing firstSleepingTimeAfterSpecifiedTime videoName specifiedTime wellNumber

Where:

- videoName must be replaced either by the name of a video or by a list of video names separated by commas as explained in the paragraph "Identifying moving and sleeping times of zebrafish" above (if you want to launch this script on the excel file created by combining several videos) (please note that there shouldn't be any spaces anywhere in this variable).

- specifiedTime must be replaced by a time in the format Hours:Minutes:Seconds (for example this could be 00:03:18 for 3 minutes and 18 seconds, or it could be 15:00:07 for 15 hours and 7 seconds, etc...).

- wellNumber must be the number of the well on which to launch this analysis (please note that well numbers start at 0 (not at 1)). If you set wellNumber to -1, the analysis will be launch on all wells.

Important note: this command will only work if you have previously launched the command "python -m zebrazoom dataPostProcessing sleepVsMoving etc..." with the exact same value for the parameter videoName.

## Calculating the number of sleeping and moving frames in-between two specified times:

This can be done with the command:

python -m zebrazoom dataPostProcessing numberOfSleepingAndMovingTimesInTimeRange videoName specifiedStartTime specifiedEndTime wellNumber

Where:

- videoName must be replaced either by the name of a video or by a list of video names separated by commas as explained in the paragraph "Identifying moving and sleeping times of zebrafish" above (if you want to launch this script on the excel file created by combining several videos) (please note that there shouldn't be any spaces anywhere in this variable).

- specifiedStartTime and specifiedEndTime must be replaced by a time in the format Hours:Minutes:Seconds (for example this could be 00:03:18 for 3 minutes and 18 seconds, or it could be 15:00:07 for 15 hours and 7 seconds, etc...).

- wellNumber must be the number of the well on which to launch this analysis (please note that well numbers start at 0 (not at 1)). If you set wellNumber to -1, the analysis will be launch on all wells.

Important note: this command will only work if you have previously launched the command "python -m zebrazoom dataPostProcessing sleepVsMoving etc..." with the exact same value for the parameter videoName.

## Calculating the number of sleeping bouts:

This can be done with the command:

python -m zebrazoom dataPostProcessing numberOfSleepBoutsInTimeRange videoName minSleepLenghtDurationThreshold

Where:

- videoName: must be replaced either by the name of a video or by a list of video names separated by commas as explained in the paragraph "Identifying moving and sleeping times of zebrafish" above (if you want to launch this script on the excel file created by combining several videos) (please note that there shouldn't be any spaces anywhere in this variable).

- minSleepLenghtDurationThreshold: must be fixed to the minimum number of consecutive sleeping frames a bout must possess in order to be considered a sleeping bout.

There are also 3 additional optional parameters (wellNumber, specifiedStartTime and specifiedEndTime) which can be used with the following command:

python -m zebrazoom dataPostProcessing numberOfSleepBoutsInTimeRange videoName minSleepLenghtDurationThreshold wellNumber specifiedStartTime specifiedEndTime

- wellNumber must be set to the number of the well on which to launch this analysis (please note that well numbers start at 0 (not at 1)). If you set wellNumber to -1, the analysis will be launched on all wells.

- specifiedStartTime and specifiedEndTime must be replaced by a time in the format Hours:Minutes:Seconds (for example this could be 00:03:18 for 3 minutes and 18 seconds, or it could be 15:00:07 for 15 hours and 7 seconds, etc...). When these two parameters are set to -1 and -1, the analysis is performed on all frames of the video.

By default, wellNumber is set to -1 (and so the analysis is performed on all wells) and specifiedStartTime and specifiedEndTime are both set to -1 (and so the analysis is performed for all frames).

Important note: this command will only work if you have previously launched the command "python -m zebrazoom dataPostProcessing sleepVsMoving etc..." with the exact same value for the parameter videoName.