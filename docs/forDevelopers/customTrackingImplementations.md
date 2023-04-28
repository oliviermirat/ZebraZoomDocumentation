---
sidebar_position: 1
---

# Custom tracking implementations

In order to implement custom tracking methods, several simple steps are required:
- unless it already exists, please create a folder for yourself or your organization in [custom tracking implementations folder](https://github.com/oliviermirat/ZebraZoom/tree/master/zebrazoom/code/tracking/customTrackingImplementations)
- create a new class which inherits from `zebrazoom.code.tracking.BaseTrackingMethod` and implement `__init__` and `run` methods
- call `zebrazoom.code.tracking.register_tracking_method` with a custom key which will then be used in config files to determine which tracking method to use
- if you'd like to implement some GUI functionalities, please repeat the above procedure in [custom tracking implementations GUI folder](https://github.com/oliviermirat/ZebraZoom/tree/master/zebrazoom/code/GUI/tracking/customTrackingImplementations) and implement a new class which inherits from your tracking class and implements GUI functionalities

Please note that the key used in `register_tracking_method` has to be unique, so it's highly recommended to include the name of your folder in it (e.g. `register_tracking_method('myfolder.mytrackingmethod', MyCustomClass)`). More information about the API and the expected output format can be found in the [in-code documentation](https://github.com/oliviermirat/ZebraZoom/blob/master/zebrazoom/code/tracking/_base.py). For a simple example of how to do this, please take a look at [examples](https://github.com/oliviermirat/ZebraZoom/tree/master/zebrazoom/code/tracking/customTrackingImplementations/examples).

To run tracking using the custom tracking implementation, assuming the key used in `register_tracking_method` was "myfolder.mytrackingimplementation", put **"trackingImplementation": "myfolder.mytrackingmethod"** in your config file.