import { Request, Response } from "express";
import { GetLastThreeMessages } from "../services/GetLastThreeMessages";

class GetLastThreeMessagesController {
  async handle(request: Request, response: Response) {
    const service = new GetLastThreeMessages();

    const result = await service.execute();

    return response.json(result);
  }
}

export { GetLastThreeMessagesController };
