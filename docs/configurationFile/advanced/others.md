---
sidebar_position: 8
---

# Other parameters

## Additional output folder

If you want to save the output result folder somewhere else than in the default output folder ZZoutput, you can set the parameter "additionalOutputFolder" to the path to a folder where your data will also be saved (in addition to being saved in the ZZoutput folder). Importantly, the path "additionalOutputFolder" must contain (at the end), the name of the final folder that will contain the files repartition.jpg, validationvideo.avi, etc... So for example, if you are analyzing the video Vid1 then you must set "additionalOutputFolder" to "~/Desktop/Vid1" in order for the results to be saved in the "Vid1" located on your Desktop.
If the folder "additionalOutputFolder" already exists, nothing will be saved in that folder, except if the parameter "additionalOutputFolderOverwriteIfAlreadyExist" is set to 1 in your configuration file (default value is 0).

## Improve contrast on validation video and invert black/white color (can be useful for head embedded fish)

If the contrast of your video is poor (for example if for head embedded fish the pixel intensity difference between the tail and the background is low), you can potentially set the parameter "outputValidationVideoContrastImprovement" to 1 in your configuration file: this will save a validation video with a better contrast and invert the black/white color in the video.
You can also adjust the amount of "contrast improvement" applied by adjusting the parameter "outputValidationVideoContrastImprovementQuartile": increasing this parameter will increase the amount of "contrast improvement" applied, while decreasing it will decrease the amount of "contrast improvement" applied.

## Background extraction with only two frames of the video:

"backgroundExtractionWithOnlyTwoFrames" (default 0): set this parameter to 1 to perform the background subtraction with only two frames (the two frames will be chosen in order to maximise the amount of differences between the two frames). Setting this parameter to 1 can be useful to speed up the background extraction process and/or if for some reason using a lot of frames for the background extraction leads to problems.

## Prevent issues when no movement is occuring

Warning: this only works when wells are not detected at the moment

Not having any movement occur in a video can sometimes lead to the tracking detecting tracking points at wrong locations. To solve this issue, you can adjust the two following parameters:
"checkThatMovementOccurInVideo (default 0): set to a value above 0 to avoid having the tracking being performed if it seems that no movement is occurring in the video. When launching ZebraZoom with this parameter set to a value above 0, ZebraZoom will print in the console:

start get background

checkThatMovementOccurInVideo: max difference is: X

Background Extracted

When movement is occurring in the video, the value of X will be high; and when no movement is occurring, the value will be low. You should run ZebraZoom on several videos to determine a good threshold of this value of X between videos where movement is occurring and videos where no movement is occurring. Then, set "checkThatMovementOccurInVideo to that threshold to allow ZebraZoom to be able to differentiate between videos with movements and videos with no movements.
"checkThatMovementOccurInVideoMedianFilterWindow" (default 11): The previous method relies on a median filter that smooth images. You can adjust the window of that median filter with this parameter.

## Freely swimming in "difficult conditions", mostly when low number of pixels per fish

If you are trying to track freely swimming fish in "difficult conditions", especially if there's a low number of pixels per fish, you can try adjusting the following parameters:
"headingCalculationMethod" (default "calculatedWithHead"): set this parameter to "simplyFromPreviousCalculations" to keep the heading initially calculated during the initial stages of the calculation (calculated with the blob representing the head of the fish and the blob representing the body of the fish).
"findContourPrecision" (default "CHAIN_APPROX_SIMPLE"): set this parameter to "CHAIN_APPROX_NONE" in order to increase the accuracy of the tail calculation.
"checkAllContourForTailExtremityDetect" (default 0): set to 1 to avoid having the algorithm mismatch the head section of the contour with the tail section of the contour when looking for the tip of the tail
"considerHighPointForTailExtremityDetect" (default 1): set to 0 to avoid taking into consideration the "highest" point along the body of the fish as a tail extremity candidate point when looking for the tip of the tail.
"erodeIter" (default 1): set this parameter to 0, especially if there are many pixels not belonging to the fish set to black pixels after the thresholding.

## Parameters related to the output validation video

"plotOnlyOneTailPointForVisu" (default 0): if set to 1, it will only plot the tip of the tail on the validation video
"trackingPointSizeDisplay" (default 1): size of points displayed on the validation video
"validationVideoPlotHeading" (default 1): make sure this parameter is set to 1 if you want to see heading on your validation video
"outputValidationVideoFps" (default -1): fps of the output validation video (if value is strictly above 0). Otherwise, the fps of the output validation video will be the same as the fps of the input video.

## Tracking for barely moving animals:

For freely moving animals (not for head embedded fish), if an animal on a video isn't moving or is barely moving then ZebraZoom won't be able to extract the background of the video and thus the tracking won't work.

However, if you want to track a video for which the animal is barely moving and for which the background is fairly uniform and on which the border of wells can't be seen (or if you launch the tracking on a ROI where the borders of the wells can't be seen), then you can create a configuration file using a special technique:

After clicking on "Prepare configuration file for tracking" from the main menu of the GUI, check the box "Click here to start from a configuration file previously created (instead of from scratch)." then after clicking "Select the video you want to create a configuration file for", choose the configuration file toCreateConfigFileForBarelyMovingAnimals.json provided in the configuration file folder, and then the video you want to create a configuration file for. For freely moving fish, it is usually advised to then choose the "Recommended method: Automatic Parameters Setting". Creating a configuration file using this technique will make ZebraZoom set the background of the video to a uniform image equal to the median of the initially extracted background which should allow ZebraZoom to perform an accurate tracking in most cases.

## Other parameters:

"fillGapFrameNb" (default 5): try to decrease this if the bouts detected are too long, try increasing if the bouts detected are too short or if they are "cut" into several different pieces.