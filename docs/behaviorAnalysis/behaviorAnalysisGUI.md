---
sidebar_position: 1
---

# Behavior analysis through the GUI

Click on "Analyze ZebraZoom's outputs" in the main menu. Then you can choose to either compare different populations of animals with kinematic parameters or to cluster bouts of movements.

## Kinematic parameters

In addition to the descriptions provided below, it is also possible to directly read the code used for the calculation of the kinematic parameters [on this page of the github repository](https://github.com/oliviermirat/ZebraZoom/blob/master/zebrazoom/dataAnalysis/datasetcreation/getGlobalParameters.py). 

Importantly, when the tail of a fish is tracked, local minimums and maximums are calculated for the tail angle (each local minimum and maximum is called a "bend"): some parameters (such as the TBF) are calculated with two different methods (one method with the bends and one without).

The following parameters are calculated for each bout of a video:

- Bout Duration (s): duration of the bout

- Bout Distance (mm): distance travelled by the animal during the bout

- Bout Speed (mm/s): average speed of the animal during the bout

- Max TBF (Hz): maximum tail beat frequency during the bout: calculated by using the list of bends detected (bends = local min/max of tail angle)

- Mean TBF (Hz): mean tail beat frequency of the bout: calculated by using the list of bends detected (bends = local min/max of tail angle)

- medianOfInstantaneousTBF: median tail beat frequency (in Hz) of the bout: calculated by using the list of bends detected (bends = local min/max of tail angle)

- Max absolute TBA (deg.): maximum of the absolute value of tail angle values at bends location (bends = local min/max of tail angle)

- maxBendAmplitudeSigned: maximum of all tail angle values at bends location (bends = local min/max of tail angle) (no absolute value used here)

- Mean absolute TBA (deg.): mean of the absolute value of tail angle values at bends location (bends = local min/max of tail angle)

- Median absolute TBA (deg.): median of the absolute value of tail angle values at bends location (bends = local min/max of tail angle)

- medianBendAmplitudeSigned: median of all tail angle values at bends location (bends = local min/max of tail angle) (no absolute value used here)

- Number of Oscillations: number of oscillation detected: calculated by dividing the number fo bends detected (bends = local min/max of tail angle) by 2

- meanTBF: mean tail beat frequency (in Hz): calculated by dividing the number of oscillation detected by the bout duration

- maxTailAngleAmplitude: maximum value of the tail angle for all frames included in the bout (no bends taken into accont here)

- Absolute Yaw (deg): difference in the head direction axis between the start and end of the bout (in absolute value)

- Signed Yaw (deg): difference in the head direction axis between the start and end of the bout (directional)

- Absolute Yaw (deg) (from heading): difference in the head direction axis between the start and end of the bout (in absolute value) (calculated from heading)

- Signed Yaw (deg) (from heading): difference in the head direction axis between the start and end of the bout (directional) (calculated from heading)

- headingRangeValues: width of the range of values taken by the head direction axis over that bout (calculated from heading)

- TBA#1 timing (s): time at which the first bend occured

- TBA#1 Amplitude (deg): absolute value of the tail angle amplitude for the frame corresponding to the first bend

- firstBendAmplitudeSigned: tail angle amplitude for the frame corresponding to the first bend (no absolute value here)

- IBI (s): time ellapsed between the end of the previous bout and the beginning of the current bout (for the same animal)

- xmean: mean position on the x axis during the bout

- ymean: mean position on the y axis during the bout

- binaryClass25degMaxTailAngle: =0 if maxAmplitude <= 25 degrees, = 1 otherwise

- tailAngleIntegralSigned: sum of all tail angles values for each frame of the bout (in degrees) (no absolute value used here)

- BoutFrameNumberStart: Frame number on which the bout started: units in "frames"

- tailAngleSymmetry: 
= - (min(-TailAngle) / max(-TailAngle)) if maxTailAngle > 0 else 1

So:
      # = 1 if perfect symmetry OR if tail angle staying constant and always at 0
      # = 0 if tail beating only on one side, starting from the 0 position
      # < 0 but > -1 if tail beating only on one side, starting from the side it's beating (not from 0)

- secondBendAmpDividedByFirst: amplitude of the second bend divided by the amplitude of the first bend (no unit)

- tailAngleIntegral: sum of the absolute value of all tail angles values for each frame of the bout (in degrees)

- maxInstantaneousSpeed: maximum of all instantaneous speeds for all frames of the bout; an instantaneous speed being defined as the speed the animal travelled from frame n to frame n+1 (in mm/s)

The following parameters are caculated for each animal of a video:

- percentTimeSpentSwimming: percentage of time over an entire video during which a bout was occuring (= the animal was moving)

- Bout Counts: total number of bouts performed by the animal

- Bout Rate (bouts/s): total number of bouts performed by the animal divided by the duration of the video


## Reloading and plotting the data once the analysis is done

After running the analysis to compare different populations of animals with kinematic parameters, it is possible to reload and replot the results, for example by using this script: [reload and plot example](https://github.com/oliviermirat/ZebraZoom/blob/master/readAndAnalyzeZZoutputWithPython/reloadKinematicDataAndPlotIt.py).

## Units of output parameters for comparaison of populations with kinematic parameters:

When the results are first saved after the tracking (in the file results_videoName.txt in the subfolder ZZoutput/videoName) the units are simply in pixels (for spatial resolution) and frames (for time resolution). However, when using the option "Analyze ZebraZoom's outputs" from the main menu of the GUI, you will need to choose an "organization excel file". This "organization excel file" contains a column named "fq" and another column named "pixelsize". In the column "pixelsize" you must put the size of the pixels in your video and you can choose the unit for this value of pixel size (it could be in μm, mm, cm, m, etc...): this choice will then be reflected in the units of speed and distance travel calculated: for example if you choose mm for the pixel size, then the distance traveled calculated will also be in mm. Similarly, in the column "fq" you must put the frequency of acquisition of the video: if you put this unit in Hz (1/second) then the time unit for the duration and speed calculated will be in seconds; and if you decided to put in this column a frequency of acquisition in 1/minute, then the time unit for duration and speed will also be in minutes.
