---
sidebar_position: 5
---

# Tracking Freely Swimming Fish Configuration file optimization

## Solve issues near the border of the wells/tanks/arenas

The higher value you put in the box "backgroundPreProcessParameters", the more pixels will be filtered on the borders of the wells/tanks/arenas. However, putting a value that's too high can lead to adverse consequences.

## Post-process animal center trajectories

If some animals are sometimes not being detected at all no matter what, you can add some post-processing of trajectories to solve the problem. In order to do this, you will need to add the following parameters **postProcessMaxDistanceAuthorized** and **postProcessMaxDisapearanceFrames** to your configuration file:

- **postProcessMaxDistanceAuthorized** is the maximum distance accepted (in pixels) above which it is considered that an animal was detected incorrectly (and thus the trajectory post-processing will be applied)

- **postProcessMaxDisapearanceFrames** is the maximum number of frames for which the post-processing will consider that an animal can be incorrectly detected.

You also have the option of putting the parameter **postProcessMaxDistanceAuthorized** to a very high value which will have the effect of only modifying the values (x, y) for frames for which no detection occured at all.

Additionally, when adding this post-processing of trajectories, it's also usually better to also set the parameter "multipleHeadTrackingIterativelyRelaxAreaCriteria" to 0.

## Tail tracking optimization

The parameter **recalculateForegroundImageBasedOnBodyArea** can be switched back and forth from 0 (often less accurate but faster tracking) to 1 (often more accurate but slower tracking)
