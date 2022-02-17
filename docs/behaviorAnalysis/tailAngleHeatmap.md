---
sidebar_position: 7
---

# Calculating tail angle heatmap

You can make ZebraZoom compute tail angle heatmaps for each bout detected by adding the parameter:
"tailAnglesHeatMap" : 1
in your configuration file.

This calculation can be based on 2 to 9 points along the tail of the animal. By default, 8 points will be taken into account, but this parameter can be adjusted by changing the value of "tailAnglesHeatMapNbPointsToTakeIntoAccount" in the configuration file (default is 8).
