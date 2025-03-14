import streamDeck, { LogLevel } from "@elgato/streamdeck";

import { SimpleWebsocketMessage } from "./actions/SimpleWebsocketMessage";
import { MomentaryWebsocketMessage } from "./actions/MomentaryWebsocketMessage";
import { LatchedWebsocketMessage } from "./actions/LatchedWebsocketMessage";

// Turn on trace log level. We're not really gonna be printing much though
streamDeck.logger.setLevel(LogLevel.TRACE);

// Register our actions.
streamDeck.actions.registerAction(new SimpleWebsocketMessage());
streamDeck.actions.registerAction(new MomentaryWebsocketMessage());
streamDeck.actions.registerAction(new LatchedWebsocketMessage());

// Finally, connect to the Stream Deck.
streamDeck.connect();
