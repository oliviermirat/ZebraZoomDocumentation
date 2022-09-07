---
sidebar_position: 2
---

# Adding flags to bouts

After clicking on "Visualize ZebraZoom's output" and then on the name of a video, you will have the ability to flag bouts that you think should be ignored in your analysis (or conversely you can also decide to flag bouts of interest): this system can be useful when further post-processing the outputs of ZebraZoom with Python.
When you click on "Flag" it will add a field "flag" inside the json result structure (saved in the results_videoName.txt file) and it will set that flag to 1 (then clicking on "Unflag" will set that "flag" field to 0), and clicking on save SuperStruct will actually save those flags into the file (if you don't click on save superstruct before exiting, the flags won't be saved). 

# Creating subvideos of flagged bouts

Subvideos showing only the flagged bouts can be created using the command line:

python -m zebrazoom createSmallValidationVideosForFlagged pathToResultsFolder marginBeforeAndAfter

A subvideo showing only the well in which the bout has occurred will be created for each flagged bout. Each subvideo will start marginBeforeAndAfter frames before the start of the bout and end marginBeforeAndAfter frames after the end of the bout.
