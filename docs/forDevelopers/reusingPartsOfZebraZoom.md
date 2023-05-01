---
sidebar_position: 2
---

# Reusing parts of ZebraZoom

## Reusing parts of ZebraZoom's tracking implementations
Most of the ZebraZoom tracking code is split into various mixin classes, each containing methods related to specific parts of tracking algorithms (e.g. [`GetBackgroundMixin`](https://github.com/oliviermirat/ZebraZoom/blob/master/zebrazoom/code/tracking/_getBackground.py), [`CenterOfMassTailTrackingMixin`](https://github.com/oliviermirat/ZebraZoom/blob/master/zebrazoom/code/tracking/_centerOfMassTailTracking.py), [`ComputeHeadingMixin`](https://github.com/oliviermirat/ZebraZoom/blob/master/zebrazoom/code/tracking/_computeHeading.py) etc.). If you'd like to reuse some of those functionalities, your tracking class should inherit `zebrazoom.code.tracking.BaseZebraZoomTrackingMethod` and any other mixins you intend to use. Please bear in mind that mixins provided by ZebraZoom will expect your class to have certain instance variables (e.g. _hyperparameters, _videoPath, _wellPositions etc.) and it is up to you to set them before calling methods implemented in mixins. A full list of the required instance variables for each mixin can be inferred from the code. Mixins can be found in files in [tracking folder](https://github.com/oliviermirat/ZebraZoom/tree/master/zebrazoom/code/tracking/). If you want to, you can also reimplement some of the methods provided by mixins.

## Examples
All ZebraZoom tracking implementations ([fasterMultiprocessing](https://github.com/oliviermirat/ZebraZoom/blob/master/zebrazoom/code/tracking/fasterMultiprocessing.py), [fasterMultiprocessing2](https://github.com/oliviermirat/ZebraZoom/blob/master/zebrazoom/code/tracking/fasterMultiprocessing2.py), [tracking](https://github.com/oliviermirat/ZebraZoom/blob/master/zebrazoom/code/tracking/tracking.py)) already make use of this, and can serve as examples.
