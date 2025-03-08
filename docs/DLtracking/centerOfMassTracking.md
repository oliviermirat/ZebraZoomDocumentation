---
sidebar_position: 1
---

# Tracking the center of mass of any kind of animal with ZebraZoom's deep learning based tracking

**Please contact us at info@zebrazoom.org if you need help!**

## Create a training dataset on RoboFlow

### Uploading images

First create an account on [RoboFlow](https://roboflow.com)

Then choose a name for your project **(1)**, select the free Public Plan **(2)**, and click on "Create Workspace" **(3)**.

![alt text](https://zebrazoom.org/img/upload1.png)

Then add teammates if you want help with labeling. 

Go to the project section **(1)**, then click on "New Project" **(2)**.

![alt text](https://zebrazoom.org/img/upload2.png)

Choose a project name **(1)**, choose "Public Domain" for visibility **(2)**, set Annotation group to the type of animals you want to track **(3)**, keep "Project type" at "Object detection" **(4)** and click "Create Public project" **(5)**.

![alt text](https://zebrazoom.org/img/upload3.png)

The simplest option is then to click on "select file(s)".

![alt text](https://zebrazoom.org/img/upload4.png)

Then choose one or several of the videos you want to track.

Depending on the size of the video(s) you chose, you may need to wait a few seconds or minutes.

![alt text](https://zebrazoom.org/img/upload6.png)

Then use the slider to choose the frame rate in order to get a good output size. Aiming for a total of about 100 to 200 images total may be a good initial choice. Therefore, if you choose only one video, adjust the frame rate in order to get around 100 to 200 images. If you choose for instance 3 videos, adjust the frame rate to get around 100 / 3 to 200 / 3 ~= 33 to 66 images.

![alt text](https://zebrazoom.org/img/upload7.png)

Wait a few seconds or minutes in order for RoboFlow to extract frames. 

This process will repeat for each video you uploaded to roboflow.

When all videos have been uploaded, click on "Start Manual Labeling" and assign to yourself and/or to teammates.

![alt text](https://zebrazoom.org/img/upload8.png)

You can now move on to labeling images.

NB: in some cases, instead of uploading video(s), it may sometimes be better to upload images extracted from videos. This can be done for example with this script: [image extraction script](https://github.com/oliviermirat/ZebraZoom/blob/master/DLrelatedFiles/saveImages.py).

### Labeling images

If you've just finished uploading video(s) yourself following the tutorial above, a labeling job will have already been automatically selected, so you can directly jump to the next screenshot.

However, if someone has invited you to a project, you will first need to click on the "Annotate" tab on the left hand side of the screen **(1)**. Then select an annotating job **(2)**.

![alt text](https://zebrazoom.org/img/roboflow1.png)

Click on "Start Annotating".

![alt text](https://zebrazoom.org/img/roboflow2.png)

With the cursor on your screen **(1)**, select rectangles englobing animals you'd like to track in the image. Do NOT draw anything else than rectangles (no polygons, etc...), ONLY RECTANGLES (if animals overlap each other, draw overlapping rectangles). You can zoom in the image if necessary. The rectangles must absolutely englobe the full body of the animal. However, it is NOT a concern to set rectangles a bit "too large" (englobing the animal plus some extra background pixels), what's important is to avoid defining rectangles which would be "too small" (not englobing pixels belonging to the animal).

Whenever possible, try to draw rectangles around all animals in the images. However, if an image contains a large number of animals, it's perfectly fine to miss many of them.

Once you've finished annotating an image, move on to the next image with the right arrow on the top of the screen **(2)**.

Once you're done annotating images (you don't need to annotate all images all at once), click on the left arrow **(3)**.

NB: Each image you pass through will be considered as having been annotated. If you wish to mark it as unannotated, click on the button **(4)** then choose "Mark Unannotated".

![alt text](https://zebrazoom.org/img/roboflow3.png)

**Important**: It will all depend on the complexity of the video(s) you want to track, but in many cases, labeling as few as ~50 animals on ~50 different images (sometimes even less) may be enough. However, you should make sure that all the images you label look as different as possible to each other. As written above, each image you pass through will be considered as having been annotated. So if subsequent images look too similar to each other, it may sometimes be better to go back to the list of images (red arrow 3 above) and then selecting another image to label from the list to avoid annotating subsequent images that look too similar to each other.



### Creating a dataset

Once you've labeled enough images, click on "Add N images to Dataset".

![alt text](https://zebrazoom.org/img/dataset1.png)

Keep the default "Split Images Between Train/Valid/Test" method and click on "Add images".

Then click on the "Dataset" tab on the left and then on "+ Generate Version".

![alt text](https://zebrazoom.org/img/dataset2.png)

For "Preprocessing", don't add any "Preprocessing steps" and instead directly click on "Continue".

![alt text](https://zebrazoom.org/img/dataset3.png)

In most cases, you should however add some augmentation steps.

![alt text](https://zebrazoom.org/img/dataset4.png)

Choose the "Flip" both "Horizontal" and "Vertical", then the "90 degrees rotate" ("Clockwise", "Counter-Clockwise" and "Upside Down". Adding some noise may also often be useful.

Then click on "Continue".

![alt text](https://zebrazoom.org/img/dataset5.png)

Finally click "Create" (don't change the "Maximum version size").

This may take a few seconds or minutes.

Then click on "Download Dataset".

![alt text](https://zebrazoom.org/img/dataset6.png)

Choose YOLOv11 and "Show download code" and click "Continue".

![alt text](https://zebrazoom.org/img/dataset7.png)

Finally, copy the download code, paste it on a text editor on your computer, and click "Done".

![alt text](https://zebrazoom.org/img/dataset7.png)


## Training a deep learning based model on Google Colab

First open this [Google Colab notebook](https://colab.research.google.com/gist/oliviermirat/6d629f277187754e3481f0de4cb71be7/zebrazoomyolov11training.ipynb)

You may need to log in to a Google account.

First click on "Change runtype type".

![alt text](https://zebrazoom.org/img/googleColab0.png)

Then click on "T4 GPU" (or on any other GPU type).

![alt text](https://zebrazoom.org/img/googleColab0_2.png)

Then click on "Connect".

![alt text](https://zebrazoom.org/img/googleColab0_3.png)

Paste and replace the download code (that you got from the previous section) into the second cell, in order to replace all the "xxxxxxxxxxxxx" by values which will allow you to download the data on Roboflow into Google Colab.

Now launch all cells of the Google Colab notebook.

By default, the network used is set to yolo11n.pt and this is usually a good place to start. However, later on, you can also experiment with using [other networks](https://docs.ultralytics.com/models/yolo11/#performance-metrics) that may sometime offer higher accuracy but slower speed.

Running the last cell will download a .pt file on your computer, which we will need for the next final step.

If everything worked on the first try you can launch this last cell as is. However, if you had to launch the training (seventh cell) several times before it worked, you would need to add a number in the code **(3)** corresponding to the training run number which you can find in **(2)**.

![alt text](https://zebrazoom.org/img/googleColab5.png)

If you want to do data augmentation through Google Colab / Ultralytics instead of through Roboflow (which may be useful to bypass Roboflow's limitations on dataset size) you can use this [Google Colab notebook](https://colab.research.google.com/gist/oliviermirat/bcd45165eff0e7d891f42afc775690b4/zebrazoomyolov11training.ipynb). Available data augmentations techniques can be found here: [data augmentations techniques](https://docs.ultralytics.com/modes/train/#augmentation-settings-and-hyperparameters). Furthermore, if no data augmentation are made through Roboflow (which might be better) dataset size can be increased either [without rotations](https://github.com/oliviermirat/ZebraZoom/blob/master/DLrelatedFiles/googleColab_increaseTrainingDataSetWithCopies.py) or [with rotations](https://github.com/oliviermirat/ZebraZoom/blob/master/DLrelatedFiles/googleColab_increaseTrainingDataSetWithRotatedCopies.py).

NB: More advanced scripts (not immediately necessary, for advanced users only, try it only later): if you want to test the impact of different training dataset and YOLO model sizes, you can try using these scripts: [Google Colab notebook](https://colab.research.google.com/gist/oliviermirat/1e98aef3b6f99a76ab00e9a3dbd9fb75/zebrazoomyolov11training_testtrainingdatasetsize.ipynb), [Plotting results](https://github.com/oliviermirat/ZebraZoom/blob/master/DLrelatedFiles/testDifferentTrainingSetAndModelSizes.py), [Plotting results with error bars](https://github.com/oliviermirat/ZebraZoom/blob/master/DLrelatedFiles/testDifferentTrainingSetAndModelSizes_errorBars.py).

## Running the tracking with ZebraZoom on your computer (no need for GPUs)

First install ZebraZoom <a href="/docs/gettingStarted/installation" target="_blank">ZebraZoom installation guide</a>.

Then download the [configuration file](https://github.com/oliviermirat/ZebraZoom/blob/master/DLrelatedFiles/YOLO_centerOfMassTracking.json).

Open ZebraZoom and click on "Open configuration file folder".

![alt text](https://zebrazoom.org/img/YOLO_ZZ_1.png)

This will open a folder named "configuration". Place the [configuration file](https://github.com/oliviermirat/ZebraZoom/blob/master/DLrelatedFiles/YOLO_centerOfMassTracking.json) you've just downloaded as well as the .pt file that was downloaded on your computer in the previous section in that "configuration" folder.

Then open the [configuration file](https://github.com/oliviermirat/ZebraZoom/blob/master/DLrelatedFiles/YOLO_centerOfMassTracking.json) in a text editor.
- First change the parameter "nbAnimalsPerWell" to the maximum number of animals present all at once in a frame of the video.
- If you would like bouts of movements to be detected, change the parameter "coordinatesOnlyBoutDetectionMinDistDataAPI" from 0 to a value strictly superior to 0, for example 5 (as is done [here](https://github.com/oliviermirat/ZebraZoom/blob/master/DLrelatedFiles/YOLO_centerOfMassTracking_boutDetect.json). The lower the value of "coordinatesOnlyBoutDetectionMinDistDataAPI", the more sensitive the bout detection will be.
- Finally, in some cases, you will need to replace the value of "DLmodelPath" in order for it to contain the full path to the .pt file. For example, you may in some cases need to replace the "model_crossPlatform_compatible.pt" by something like "C:\Users\username\Desktop\ZebraZoom\zebrazoom\configuration\model_crossPlatform_compatible.pt". However, importantly, this won't be necessary in most cases! So to begin, keep this as is, and only change it later on if you see that it can't find the .pt model while running the tracking.

Now launch the tracking using that configuration file as you normally would.

![alt text](https://zebrazoom.org/img/YOLO_ZZ_2.png)

And then verify the results also as you normally would.

![alt text](https://zebrazoom.org/img/YOLO_ZZ_3.png)

If you have any questions or experience any issues with this method, please don't hesitate to contact us at: info@zebrazoom.org

