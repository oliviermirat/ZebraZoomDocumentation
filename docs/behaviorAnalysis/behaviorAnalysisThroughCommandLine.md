---
sidebar_position: 3
---

# Behavior analysis through the command line

## Kinematic parameters analysis through the command line instead of from the GUI

To launch from the command line, the same kinematic parameters analysis than what's available from the GUI, you can use the following command:

python -m zebrazoom dataPostProcessing kinematicParametersAnalysis pathToExcelFile frameStepForDistanceCalculation minimumNumberOfBendsPerBout keepSpeedDistDurWhenLowNbBends thresholdInDegreesBetweenSfsAndTurns tailAngleKinematicParameterCalculation saveRawDataInAllBoutsSuperStructure saveAllBoutsSuperStructuresInMatlabFormat

while putting the parameters:

- pathToExcelFile: to the path to the excel file describing your experiment (the combination of several videos and what they correspond to)

- frameStepForDistanceCalculation (OPTIONAL): to calculate the distance travelled for each bout, in order to avoid the noise caused by subsequent close-by (x, y) coordinates of the center of the head of the animal, the (x, y) coordinates to calculate the total distance are not taken for every frame of the bout, but rather for every 'frameStepForDistanceCalculation' frame in the bout. The default value is 4, which is the same default value as when accessed from the GUI.

- minimumNumberOfBendsPerBout (OPTIONAL): the minimum number of bends that a bout must have in order for the parameters related to the tail tracking (such as number of oscillations, tail beat frequency, maximum bend amplitude, etc...) to be calculated for that bout and included in the analysis (this is for fish only). The default is -1 here (meaning all bouts will be kept), the default value in the GUI is 3.

- keepSpeedDistDurWhenLowNbBends (OPTIONAL): when a bout is removed from the analysis because it has a low amount of bends, then the parameters distance, duration, speed and IBI are kept in the analysis if keepSpeedDistDurWhenLowNbBends is set to 1, and they are discarded otherwise. If the distance, duration, speed and IBI parameters are kept then the parameters related to the tail tracking (such as number of oscillations, tail beat frequency, maximum bend amplitude, etc...) are set to nan for those bouts.

- thresholdInDegreesBetweenSfsAndTurns (OPTIONAL): threshold (unit in degrees) to separate a sfs from a turn (this is also for fish only). If set to -1 (default value) this won't be calculated.

- tailAngleKinematicParameterCalculation (OPTIONAL): set to 1 for all kinematic parameters related to tail tracking of fish to be calculated (number of oscillation, tail beat frequency, etc...). Set to 0 otherwise. Default is 1.

- saveRawDataInAllBoutsSuperStructure (OPTIONAL): the output result structure is always saved in the pickle format. In order to also save it in the matlab format, set this parameter to 1. Set to 0 otherwise. Default is 1.

- saveAllBoutsSuperStructuresInMatlabFormat (OPTIONAL): set to 1 to save the original raw data inside the result structure. Default is 1.

- forcePandasDfRecreation (OPTIONAL): set to 1 if you want to recalculate all kinematic parameter from the raw data, even if they had been previously calculated during the execution of the tracking (see [kinematic parameters speed optimization](./optimizingSpeedOfFinalAnalysis)). Otherwise set to 0, which is the default value.

Please note that the parameters minimumNumberOfBendsPerBout, keepSpeedDistDurWhenLowNbBends and thresholdInDegreesBetweenSfsAndTurns are all optional parameters. Therefore, if you don't put anything for:

- minimumNumberOfBendsPerBout and keepSpeedDistDurWhenLowNbBends then the parameters number of oscillations, tail beat frequency and max tail amplitude (all these parameters or for fish only) won't be calculated

- thresholdInDegreesBetweenSfsAndTurns then no information about the amount of turns and sfs based on a threshold over the max tail amplitude will be calculated

- tailAngleKinematicParameterCalculation, saveRawDataInAllBoutsSuperStructure and saveAllBoutsSuperStructuresInMatlabFormat, then those three parameters will all be set to the value 1

- forcePandasDfRecreation will be set to 0

## Clustering analysis (for zebrafish only) through the command line instead of from the GUI

To launch from the command line, the same clustering analysis than what's available from the GUI, you can use the following command:

python -m zebrazoom dataPostProcessing clusteringAnalysis pathToExcelFile freelySwimming nbClustersToFind minNbBendForBoutDetect modelUsedForClustering removeOutliers

while putting the parameters:

- pathToExcelFile: to the path to the excel file describing your experiment (the combination of several videos and what they correspond to)

- freelySwimming (OPTIONAL): set to 1 for freely swimming fish, and to 0 for head-embedded fish. If you don't put anything for this parameter, it will be set to 1 by default.

- nbClustersToFind (OPTIONAL): set to the number of clusters that you want the clustering algorithm to find. If you don't put anything for this parameter, it will be set to 3 by default.

- minNbBendForBoutDetect (OPTIONAL): minimum number of bends a bout must have in order to be taken into account for the clustering, it will be set to 3 by default.

- modelUsedForClustering (OPTIONAL): default is 'KMeans', can also be set to 'GaussianMixture'.

- removeOutliers (OPTIONAL): default is False, can also be set to True. The removal of outliers is performed before the clustering analysis.

## Clustering analysis per frame (for zebrafish only) through the command line

This can be done with the command:

python -m zebrazoom dataPostProcessing clusteringAnalysisPerFrame pathToExcelFile freelySwimming nbClustersToFind

while putting the parameters:

- pathToExcelFile: to the path to the excel file describing your experiment (the combination of several videos and what they correspond to)

- freelySwimming (OPTIONAL): set to 1 for freely swimming fish, and to 0 for head-embedded fish. If you don't put anything for this parameter, it will be set to 1 by default.

- nbClustersToFind (OPTIONAL): set to the number of clusters that you want the clustering algorithm to find. If you don't put anything for this parameter, it will be set to 3 by default.

After running the command above, open ZebraZoom's GUI and navigate to 'Analyze ZebraZoom's outputs' -> 'View previous clustering analysis results' -> 'View plots and processed data folder' and then double-click on the name of the excel file with which you ran the previous command. In this folder you will find a file called classifications.xlsx which contains the classifications for each frame and each animals. You can then use this [script to visualize these classifications](https://github.com/oliviermirat/ZebraZoom/blob/master/readAndAnalyzeZZoutputWithPython/analyzeClusteringPerFrame.py).


