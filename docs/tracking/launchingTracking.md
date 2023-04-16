---
sidebar_position: 1
---

# Launching ZebraZoom's tracking

## Launching the tracking through the GUI

The easiest way to launch the tracking of ZebraZoom is to open the GUI (with "python -m zebrazoom") and then to follow the instructions in the GUI to launch the tracking.

## Launching the tracking through the command line

You can also use ZebraZoom through the command line. To do this, you will have to open Anaconda Prompt or a terminal and type:

```
python -m zebrazoom pathToVideo nameOfVideo extensionOfVideo pathToConfigFile
```

For example, you could type:

```
python -m zebrazoom c:\Users\mirat\Desktop\trackingVideos\ video1 avi c:\Users\mirat\Desktop\configuration\config.json
```

Warning: depending on the operating system you're using, you may need to replace the "\\"s by "/"s.

Using ZebraZoom through the command line can be particularly useful when you want to analyze a lot of videos located in different folders, or if you want to launch ZebraZoom on a server instead of on a desktop computer.

If you need to generate a script that will launch ZebraZoom on multiple videos that are all present inside a same folder, using the same configuration file, you can take a look at this script.

Finally, it's possible to overwrite the parameters present in the configuration file with the following command:

```
python -m zebrazoom pathToVideo nameOfVideo extensionOfVideo pathToConfigFile nameOfParameter1 newParameter1Value nameOfParameter2 newParameter2Value nameOfParameter3 newParameter3Value
```

(it's possible to add as many or as few parameters as needed)

By default, GUI features are not available from the command line, since GUI isn't available on some machines (e.g. clusters, remote machines). Tracking which requires further user input (e.g. ROI or tail coordinates selection) will not work unless the required inputs were already specified or --use-gui is used. For example:

```
python -m zebrazoom pathToVideo nameOfVideo extensionOfVideo pathToConfigFile nameOfParameter1 newParameter1Value nameOfParameter2 newParameter2Value nameOfParameter3 newParameter3Value --use-gui
```
