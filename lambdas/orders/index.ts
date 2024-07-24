import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  // mock process payment error
  if (event.body) {
    const eventBody = JSON.parse(event.body);

    if (eventBody.fail) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: 'Create order error',
        }),
      };
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Order created!',
    }),
  };
};
