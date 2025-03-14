import {action, KeyDownEvent, SingletonAction} from "@elgato/streamdeck";
import WebSocket from 'ws';

@action({UUID: "tv.timekeepersena.vnyan-plugin.message"})
export class SimpleWebsocketMessage extends SingletonAction<SimpleWebsocketMessageSettings>
{
    override onKeyDown(ev: KeyDownEvent<SimpleWebsocketMessageSettings>): Promise<void> | void
    {
        const {settings} = ev.payload;

        var ws = new WebSocket('ws://localhost:8000/vnyan');
        ws.on('open', () => ws.send(settings.message));
    }
}

type SimpleWebsocketMessageSettings = {
    message: string,
};