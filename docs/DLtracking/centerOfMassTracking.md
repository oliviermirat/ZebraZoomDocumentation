---
sidebar_position: 1
---

# Tracking the center of mass of any kind of animal with ZebraZoom's deep learning based tracking



**WARNING: This tutorial is under construction. Please contact us at info@zebrazoom.org for more information!**

## Create a training dataset on RoboFlow

### Uploading images

Work in progress

### Labeling images

First click on the "Annotate" tab on the left hand side of the screen **(1)**. Then select an annotating job **(2)**.

![alt text](https://zebrazoom.org/img/roboflow1.png)

Click on "Start Annotating".

![alt text](https://zebrazoom.org/img/roboflow2.png)

With the cursor on your screen **(1)**, select rectangles englobing animals you'd like to track in the image. You can zoom in the image if necessary. The rectangles must absolutely englobe the full body of the animal. However, it is NOT a concern to set rectangles a bit "too large" (englobing the animal plus some extra background pixels), what's important is to avoid defining rectangles which would be "too small" (not englobing pixels belonging to the animal).

Whenever possible, try to draw rectangles around all animals in the images. However, if an image contains a large number of animals, it's perfectly fine to miss many of them.

Once you've finished annotating an image, move on to the next image with the right arrow on the top of the screen **(2)**.

Once you're done annotating images (you don't need to annotate all images all at once), click on the left arrow **(3)**.

NB: Each image you pass through will be considered as having been annotated. If you wish to mark it as unannotated, click on the button **(4)** then choose "Mark Unannotated".

![alt text](https://zebrazoom.org/img/roboflow3.png)


### Creating a dataset

Work in progress

## Training a deep learning based model on Google Colab

Work in progress

## Running the tracking with ZebraZoom on your computer (no need for GPUs)

Work in progress
