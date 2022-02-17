---
sidebar_position: 1
---


# Checking tracking quality

## Quality control for one video:

Once you've performed the tracking on a video, it is important to check the quality of this tracking. The easiest method to do so is to click on the button "Visualize ZebraZoom's output" in the main menu of the GUI, and then to click on the name of the video you analyzed. You can then use the graphical interface to go through a few bouts and to click on the button "View video for well i" for some of those bouts.

For fishes, you should use the validation video to check that the tracking points are placed correctly on the head and along the tail of the animal (if you tracked the tail) and that the heading is correctly calculated. For animals other than fishes, you can simply check that the center of mass is correctly placed on each frame.

If you set the configuration file to detect bouts of movements, you should also check that the bouts of movements are being detected at the right times: in this situation, the tracking points will be displayed when and only when a bout is occurring. Therefore, for this situation, you should check that the tracking points are displayed when and only when a bout of movement is occurring, be sure to check for both false negative as well as for false positive bout detections.

If you are tracking the tail of fishes at a high enough frame rate (at ~100Hz minimum for zebrafish larvae, but a higher frequency is better) and if you are interested in calculating the parameters related to the tail maximum and minimum bends, then it will also be important to check that the minimum and maximum of bends are correctly detected. When the tail reaches a maximum or minimum bend, the extremity of the tail becomes red on the validation video: you can therefore check the correct detection this way. You can also look at the graph on the right side of the interface to check the detection of the bends (they are shown with orange vertical bars).

Finally, if you set the configuration file in order to detect circular wells, you should also click on "Open ZebraZoom's output folder" in the main menu of the GUI, then on the name of the video you want to check, and then open the file repartition.jpg: this file should contain red circles on and only on the wells, so you can use this to check for correct detection of the wells.

If you find the quality of the tracking to be insufficient, you can try to improve the configuration file that you're using and/or contact us to get some help.

## Quality control for a set of similar videos:

If you have a set of videos on which you want to perform a quality control, you should first focus on a few of the videos and check them thoroughly with the method described in the previous section. Once you're confident that the tracking is working well, you can quickly "scan" through all of the other videos (or through some of those videos, if your dataset is really large).
