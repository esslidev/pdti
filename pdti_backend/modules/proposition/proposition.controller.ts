import { FastifyRequest, FastifyReply } from "fastify";
import { ResponseLanguage } from "../../core/enums/responses/responseLanguage";
import { HttpErrorResponse } from "../../core/resources/response/httpErrorResponse";
import {
  errorResponse,
  successResponse,
} from "../../core/resources/response/localizedResponse";
import {
  ErrorHttpStatusCode,
  SuccessHttpStatusCode,
} from "../../core/enums/responses/responseStatusCode";
import { handleError } from "../../core/utils/errorHandler";
import { getHeaderValue } from "../../core/utils/headerValueGetter";

// SEND Proposition
const sendProposition = async (
  request: FastifyRequest<{
    Body: {
      AxisGivenId: string;
      firstName: string;
      lastName: string;
      email?: string;
      proposition: string;
    };
  }>,
  reply: FastifyReply
) => {
  const language = getHeaderValue(
    request.headers,
    "language",
    ResponseLanguage.ARABIC
  )!;

  const { AxisGivenId, firstName, lastName, email, proposition } = request.body;
  try {
    if (!AxisGivenId || !firstName || !lastName || !proposition) {
      throw new HttpErrorResponse(
        ErrorHttpStatusCode.BAD_REQUEST,
        errorResponse(language).errorTitle.INVALID_REQUEST,
        errorResponse(language).errorMessage.INVALID_REQUEST
      );
    }

    const axis = await request.server.prisma.axis.findUnique({
      where: { givenId: AxisGivenId },
    });

    if (!axis) {
      throw new HttpErrorResponse(
        ErrorHttpStatusCode.NOT_FOUND,
        errorResponse(language).errorTitle.NOT_FOUND,
        errorResponse(language).errorMessage.NOT_FOUND
      );
    }

    await request.server.prisma.$transaction(async (tx) => {
      const visitor = await tx.visitor.create({
        data: { firstName, lastName, email },
      });

      const newProposition = await tx.proposition.create({
        data: {
          axisId: axis.id,
          visitorId: visitor.id,
          proposition,
        },
      });

      return { visitor, newProposition };
    });

    return reply.status(SuccessHttpStatusCode.CREATED).send({
      response: {
        statusCode: SuccessHttpStatusCode.CREATED,
        title: successResponse(language).successTitle.PROPOSITION_CREATED,
        message: successResponse(language).successTitle.PROPOSITION_CREATED,
      },
    });
  } catch (error) {
    return handleError(error, reply, language);
  }
};

export default {
  sendProposition,
};
