---
sidebar_position: 1
---

# Behavior analysis through the GUI

Click on "Analyze ZebraZoom's outputs" in the main menu. Then you can choose to either compare different populations of animals with kinematic parameters or to cluster bouts of movements.

## Reloading and plotting the data once the analysis is done

After running the analysis to compare different populations of animals with kinematic parameters, it is possible to reload and replot the results, for example by using this script: [reload and plot example](https://github.com/oliviermirat/ZebraZoom/blob/master/readAndAnalyzeZZoutputWithPython/reloadKinematicDataAndPlotIt.py).

## Units of output parameters for comparaison of populations with kinematic parameters:

When the results are first saved after the tracking (in the file results_videoName.txt in the subfolder ZZoutput/videoName) the units are simply in pixels (for spatial resolution) and frames (for time resolution). However, when using the option "Analyze ZebraZoom's outputs" from the main menu of the GUI, you will need to choose an "organization excel file". This "organization excel file" contains a column named "fq" and another column named "pixelsize". In the column "pixelsize" you must put the size of the pixels in your video and you can choose the unit for this value of pixel size (it could be in μm, mm, cm, m, etc...): this choice will then be reflected in the units of speed and distance travel calculated: for example if you choose mm for the pixel size, then the distance traveled calculated will also be in mm. Similarly, in the column "fq" you must put the frequency of acquisition of the video: if you put this unit in Hz (1/second) then the time unit for the duration and speed calculated will be in seconds; and if you decided to put in this column a frequency of acquisition in 1/minute, then the time unit for duration and speed will also be in minutes.
