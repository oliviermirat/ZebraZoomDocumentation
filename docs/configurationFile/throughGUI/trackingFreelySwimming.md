---
sidebar_position: 3
---

# Tracking Freely Swimming Fish

The freely swimming fish tracking of ZebraZoom can rely on three different background extraction methods:

- **Method 1**: the background extraction is based on a simple threshold on pixel intensity. This method is the fastest.

- **Method 2**: the background extraction threshold is automatically chosen on the entire well in order for the fish body area to be close to a predefined area. This method is slower than the first method but is often more accurate.

- **Method 3**: the background extraction threshold is automatically chosen on a ROI centered on the fish in order for the fish body area to be close to a predefined area. This method is the slowest but often the most accurate.

It is usually advised to choose the method 3, but there are many circumstances in which method 1 or 2 are better.

From ZebraZoom's GUI, you can adjust the parameters that determine which of the three previous methods ZebraZoom will use to extract the background. More precisely, you can adjust:

- **recalculateForegroundImageBasedOnBodyArea**: Set to 1 for Method 3 and to 0 for Method 1 or 2

- **adjustMinPixelDiffForBackExtract_nbBlackPixelsMax**: Set to 0 for Method 1. For method 2 and 3: increase if the tip of the tail is detected too soon, decrease if the tracking looks messy.
  
- **minPixelDiffForBackExtract**: For method 1: decrease if the tip of the tail is detected too soon, increase if the tracking looks messy