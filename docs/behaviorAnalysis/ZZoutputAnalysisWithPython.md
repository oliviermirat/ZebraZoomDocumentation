---
sidebar_position: 4
---

# Further analyzing ZebraZoom's output with Python

A result folder will be created for each video you launch ZebraZoom on inside the ZZoutput folder.

If you have launch ZebraZoom on a video named “video”, you can load the results in Python with the following code:
import json
with open('ZZoutput/video/results_video.txt') as f:
  supstruct = json.load(f)

Then, you can see the data for the well numWell, the animal numAnimal, and the bout numBout using the following command: supstruct['wellPoissMouv'][numWell][numAnimal][numBout]

For example, if you want to look at the data for the first bout of the "animal 1" in the third well, you can type:
supstruct['wellPoissMouv'][2][0][0]

You can then, for example, plot the tail angle with the following command:

```
import matplotlib.pyplot as plt
plt.plot(supstruct['wellPoissMouv'][2][0][0]["TailAngle_smoothed"])
plt.show()
```

The full list of parameters available for each bout is:

```
'FishNumber' : Fish number in the well. If there's only one fish per well, this number will be 0.
'BoutStart' : Frame at which the bout started.
'BoutEnd' : Frame at which the bout ended.
'TailAngle_Raw' : Tail angle over time for the bout, without any smoothing.
'HeadX' : Position on the x axis of the center of the head of the animal, for each frame.
'HeadY' : Position on the y axis of the center of the head of the animal, for each frame.
'Heading_raw' : Value of the main angle of the head of the animal, for each frame, without any smoothing.
'Heading' : Value of the main angle of the head of the animal, for each frame, with smoothing.
'TailX_VideoReferential' : Position on the x axis of each of the points along the tail of the animal, for each frame.
'TailY_VideoReferential' : Position on the y axis of each of the points along the tail of the animal, for each frame.
'TailX_HeadingReferential' : Position on the x axis of each of the points along the tail of the animal, for each frame, when changing the referential such that the head of the animal is at the position (0, 0) and the y axis is aligned with the heading.
'TailY_HeadingReferential' : Position on the y axis of each of the points along the tail of the animal, for each frame, when changing the referential such that the head of the animal is at the position (0, 0) and the y axis is aligned with the heading.
'TailAngle_smoothed' : Tail angle over time for the bout, with smoothing.
'Bend_TimingAbsolute' : List of frames at which the tail angle reached a local maximum or minimum.
'Bend_Timing' : List of frames at which the tail angle reached a local maximum or minimum, with frame 0 being set at the beginning of the bout.
'Bend_Amplitude' : List of amplitudes of the tail angles, for each of the local maximum or minimum reached by the tail angle.
```

Here's also an [example script](https://github.com/oliviermirat/ZebraZoom/blob/master/readAndAnalyzeZZoutputWithPython/readBouts.py) used to process the outputs of ZebraZoom.

### Access flag field

From the GUI visualisation, you can [manually flag bouts](https://zebrazoom.org/documentation/docs/resultsCheck/flags). To access this information from the supstruct, you can use:

```
supstruct['wellPoissMouv'][2][0][0].get('flag')
```

It will return None if the bout was not flagged, 1 if the bout was flagged.
