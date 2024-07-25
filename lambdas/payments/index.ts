import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  let eventBody = null;
  if (event.body) {
    eventBody = JSON.parse(event.body);

    if (eventBody.failProcessPayment) {
      throw new Error('Payments process error');
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      ...eventBody,
      message: 'Payment successfully processed!',
    }),
  };
};
