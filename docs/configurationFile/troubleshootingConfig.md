---
sidebar_position: 2
---

# Tips for for testing/troubleshooting configuration file

When first trying out a configuration file, it can sometimes be a good idea to check the quality of the tracking on a smaller sub-video before launching the tracking on the entire video. For this, you can set the parameters "firstFrame" and "lastFrame" to, respectively, the frame where you want the tracking to start and to the frame where you want the tracking to end.
If you are using the parameters "firstFrame" and "lastFrame", it can then also often be useful to set the parameter "backgroundExtractionForceUseAllVideoFrames" to 1: this will allow the tracking to be performed from frame "firstFrame" to "lastFrame" but the extraction of the background however will be done using all frames in the video (the extraction of the background is often sub-optimal if done on too few frames).
If you are detecting wells in your video before the tracking, you can also set the parameter "onlyTrackThisOneWell" to the number of the well you want the tracking to be performed on. If this parameter is left to its default value of -1, then the tracking will be performed on all wells detected.
If you've already ran ZebraZoom on a video and you want to run that video again, you have the option of setting the parameters "reloadWellPositions" and "reloadBackground" to 1: as the names would suggest, this will reload the well positions and background in order to save time.
If you are using the command line to launch the tracking, you can also set some of the "debugging parameters" (such as "debugExtractParams", "debugTracking", "debugTrackingPtExtreme", "debugExtractBack", "debugFindWells", "debugHeadingCalculation", "debugDetectMovWithRawVideo") to 1 to help you find where problems might be occuring.