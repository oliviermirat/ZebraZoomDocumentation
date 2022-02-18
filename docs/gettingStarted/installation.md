---
sidebar_position: 1
---

# Installation

## General Method

Download and install [Anaconda](https://www.anaconda.com/products/individual) (scroll down to the bottom of that web page or click on the "Download button" on the top of that page). You may skip this step if you already have python 3.6 or higher installed on your computer.

Restart your computer.

Open the "Anaconda Prompt" or any other terminal.

Type:

```
pip install zebrazoom
```

That's it! ZebraZoom is now installed on your computer!

If you want to upgrade to the latest release of ZebraZoom later on, you can type:

```
pip install zebrazoom --upgrade
```

To start ZebraZoom, you can now open the Anaconda Prompt or a terminal and type:

```
python -m zebrazoom
```

## Further recommendations for installation with the general method:

If and only if you are going to use Anaconda extensively to install packages other than ZebraZoom, it can be a good idea to create an Anaconda Environment just for ZebraZoom.

To do this, first create an environment:

```
conda create -n zebrazoom
```

Then activate the newly created environment:

```
conda activate zebrazoom
```

Then install zebrazoom as explained in the previous section ("General method").

To start ZebraZoom, you can now open the Anaconda Prompt or a terminal and type:

```
conda activate zebrazoom
python -m zebrazoom
```

[Read this for more information on Anaconda environments](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html)
