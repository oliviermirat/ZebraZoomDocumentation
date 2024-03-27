---
sidebar_position: 7
---

# Zebrafish rollover detection with ZZDeepRollover


## Step 1: Introduction and Installation:

Using ZZDeepRollover currently requires you to install [ZebraZoom with Anaconda](../gettingStarted/installation#general-method) (not with the installers).

You must then install [PyTorch](https://pytorch.org/get-started/locally/) and then ZZDeepRollover with:

```
pip install zzdeeprollover
```

For those interested, [ZZDeepRollover source code can be seen here](https://github.com/oliviermirat/ZZDeepRollover).

## Step 2: Manual classification on a few videos:

You must first use ZebraZoom's GUI to manually classify frames into "Rolling", "Normal" and "InBetween" using ZebraZoom's GUI. For this, click on "Zebrafish rollover analysis" from the main menu of the GUI (from the fourth row: "Analyze Behavior"), then click on "Manually classify video frames into rollover vs no-rollover". Then choose a video where rolling behavior is occurring on the left hand side, then manually classify every frame of every well of the video into "Rolling", "Normal" and "InBetween".

## Step 3: Choose parameters and test the network:

In order to test the accuracy of the rollover detection model, you must use the script [leaveOneOutVideoTest.py](https://github.com/oliviermirat/ZZDeepRollover/blob/main/leaveOneOutVideoTest.py): you will need to adjust some variables at the beginning of that script and potentially try different combinations of values until you find a good set of parameters. The variable "videos" is an array that must contain the name of videos for which you manually classified frames.

The script leaveOneOutVideoTest.py will loop through all the videos learning the model on all but one video and testing on the video left out.

## Step 4: Train the network:

Once the model has been tested using the steps described in the previous section, you can now learn the final model using all the videos for which a manual classification of frames exist using the script [trainModel.py](https://github.com/oliviermirat/ZZDeepRollover/blob/main/trainModel.py) (one randomly selected video will automatically be left out for testing purposes). Use the best combination of variables found in the previous step while training the network.

## Step 5: Use the network to detect rollovers:

Once a network has been trained, create a configuration file similar [to this one](https://github.com/oliviermirat/ZebraZoom/blob/master/zebrazoom/rolloverDetectionConfiguration/rolloverDetection.json) in which you will specify a path to the previously trained model and to the previously chosen parameters.

Then, from the main menu of the GUI, click on "Zebrafish rollover analysis" from the main menu of the GUI (from the fourth row: "Analyze Behavior"), and then click on "Launch rollover detection on multiple videos". Then choose all the tracking results on which you want to run the rollover detection as well as the previously created configuration file, then click on "Run Tracking".

Once the rollover detection is done, you can check the accuracy of the rollover detection by going into the ZZoutput folder (accessible from the fourth row of the main menu of the GUI ("Analyze Behavior"): "Open ZebraZoom's output folder") and checking the validation videos created into each result sub-folder for which the rollover detection was performed:
- rolloverValidationAllFrames.avi: will show all frames
- validationOnlyFramesDetectedAsNormal.avi: will only show frames detected as non-rollover
- validationOnlyFramesDetectedAsRollover.avi: will only show frames detected as rollover
- validationOnlyErrors.avi: if a manual classification of frames was previously performed, will contain only frames incorrectly detected as rollover or not-rollover

On all four videos:
- a red dot will appear when the network classified a frame as being a rollover
-  if a manual classification of frames was previously performed, a green dot will appear for frames manually classified as rollover and a yellow dot will appear for frames manually classified as in-betweens

## Step 6: Analyze results:

From the main menu of the GUI, click on "Zebrafish rollover analysis" from the main menu of the GUI (from the fourth row: "Analyze Behavior"), and then click on "Compare zebrafish populations based on rollover detection". After choosing the videos you want to include in your analysis, choose "Compare populations with kinematic parameters". In the last tab of the kinematic parameters visualization ("All kinematic parameters"), you will be able to find four different parameters characterizing rollover detection:
- numberOfRolloverFrames : number of frames detected as rollover in the bout
- rolloverProbabilitiesSum : sum of all probabilities of a frame being a rollover for all frames of the bout
- numberOfRolloverFramesNormalized : numberOfRolloverFrames / number of frames in the bout
- rolloverProbabilitiesSumNormalized : rolloverProbabilitiesSum / number of frames in the bout
