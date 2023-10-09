import { Activity, CardFactory, MessageFactory, TurnContext } from "botbuilder";
import {
  CommandMessage,
  TeamsFxBotCommandHandler,
  TriggerPatterns,
} from "@microsoft/teamsfx";
import { AdaptiveCards } from "@microsoft/adaptivecards-tools";
/* import fetch, {
  Blob,
  blobFrom,
  blobFromSync,
  File,
  fileFrom,
  fileFromSync,
  FormData,
  Headers,
  Request,
  Response,
} from "node-fetch"; */
import('node-fetch');
import apodCard from "./adaptiveCards/apodCommand.json";
import { IApod, APODKEY, APODURL } from "./internal/global";
/* import { Headers, Response } from "node-fetch";
import { resourceLimits } from "worker_threads"; */

/**
 * The `apodLiveCommandHandler` registers a pattern with the `TeamsFxBotCommandHandler` and responds
 * with an Adaptive Card if the user types the `triggerPatterns`.
 */
export class ApodLiveCommandHandler implements TeamsFxBotCommandHandler {
  triggerPatterns: TriggerPatterns = "live";

  async handleCommandReceived(
    context: TurnContext,
    message: CommandMessage
  ): Promise<string | Partial<Activity> | void> {
    console.log(`App received message: ${message.text}`);

    //let cardData: IApod = {} as IApod;
    const fetch = require('node-fetch');
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const response = await fetch(
      APODURL.replace("[[KEY]]", APODKEY),
      requestOptions
    );
    const result = await response.json();
    const cardJson = AdaptiveCards.declare(apodCard).render(result as IApod);
    return MessageFactory.attachment(CardFactory.adaptiveCard(cardJson));
  }

  /*
      console.log('fetch.request', request);
      const resultRaw = await fetch(request);
      console.log('fetch.resultRaw', resultRaw);
      const result = await resultRaw.json();
      console.log('fetch.result', result);
      const cardJson = AdaptiveCards.declare(apoCard).render(result as IApod);
      */
  /* const headers: Headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");
    console.log("Headers", headers); */

  //let request: RequestInfo;
  /* try{
      request = new Request(
        APODURL.replace("[[KEY]]", APODKEY),
        {
          method: "GET",
          headers: headers,
        }
      );
    }
    catch (e) {
      console.log("Request.Error", e);
    } */
  /* console.log("Request.Object", request);
    const rawResult = await fetch(request)
    console.log("RAW result", rawResult);
    const result = await rawResult.json  ();
    console.log("JSON result", result); */

  // Render your adaptive card for reply message
  //const cardJson = AdaptiveCards.declare(apodCard).render(result as IApod);
  //const cardJson = AdaptiveCards.declare(apodCard).render(cardData);
  //return MessageFactory.attachment(CardFactory.adaptiveCard(cardJson));
}
