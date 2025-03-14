import {action, KeyDownEvent, KeyUpEvent, SingletonAction} from "@elgato/streamdeck";
import WebSocket from 'ws';

@action({UUID: "tv.timekeepersena.vnyan-plugin.message-momentary"})
export class MomentaryWebsocketMessage extends SingletonAction<MomentaryWebsocketMessageSettings>
{
    private isDown: boolean = false;

    override onKeyDown(ev: KeyDownEvent<MomentaryWebsocketMessageSettings>): Promise<void> | void
    {
        const {settings} = ev.payload;

        if (!this.isDown)
        {
            console.log('test')
            var ws = new WebSocket('ws://localhost:8000/vnyan');
            ws.on('open', () => ws.send(settings.keyDownMessage));
        }

        this.isDown = true;
    }

    override onKeyUp(ev: KeyUpEvent<MomentaryWebsocketMessageSettings>): Promise<void> | void
    {
        const {settings} = ev.payload;

        if (this.isDown)
        {
            var ws = new WebSocket('ws://localhost:8000/vnyan');
            ws.on('open', () => ws.send(settings.keyUpMessage));
        }

        this.isDown = false;
    }
}

type MomentaryWebsocketMessageSettings = {
    keyDownMessage: string,
    keyUpMessage: string,
};