---
sidebar_position: 4
---

# Head-embedded zebrafish tail tracking in difficult conditions

## Using the GUI

The contrast between the tail and the background can sometimes be low for head-embedded zebrafish. In this situation, during the configuration file creation procedure in the GUI, you should answer "Yes" to the question "Do you want to try to tweak tracking parameters further?" and then on "Adjust Tracking" (depending on the circumstances, checking the boxes "Choose the first frame for parameter adjustment" and "I want to adjust parameters over the entire video" can also be useful). You will then be able to go through the video by adjusting "Frame number" and/or with the keys "4" (backwards) and "6" (forward). The first parameter to try changing is often "headEmbededAutoSet_BackgroundExtractionOption". Then "headEmbededParamTailDescentPixThreshStopOverwrite", and then in some cases it can also be a good idea to try changing the other parameters as well.

## Adding black segments on artefacts

If artefacts are present on your video, you can try manually adding to your configuration file:
"addBlackLineToImg_Width": "replaceByWidthOfBlackSegmentsToAdd"
this will allow you to manually add black segments on the video (for example on artefacts). When using this method, ZebraZoom will ask you to click on the two extremities of each black segments to add to every image of the video. At the moment, this method will only work for "white fish over black background".

In the output result folder, you will then find a file named parametersToAddToConfigFileForBlackLine.json. If you want the black segments to be set at the exact same positions for future videos that you would like to track, you can then remove the parameter "addBlackLineToImg_Width": "replaceByWidthOfBlackSegmentsToAdd" from your original configuration file and copy and paste the parameters present inside the parametersToAddToConfigFileForBlackLine.json file into your original configuration file. With that newly created configuration file, you won't need to manually specify black segments positions at the beginning of the tracking procedure and the black segments will be set at the same positions as previously.

## Choosing the max angle between subsequent points over the entire tail

You can also try adding the parameter: "headEmbededMaxAngleBetweenSubsequentSegments"in your configuration file, you can set it to the maximum angle (in radians) "authorized" between subsequent segments. This parameter will overwrite the choices you can make in the next paragraph related to parameters at the beginning of the tail.

## Choosing the max angle between subsequent points on the beginning of the tail

Alternatively, you can also try manually adding and adjusting the parameters "initialTailPortionMaxSegmentDiffAngleValue" (default value is 1) and "initialTailPortionMaxSegmentDiffAngleCutOffPos" (default value 0.15) in the configuration file that you previously created. "initialTailPortionMaxSegmentDiffAngleValue" is the maximum difference "allowed" between two subsequently detected points along the tail of the animal near the base of the tail (starting from the base of the tail, going towards the tip of the tail); so decreasing the value of "initialTailPortionMaxSegmentDiffAngleValue" will force the tail tracking near the base of the tail to be more "straight".
"initialTailPortionMaxSegmentDiffAngleCutOffPos" represents the portion (from 0 to 1) that qualifies as "near the base of the tail". So 0.15 (the default value) means that the tail is considered as "near the base of the tail" from the base of the tail until 15% of the length of the tail.

## Other options

You can also try manually adding:
, "headEmbededRetrackIfWeirdInitialTracking" : 1
in the configuration file that you previously created, and relaunch the tracking with that. Adding this parameter to the configuration file will make ZebraZoom "re-track" the tail with slightly different methods (which may lead to better results) for every frame for which the tracking seems incorrect. Please note however that at the time of this writing (28/12/2020), the way that ZebraZoom is checking if the tracking is incorrect or not is pretty basic: so if in your video the tail is moving with a lot of amplitude (or if "struggles" are present), then the procedure to check if the tracking is incorrect most likely won't work.

If after following the instructions above you still don't manage to create a configuration file that works well for your videos, please let us know by emailing us at info@zebrazoom.org (also please read the troubleshooting section below).
