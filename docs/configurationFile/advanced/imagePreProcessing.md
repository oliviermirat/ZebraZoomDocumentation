---
sidebar_position: 5
---

# Images pre-processing 


## Video images pre-processing before tracking:

It can sometimes be useful to preprocess the frames of the video before starting the tracking. The two parameters below can be used to this end:

"imagePreProcessMethod" (default 0): set it to a list of preprocessing methods you want to apply on all images before the tracking is performed on them. You can see the preprocessing methods available (and potentially add some more methods if necessary) in this file: [preprocessImage.py](https://github.com/oliviermirat/ZebraZoom/blob/master/zebrazoom/code/preprocessImage.py). For example, you could set this parameter to ["medianAndMinimum", "findNonGrayScalePixels"], in which case the "medianAndMinimum" filter will first be applied, followed by the "findNonGrayScalePixels" filter. By default (0), no preprocessing will be applied.

"imagePreProcessParameters" (default []): parameters of the previously specified preprocessing methods used. If you are using image preprocessing methods, you must set the parameters of the preprocessing methods here. For example, if you set "imagePreProcessMethod" to ["medianAndMinimum", "findNonGrayScalePixels"], you could then, for example, set "imagePreProcessParameters" to [[51], []].

## Post-processing of the background extracted:

"backgroundPreProcessMethod" (default 0): same as "imagePreProcessMethod", except this will specify a list of post-processing methods to be applied on the background of the video, after it has been extracted.

"backgroundPreProcessParameters" (default []): same as "imagePreProcessParameters", except this specifies the values of the parameters specified in "backgroundPreProcessMethod".