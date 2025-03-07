# Wam-Sampler

## Description

A Virtual Musical Instrument writing in JavaScript and running in a browser. You can trigger sounds (drum samples, piano notes...) by clicking on the pads or press the corresponding keyboard key. Each pad can be switched with others by drag and drop. You can switch from pages to pages in a selected dumkit.
You can also save and load your project.

You can rename any samples by double-clicking on its name above the waveform.

It supports MIDI keyboards and the MIDI routing can be configured manually by right-clicking on a pad.
You can manually save your current configuration (samples pads location, effects and MIDI bindings) into a preset in the local storage. By default, several factory presets are available in the preset list.

It supports a connection to a piano roll to design drum patterns.

## Usage

WAM-Sampler is part of the WAM (Web Audio Modules) instruments and effects community : https://github.com/webaudiomodules

It aims to be used in musical online environments or playgrounds that accepts the WAMs configuration, like [SequencerParty](https://sequencer.party/) or [Wam-studio](https://github.com/Brotherta/wam-studio).

### Effects

Each effect is independent of the others and affects only the currently selected sample.
On the waveform, you can select the start and end points of the sample by moving the right or left cursor.

## Run Locally

The easiest solution is to use the live server extension on vs code and to run it locally.

1. Clone the repo
2. Install live server extension
3. Right click on index.html and click on "Open with live server"