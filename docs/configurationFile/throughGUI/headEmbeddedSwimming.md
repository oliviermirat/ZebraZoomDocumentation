---
sidebar_position: 4
---

# Head Embedded Swimming Fish

The head embedded fish tracking of ZebraZoom is performed by iteratively finding points along the tail of the animal, starting from the base of the tail and going towards the tip of the tail. Several parameters can be adjusted from the GUI of ZebraZoom to optimize the quality of this tracking to your specific videos.

- **Background Extraction** (named *headEmbededAutoSet_BackgroundExtractionOption* in configuration files): transforms non-background pixels to black. This can be useful when the tail isn't very different from the background.
- **Minimum number of pixels between subsequent points** (named *overwriteFirstStepValue* in configuration files): increase this parameter to avoid having the tracking points go on the head instead of the tail.
- **Maximum number of pixels between subsequent points** (named *overwriteLastStepValue* in configuration files): increase this parameter if the tail tracking is getting off track "mid-tail". Decrease if the tail tracking is going too far (further than the tip)
- **headEmbededParamTailDescentPixThreshStopOverwrite**: You should almost always ignore this parameter!
- **authorizedRelativeLengthTailEnd**: You should almost always ignore this parameter!
- ** Gaussian blur applied on the image ** (named *overwriteHeadEmbededParamGaussianBlur* in configuration files): This parameter can usually be ignored, but it can sometimes be useful to increase or decrease the amount of gaussian blur applied on the image.
