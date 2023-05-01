---
sidebar_position: 1
---

# Custom tracking implementations

## Step 1: Your own folder in ZebraZoom repository
Unless it already exists, please create a folder for yourself or your organization in [custom tracking implementations folder](https://github.com/oliviermirat/ZebraZoom/tree/master/zebrazoom/code/tracking/customTrackingImplementations). Please keep all of your code inside this folder.

## Step 2: Implement your tracking method
In one of the files inside your folder from step 1, create a new class which inherits from `zebrazoom.code.tracking.BaseTrackingMethod` and implement `__init__` and `run` methods and does all the necessary calculations. More information about the API and the expected output format can be found in the [in-code documentation](https://github.com/oliviermirat/ZebraZoom/blob/master/zebrazoom/code/tracking/_base.py). Validation video and the results file will be generated automatically by ZebraZoom based on the points calculated in your `run` method.

## Step 3: Register your tracking implementation
To register your newly implemented tracking method, call `zebrazoom.code.tracking.register_tracking_method` with a custom key which will then be used in config files to determine which tracking method to use. Please note that this key has to be unique, so it's highly recommended to include the name of your folder in it (e.g. `register_tracking_method('myfolder.mytrackingmethod', MyCustomClass)`).

## Step 4 (optional): Implement GUI functionalities
If you'd like to implement some GUI functionalities, please repeat the first step in [custom tracking implementations GUI folder](https://github.com/oliviermirat/ZebraZoom/tree/master/zebrazoom/code/GUI/tracking/customTrackingImplementations) and implement a new class which inherits from your tracking class and implements GUI functionalities. `register_tracking_method` should then be called again using the same key as your non-GUI class.

## Step 5: Create config file
In order to adjust values of various parameters used in calculations, ZebraZoom relies on config files which are formatted as a single json dict of arbitrary key-value pairs. These pairs are then passed on to your tracking implementation inside the hyperparameters argument, where you can access them. To run tracking using the custom tracking implementation, your config file must contain "trackingImplementation" key, which specifies which tracking implementation to use. In addition to this one, feel free to specify as many parameters as you require for your tracking implementation.

For example, assuming the key used in `register_tracking_method` was "myfolder.mytrackingimplementation", your config file could look something like this:
```
{
"trackingImplementation": "myfolder.mytrackingmethod",
"myparameter": "myvalue",
"myparameter2": 1
}
```

## Step 6: Merge changes into ZebraZoom repository
Once your own tracking implementation works and you are ready to share it with the public, please create a new [pull request](https://github.com/oliviermirat/ZebraZoom/pulls). Pushing directly to master branch is not allowed.

## Examples
For a simple example of a custom tracking implementation, please take a look at [examples](https://github.com/oliviermirat/ZebraZoom/tree/master/zebrazoom/code/tracking/customTrackingImplementations/examples).
