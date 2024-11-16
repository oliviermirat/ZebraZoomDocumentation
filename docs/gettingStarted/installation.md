---
sidebar_position: 1
---

# Installation

## Using installers (recommended method)

### On Windows

[Download Windows Installer](https://github.com/oliviermirat/ZebraZoom/releases/latest/download/ZebraZoom-Windows.exe)

When presented with the "Windows protected your PC" popup, click on "More info" and then "Run anyway". Once the installer starts, follow the instructions to complete the installation.

![alt text](https://zebrazoom.org/img/windowsProtected1.png)

![alt text](https://zebrazoom.org/img/windowsProtected2.png)

### On Mac

[Download and install the Mac Installer](https://github.com/oliviermirat/ZebraZoom/releases/latest/download/ZebraZoom-macOS.zip) and extract it to the desired folder.
                
Open a terminal

![alt text](https://zebrazoom.org/img/anacondaMac.png)

Execute the following command

```
sudo spctl --master-disable
```

Enter your admin password when prompted.

This step is necessary to enable running apps downloaded from anywhere on your machine.
                
To run Zebrazoom, go to the folder where ZebraZoom was extracted and double click on ZebraZoomApp.

### On Linux

[Download the Linux zip folder](https://github.com/oliviermirat/ZebraZoom/releases/latest/download/ZebraZoom-Linux.zip) and extract it to the desired folder. 

To run ZebraZoom, open a console in that folder and type 

```
./ZebraZoom
```             

### Test videos

Use these videos to test ZebraZoom:

Download the videos below and try ZebraZoom with those videos using the corresponding configuration files (each video and configuration file have the same name):

[4wellsZebrafishLarvaeEscapeResponses](https://drive.google.com/open?id=1y00yli9XbcJlzFSbJgnVAM9yDvCWNCb2)

[headEmbeddedZebrafishLarva](https://drive.google.com/open?id=1ERVQZvTzBD69jUEjBOTA9BvH4gOdwC7N)

[fliesInTube](https://drive.google.com/open?id=1idVATQhIz7eryw3jAE7wTdMS3ccaTIN5)


## General Method

Download and install [Anaconda](https://www.anaconda.com/products/individual) (scroll down to the bottom of that web page or click on the "Download button" on the top of that page). You may skip this step if you already have python 3.9 or higher installed on your computer.

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

## Further recommendations for installation with the general method

If you are going to use Anaconda extensively to install packages other than ZebraZoom or you ran into some issues installing with the general method, it can be a good idea to create a clean Anaconda Environment just for ZebraZoom.

To do this, first create an environment:

```
conda create -n zebrazoom python==3.12 --no-default-packages
```

Then activate the newly created environment:

```
conda activate zebrazoom
```

Then install zebrazoom as explained in the previous section ("General method").

```
pip install zebrazoom
```

To start ZebraZoom, you can now open the Anaconda Prompt or a terminal and type:

```
conda activate zebrazoom
python -m zebrazoom
```

[Read this for more information on Anaconda environments](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html)


## Troubleshooting installation with the general method

If `pip install zebrazoom` fails, please ensure you are using a recent version of Python and try updating some base packages before installing zebrazoom by running the following:

```
python -m pip install pip setuptools wheel --upgrade
pip install zebrazoom
```

If that doesn't help, please try installing ZebraZoom using a clean new Python installation, by downloading and installing the latest version of [Anaconda] (https://www.anaconda.com/download) or [the official Python interpreter] (https://www.python.org/downloads/) and following the steps outlined in "General method" section.

If you are using Anaconda, you could also try using a clean environment, as suggested in the previous section ("Further recommendations for installation with the general method").