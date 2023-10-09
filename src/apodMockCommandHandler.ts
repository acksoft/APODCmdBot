import { Activity, CardFactory, MessageFactory, TurnContext } from "botbuilder";
import { CommandMessage, TeamsFxBotCommandHandler, TriggerPatterns } from "@microsoft/teamsfx";
import { AdaptiveCards } from "@microsoft/adaptivecards-tools";
import apodCard from "./adaptiveCards/apodCommand.json";
import { mockData, IApod } from "./internal/global";

/**
 * The `apodMockCommandHandler` registers a pattern with the `TeamsFxBotCommandHandler` and responds
 * with an Adaptive Card if the user types the `triggerPatterns`.
 */
export class ApodMockCommandHandler implements TeamsFxBotCommandHandler {
  triggerPatterns: TriggerPatterns = "mock";

  async handleCommandReceived(
    context: TurnContext,
    message: CommandMessage
  ): Promise<string | Partial<Activity> | void> {
    console.log(`App received message: ${message.text}`);

    // Render your adaptive card for reply message
    const cardData: IApod = mockData;

    const cardJson = AdaptiveCards.declare(apodCard).render(cardData);
    return MessageFactory.attachment(CardFactory.adaptiveCard(cardJson));
  }
}
