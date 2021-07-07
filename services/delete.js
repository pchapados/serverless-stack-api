import handler from '../libs/handler-lib';
import dynamoDb from '../libs/dynamodb-lib';

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    // 'Key' defines the partition and the sort key of the item to be retrieved
    Key: {
      userId: '123',
      noteId: event.pathParameters.id,
    },
  };

  await dynamoDb.delete(params);
  // Return the retrieved item
  return { status: true };
});
