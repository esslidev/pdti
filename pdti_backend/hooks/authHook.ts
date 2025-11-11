import { FastifyRequest, FastifyReply } from "fastify";
import { handleError } from "../core/utils/errorHandler";
import { errorResponse } from "../core/resources/response/localizedResponse";
import { HttpErrorResponse } from "../core/resources/response/httpErrorResponse";
import { ErrorHttpStatusCode } from "../core/enums/responses/responseStatusCode";
import { ResponseLanguage } from "../core/enums/responses/responseLanguage";
import { getHeaderValue } from "../core/utils/headerValueGetter";

const envApiKey = process.env.API_SECRET_KEY;

export async function integrationAuthHook(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const language = getHeaderValue(
    request.headers,
    "language",
    ResponseLanguage.ARABIC
  )!;
  const apiKey = request.headers["apikey"];

  try {
    if (!apiKey) {
      throw new HttpErrorResponse(
        ErrorHttpStatusCode.UNAUTHORIZED,
        errorResponse(language).errorTitle.LACK_OF_CREDENTIALS,
        errorResponse(language).errorMessage.LACK_OF_CREDENTIALS
      );
    }

    if (apiKey !== envApiKey) {
      throw new HttpErrorResponse(
        ErrorHttpStatusCode.UNAUTHORIZED,
        errorResponse(language).errorTitle.INVALID_CREDENTIALS,
        errorResponse(language).errorMessage.INVALID_CREDENTIALS
      );
    }
  } catch (error) {
    return handleError(error, reply, ResponseLanguage.ARABIC);
  }
}
