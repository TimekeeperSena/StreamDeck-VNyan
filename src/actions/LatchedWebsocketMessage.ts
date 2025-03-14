import {action, KeyDownEvent, SingletonAction, WillAppearEvent} from "@elgato/streamdeck";
import WebSocket from 'ws';

@action({UUID: "tv.timekeepersena.vnyan-plugin.message-latched"})
export class LatchedWebsocketMessage extends SingletonAction<LatchedWebsocketMessageSettings>
{
    private state: boolean = false;

    override onKeyDown(ev: KeyDownEvent<LatchedWebsocketMessageSettings>): Promise<void> | void
    {
        const {settings} = ev.payload;

        this.state = !this.state;
        var ws = new WebSocket('ws://localhost:8000/vnyan');
        ws.on('open', () => ws.send(this.state ? settings.messageRising : settings.messageFalling));

        ev.action.setState(this.state ? 1 : 0);
    }
}

type LatchedWebsocketMessageSettings = {
    messageRising: string,
    messageFalling: string,
};