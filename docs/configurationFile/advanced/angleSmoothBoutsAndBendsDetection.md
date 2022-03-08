---
sidebar_position: 3
---

# Tail angle smoothing, bouts detection and bends detection

If you are tracking the tail of zebrafish larva, you may need to further refine the configuration file parameters controlling the smoothing of the tail angle, the parameters controlling the detection of the bouts of movements, and the parameters controlling the detection of the local minimums and maximums of the tail angle (which we call the "bends").

To check if adjusting those parameters is necessary, start by clicking on "Visualize ZebraZoom's output" and then on the name of the video you just tracked. Then look at some of the bouts and click on the button "Change Visualization" to compare the smoothed tail angle with the raw un-smoothed tail angle. Also pay close attention to where the bends are detected. You can also use the "View video" buttons to check if the bouts of movements are detected at the right times.
If the smoothing of the tail angle or the bouts or bends detection doesn't seem good enough, you can try to refine the configuration file you initially used: first open your configuration file in a text editor (you can access the folder where configuration files are stored by clicking on "Open configuration file folder" in the main menu), and then try to add and/or change some of the parameters listed below.

Once your new configuration file is ready, relaunch the tracking with that updated configuration file.
If you relaunch the tracking from ZebraZoom's graphical interface, check the box "I ran the tracking already, I only want to redo the extraction of parameters" (this will reload saved tracked data instead of re-tracking the video, in order to speed up the analysis).
Optionally, you can also click the box "Don't (re)generate a validation video" to speed up the analysis even further: however be aware that in this case the validation video present in the output results folder won't necessarily correspond to the output data after your new analysis is done. Therefore, it can be a good idea to check that box if iteratively trying lots of configuration file options and then "un-checking it" for the final analysis.
If you are relaunching the tracking with the new configuration file (instead of from the GUI), then you can optionally set the following parameters to the specified values: "reloadWellPositions": 1, "reloadBackground": 1, "debugPauseBetweenTrackAndParamExtract": "justExtractParamFromPreviousTrackData" (this will have the same effect as checking the box "I ran the tracking already, I only want to redo the extraction of parameters" above) and you can also set the parameter "createValidationVideo" to 0 (which will have the same effect as checking the box "Don't (re)generate a validation video" above).

There are a lot of parameters listed below which can be overwhelming. To begin adjusting these parameters, a good place to start could be to tweak the parameters "windowForLocalBendMinMaxFind", "tailAngleMedianFilter", and potentially also "tailAngleSmoothingFactor" (see below for more information about these parameters).
If some false positive bouts of movements are being detected, you can also set "noChecksForBoutSelectionInExtractParams" to 0 and further adjust the related parameters.
Importantly, please also note that the parameter "extractAdvanceZebraParameters" must be set to 1 in order for any of these calculations (removal of outlier bouts, tail angle smoothing, and bends detection) to occur.

Post-processing of the bouts of movements initially detected: the parameters below control the removal of "outlier bouts"

noChecksForBoutSelectionInExtractParams: default: 1: If set to 1 (which is the default value), none of the checks described below will happen

detectBoutMinNbFrames : default: 2: minimum number of frames a bout must have to be considered a "false positive" and thus removed

detectBoutMinDist : default: 4: minimum distance traveled during the bout (between beginning and finish) for the bout to be considered a "false positive" and thus removed

detectBoutMinAngleDiff : default: -1: minimum variation of the angle (max(angle)-min(angle)) for the bout to be considered a "false positive" and thus removed

minNbPeaksForBoutDetect: default: 2: minimum required number of bends in a bout for the bout to be considered a "false positive" and thus removed

## Parameters related to the smoothing of the tail angle

tailAngleSmoothingFactor : default: 0.001: Smoothing factor applied on the tail angle. Higher values lead to more smoothing.

tailAngleMedianFilter : default: 3: Window of the median filter applied to the tail angle (before smoothing).

## Parameters related to the detection of bends (local minimums and maximums of the tail angle)

These two first parameters control the initial detection of the bends through the "find_peaks" function of scipy (https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.find_peaks.html).

windowForLocalBendMinMaxFind : default: 1:

minProminenceForBendsDetect : default: 0.01:

If the value of the angle at frame n is a local minimum/maximum relative to all angles for the frames in the range n-windowForLocalBendMinMaxFind and n+windowForLocalBendMinMaxFind, and if the "depth" of that maximum/minimum is at least minProminenceForBendsDetect, then a bend is detected for frame n. If minProminenceForBendsDetect is equal to -1, then minProminenceForBendsDetect is set to minProminenceForBendsDetect = maxDiffPeakToPeak / 10, maxDiffPeakToPeak being the difference between the maximum and the minimum values of the tail angle over the entire bout.

The parameters below control the post processing of the peaks found with the method above: more precisely, they control the removal of "false-positive bends":

minDiffBetweenSubsequentBendAmp : default: 0.02: if the bend "n" has a value X, then the bend "n+1" must have a value Y for which absoluteValue(X-Y) > minDiffBetweenSubsequentBendAmp. If the bend "n+1" doesn't satisfy that condition, then the bend is considered a false-positive and thus removed.

minFirstBendValue : default: -1: minimum value required for the first bend in order to not be considered a false-positive (so by default all bends are accepted)

doubleCheckBendMinMaxStatus : default: 1: if doubleCheckBendMinMaxStatus is equal to 1, then ZebraZoom only keeps bends for which: (bend(n-1) > bend(n) and bend(n) < bend(n+1)) OR (bend(n-1) < bend(n) and bend(n) > bend(n+1))

removeFirstSmallBend : default: 0: if removeFirstSmallBend is different than 0 (so not by default), ZebraZoom removes the first bend if: abs(TailAngle_smoothed[firstBend]) < abs(TailAngle_smoothed[secondBend]) / hyperparameters["removeFirstSmallBend"]

## Detection of bout through tail angle variation instead of subsequent frames pixel differences

The configuration files provided for the example files as well as the configuration files created through the GUI are set to make ZebraZoom detect bouts of movements by looking at the number of pixels that have a different intensity between subsequent frames of the video. It can sometimes be useful to instead detect the bouts by detecting variations in the tail angles. To do this, you must set the parameters in the configuration file as follow:
"noBoutsDetection": 0,
"thresForDetectMovementWithRawVideo": 0,
You must then choose the threshold for bout detection using the angle variation (in radians):
"thresAngleBoutDetect": 0.1,
By default, the tail angle variation will be calculated on a period of 10 frames. To adjust this window you can adjust the following parameter:
"windowForBoutDetectWithAngle": 10,
