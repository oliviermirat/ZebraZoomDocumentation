---
sidebar_position: 1
---

# Adding your own tracking method to ZebraZoom: Step by step guide

## Step 1: Create a folder for your code
First, create a sub-folder in which you will put all your code, inside the folder ["custom tracking implementations"](https://github.com/oliviermirat/ZebraZoom/tree/master/zebrazoom/code/tracking/customTrackingImplementations). Please keep all of your code inside that sub-folder that you will create, do not edit or add files in any other folders.

## Step 2: Implement your tracking method

### Example of custom tracking implementation
Here is an example of a [custom tracking implementation](https://github.com/oliviermirat/ZebraZoom/tree/master/zebrazoom/code/tracking/customTrackingImplementations/examples) and of an associated [configuration file](https://github.com/oliviermirat/ZebraZoom/tree/master/zebrazoom/configuration/customTrackingImplementationExample.json) that illustrates the points outlined below.

### Inherit `zebrazoom.code.tracking.BaseTrackingMethod`
In a file inside the folder you created in the previous step, create a new class which inherits from `zebrazoom.code.tracking.BaseTrackingMethod`. Implement the `__init__` and `run` methods inside this class. When launched, the `run` method should do all the necessary calculations for tracking and movement/bout detection. 

More information about the API and the expected output format can be found in the [in-code documentation](https://github.com/oliviermirat/ZebraZoom/blob/master/zebrazoom/code/tracking/_base.py). 

A validation video and a result file will be generated automatically by ZebraZoom based on the tracking data calculated in your `run` method.

### Register your tracking implementation
To register your newly implemented tracking method, call `zebrazoom.code.tracking.register_tracking_method` with a custom key which will then be used in config files to determine which tracking method to use. Please note that this key has to be unique, so it's highly recommended to include the name of your folder in it (e.g. `register_tracking_method('myfolder.mytrackingmethod', MyCustomClass)`). 

In [custom tracking implementation](https://github.com/oliviermirat/ZebraZoom/tree/master/zebrazoom/code/tracking/customTrackingImplementations/examples), this is for instance done in the last line of the file, with: 
```
zebrazoom.code.tracking.register_tracking_method('examples.exampleTrackingMethod', ExampleTrackingMethod)
```

### Create configuration files
In order to adjust values of various parameters used in calculations, ZebraZoom relies on configuration files which are formatted as a single json dict of arbitrary key-value pairs. These pairs are then passed on to your tracking implementation inside the hyperparameters argument, where you can access them. To run the tracking using the custom tracking implementation, your configuration file must contain the "trackingImplementation" key, which specifies which tracking implementation to use. In addition to this key, you can specify as many parameters as required for your custom tracking implementation.

For example, assuming the key used in `register_tracking_method` was "examples.exampleTrackingMethod", your config file could look something like:
```
{
"trackingImplementation": "examples.exampleTrackingMethod",
"myparameter": "myvalue",
"myparameter2": 1
}
```

### Choosing a wells detection method
An already implemented wells detection method should be chosen and re-used in custom tracking implementations. Here's a list of wells detection methods available:

#### Whole video
To skip well detection and run tracking on the whole video, put "noWellDetection": 1 in your configuration file.
```
"noWellDetection": 1
```

#### Grid system
To use the grid system, put "groupOfMultipleSameSizeAndShapeEquallySpacedWells": 1 in your configuration file. Additionally, you also have to specify the number of wells per row ("nbWellsPerRows") and the number of rows in the grid ("nbRowsOfWells"). The grid will then be specified by the user at runtime.

For instance, in the example [configuration file](https://github.com/oliviermirat/ZebraZoom/tree/master/zebrazoom/configuration/customTrackingImplementationExample.json), four parameters have been added:
```
  "groupOfMultipleSameSizeAndShapeEquallySpacedWells": 1,
  "nbRowsOfWells": 1, 
  "nbWellsPerRows": 4, 
```

#### Multiple regions of interest chosen at runtime
To use multiple regions of interest chosen at runtime, put "multipleROIsDefinedDuringExecution": 1 in your config file. Additionally, you also have to specify the number of regions of interests ("nbWells"). These will be selected by the user at runtime. For example, these parameters could be added to the configuration file:
```
  "multipleROIsDefinedDuringExecution": 1,
  "nbWells": 4, 
```

#### One region of interest fixed in the configuration file
To use one region of interest fixed in the configuration file, put "oneWellManuallyChosenTopLeft": [x, y] and "oneWellManuallyChosenBottomRight": [x, y] where x and y are top left/bottom right coordinates of the region of interest. For example, these parameters could be added to the configuration file:
```
  "oneWellManuallyChosenTopLeft": [100, 110],
  "oneWellManuallyChosenBottomRight": [340, 320],
```

### Bends (local min/max of tail angle) detection
If your custom tracking implementation is calculating the tail angle of the animal then if you want the bends (local minimum and maximum of the tail angle) to be calculated, then you must set the parameter ```"windowForLocalBendMinMaxFind"``` in your configuration file to the window used (over frames) for calculation of these bends. [More information here.](/docs/configurationFile/advanced/angleSmoothBoutsAndBendsDetection#parameters-related-to-the-detection-of-bends-local-minimums-and-maximums-of-the-tail-angle)

### Debugging tip 1: Frame visualization
While working on your new tracking algorithm, it may be useful to visualize frames/images for debugging purposes. This can be done with:
```
import zebrazoom.code.util as util
util.showFrame(frame, title="write title here")
```
Please note that `showFrame` uses GUI, and it's okay to add this temporarily for debugging while developing, but if you intend to keep this in your code after submitting it to ZebraZoom, please put it in the GUI part of the code.

### Debugging tip 2: Launching tracking through command line with --use-gui:
While working on your custom tracking implementation, it should be easier to launch ZebraZoom through the [command line](/docs/tracking/launchingTracking#launching-the-tracking-through-the-command-line). If you are using any GUI feature, please make sure to add `--use-gui` at the end of the command.

### Advanced (and optional): Implement GUI functionalities
If you'd like to implement some GUI functionalities, please repeat the first step in [custom tracking implementations GUI folder](https://github.com/oliviermirat/ZebraZoom/tree/master/zebrazoom/code/GUI/tracking/customTrackingImplementations) and implement a new class which inherits from your tracking class and implements GUI functionalities. `register_tracking_method` should then be called again using the same key as your non-GUI class.

## Step 3: Merge changes into ZebraZoom repository
Once your own tracking implementation works and you are ready to share it with the public, please create a new [pull request](https://github.com/oliviermirat/ZebraZoom/pulls). Pushing directly to the master branch is not allowed.

