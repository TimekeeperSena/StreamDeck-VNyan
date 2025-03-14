# VNyan Plugin for Stream Deck
A plugin to facilitate controlling the 3D VTuber software VNyan with your Stream Deck

## Configuration
This plugin's core functionality is sending WebSocket messages to VNyan, so **make sure you have the WebSocket server enabled in Settings.**
You'll also want to configure some node graph nodes, so that the WebSocket messages actually do things.

## The advantage
I got a Stream Deck today (14/03/2025). I wasn't satisfied with using WebSocket requests for Stream Deck buttons, so I made this as a real dedicated solution.

- No configuring the WebSocket URL manually (it's built for VNyan so it should Just Work™)
- Instant response on pressing the button, no delay or lag of any kind
- Many different types of trigger, each good for different things (use momentaries for expressions, for instance)

## Notes
I'm still new to the Stream Deck SDK, so a bunch of this could be improved. The code for this will be improved as time goes on!

VNyan is by Suvidriel. Code and graphics included in this plugin, VNyan logo aside, created by Timekeeper Sena. This plugin's source code is released to you freely under the unencumbered MIT license. It'd be nice if you could tell me if you use this, [shoot me a message on Bluesky!](https://bsky.app/profile/timekeepersena.tv)
