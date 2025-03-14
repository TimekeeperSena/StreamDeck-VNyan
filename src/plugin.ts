import streamDeck, { LogLevel } from "@elgato/streamdeck";

import { SimpleWebsocketMessage } from "./actions/SimpleWebsocketMessage";
import { MomentaryWebsocketMessage } from "./actions/MomentaryWebsocketMessage";
import { LatchedWebsocketMessage } from "./actions/LatchedWebsocketMessage";

// We can enable "trace" logging so that all messages between the Stream Deck, and the plugin are recorded. When storing sensitive information
streamDeck.logger.setLevel(LogLevel.TRACE);

// Register the increment action.
streamDeck.actions.registerAction(new SimpleWebsocketMessage());
streamDeck.actions.registerAction(new MomentaryWebsocketMessage());
streamDeck.actions.registerAction(new LatchedWebsocketMessage());

// Finally, connect to the Stream Deck.
streamDeck.connect();
