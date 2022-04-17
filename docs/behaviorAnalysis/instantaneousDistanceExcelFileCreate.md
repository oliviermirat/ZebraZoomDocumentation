---
sidebar_position: 8
---

# Generate an excel file containing the distance travelled between each frame

This can be done with the command:

```
python -m zebrazoom createDistanceBetweenFramesExcelFile fps pixelSize
```

Where:

- **fps**: needs to be replace by the fps value. If no value is specified for this parameter, then the fps will automatically be set to the value 1.

- **pixelSize**: needs to be replace by the pixel value. If no value is specified for this parameter, then the pixelSize will automatically be set to the value 1.

As suggested above, you can thus try this function simply by typing "*python -m zebrazoom createDistanceBetweenFramesExcelFile*" (the fps and pixelSize will just automatically be set to the value 1).

Once you launch this command, you will be prompted to choose the result folder corresponding to the video for which you want the excel file containing the distance travelled between each frame to be generated. This excel file will be generated inside the result folder you specified.
