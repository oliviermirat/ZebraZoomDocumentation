---
sidebar_position: 9
---

# Optimizing speed of final analysis: pre-calculating parameters during tracking execution

When a lot of data has been collected from the tracking, both the final kinematic parameters analysis and the clustering analysis can take a long time to run. In order to speed up this process, you can add the following parameters in the configuration file that you use:

- "createPandasDataFrameOfParameters": set it to the value 1

- "videoFPS": set it to the frequency of acquisition of your video

- "videoPixelSize": set it to the pixel size in your video

The "frameStepForDistanceCalculation" will automatically be set to 2 when the "videoPixelSize" is lower than 100 and to int(videoFPS / 100) x 4 otherwise. But it can also optionally be set in the configuration file.

Then run the tracking as you normally would with this new configuration file: a pickle file will now be created inside the output result folder which will contain pre-calculated parameters. When you launch the final kinematic parameters or clustering analysis, these pre-calculated parameters will be reloaded which will speed up the analysis.