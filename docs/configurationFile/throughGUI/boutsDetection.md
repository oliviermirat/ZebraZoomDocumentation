---
sidebar_position: 2
---

# Bouts Detection

The bout detection algorithm of ZebraZoom relies on quantifying the amount of pixel intensity differences between subsequent frames in the video: if there are a lot of differences between frame n and frame n+t (with t usually between 1 and 4), then ZebraZoom considers that movement is occuring at frame n.

From ZebraZoom's GUI, it is possible to adjust the parameters that ZebraZoom relies on to identifiy movement in a video. More precisely, you will be able to adjust, from the GUI, the following parameters:

- **Compare frame n with frame n+?**: (named *frameGapComparision* in configuration files) (default value: 1): this parameter controls how many frames there will be between the two subsequent frames being compared.

- **Threshold applied on frame n+? minus frame n**: (named *thresForDetectMovementWithRawVideo* in configuration files) (default value: 0): the "subsequent frame" is subtracted to the "initial frame" and a binary threshold is then applied to the resulting image (the resulting image, after subtraction  and after applying the binary threshold, is then shown on the right hand side of the GUI screen). This parameter controls the value of the binary threshold applied.

- **Size of sub-frame used for the comparison**: (named *halfDiameterRoiBoutDetect* in configuration files) (default value: 100): this parameter controls the size of the sub-image on which the entire procedure is performed. It should be the smallest possible while still containing all the fish.

- **Minimum number of white pixels in frame n+? minus frame n for bout detection**: (named *minNbPixelForDetectMovementWithRawVideo* in configuration files) (default value: 0): this parameter controls the minimum number of white pixels necessary after the previously mentioned subtraction and binarization for ZebraZoom to consider that movement is occuring (and thus for the red dot on the top left to appear).

In addition to changing these parameters, you can also see the resulting bout detection when these parameters are adjusted. Importantly, when a bout is being detected, you will see a red dot appear on the top left corner of the initial image.

**Important Warning:** there can sometimes be cases where the tracking fails during the initial configuration file creation pipeline: in such case it will be impossible to adjust the parameters related to bout detection. In such a case, just click on the "Done! Save changes!" button. You will be able to adjust the parameters related to bout detections later on by clicking on the "Optimize configuration file" button either from the main menu of the GUI or from the tracking visualization page if you went through "the test tracking" pipeline.

It is also important to note that the bout detection when you will run ZebraZoom won't necessarily be exactly the same as what you will observe on the GUI parameters adjustment page. Indeed, the parameter fillGapFrameNb (which can also be adjusted from the GUI) controls the "merging" of bouts next to each other. More precisely, if the end of a bout is less than *fillGapFrameNb* frames aways from the beginning of the next bout, then those two bouts will be merged.
