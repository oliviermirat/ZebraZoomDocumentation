---
sidebar_position: 2
---

# Tracking fish tails with ZebraZoom's deep learning based tracking

**Please contact us at info@zebrazoom.org if you need help!**

## Method 1 (recommended): Tracking fish tails with ZebraZoom's instance segmentation deep learning based tracking

The method is very similar to tracking centers of mass with deep learning as explained in <a href="/docs/DLtracking/centerOfMassTracking" target="_blank">this tutorial</a> with a few minor differences listed below. Please follow <a href="/docs/DLtracking/centerOfMassTracking" target="_blank">the tutorial for center of mass tracking</a> while taking into account the differences listed below:

### 1 - Creating a training dataset on RoboFlow

When creating a project, instead of choosing "Object detection", you will need to choose "Instance segmentation". 

Then when labeling animals in videos, instead of using bounding boxes, you will need to use polygons to surround the entire animal.

### 2 - Training a deep learning based model on Google Colab

For training, use this [Google Colab notebook](https://colab.research.google.com/gist/oliviermirat/e12e33983ffa7f8bc38603072b1ab1bc/zebrazoomyolov11instancesegmentationtrainingwithaugmentations.ipynb).

### 3 - Running the tracking with ZebraZoom on your computer (no need for GPUs)

Use this [configuration file](https://github.com/oliviermirat/ZebraZoom/blob/master/DLrelatedFiles/YOLO_tailTracking.json). Please make sure to change the parameter "nbAnimalsPerWell" to the number of animals you want to track.


## Method 2 (not usually recommended): Tracking fish center of mass with deep learning based tracking + tails with classical computer vision

### 1 - Create a configuration file to track the center of mass

First create a configuration to track the center of mass by following this <a href="/docs/DLtracking/centerOfMassTracking" target="_blank">tutorial</a>.

### 2 - Find tail tracking parameters

Open ZebraZoom's GUI, in the "Create Configuration File" column, click on "Prepare initial configuration file for tracking". Select the video you want to track, and then click on "Head and tail tracking of freely swimming fish", then click "Next", choose any areas/wells layout, then "I want the tracking to run on the entire video". Select "No" for bout detection, and most importantly choose the "Fastest algorithm" option (this is the most important step). Then click on the two points asked. You may then click on "Adjust Tracking" to optimize the tracking parameters (you can also come back to this step later on to optimize tracking parameters). Finally click "Next" and save the configuration file.

### 3 - Update your configuration file

In the configuration file that you've just created in step 2, copy paste these following parameters (with their corresponding values):

"maxDepth", "steps", "paramGaussianBlur", "authorizedRelativeLengthTailEnd", "thetaDiffAcceptAfterAuthorizedRelativeLengthTailEnd", "nbList", "nbListAfterAuthorizedRelativeLengthTailEnd", "thetaDiffAccept", "authorizedRelativeLengthTailEnd2", "thetaDiffAcceptAfterAuthorizedRelativeLengthTailEnd2", "nbListAfterAuthorizedRelativeLengthTailEnd2", "maximumMedianValueOfAllPointsAlongTheTail", "headEmbededParamTailDescentPixThreshStop", "minimumHeadPixelValue", "nbTailPoints", "paramGaussianBlurForHeadPosition"

into the configuration file that you initially created in step 1. Also, set the parameter:

"trackTail" to the value 1

in the configuration file created in step 1.

Once the configuration file initially created in step 1 is updated, you can use it to track fish tails using ZebraZoom.


If you have any questions or experience any issues with this method, please don't hesitate to contact us at: info@zebrazoom.org
