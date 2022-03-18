export async function isNewUser(token) {
  const operationsDoc = `
  query MyQuery {
    users(where: {issuer: {_eq: "did:ethr:0xE8cF8eC324eebf1d1AE2ebDD450b7C1306dcbe02"}}) {
      id
      email
      issuer
    }
  }
`;
  const response = await queryHasuraGQL(operationsDoc, "MyQuery", {}, token);
  console.log({ response });
  return response?.users?.length === 0;
}

async function queryHasuraGQL(operationsDoc, operationName, variables, token) {
  const result = await fetch(process.env.NEXT_PUBLIC_HASURA_ADMIN_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}

function fetchMyQuery() {
  return queryHasuraGQL(
    operationsDoc,
    "MyQuery",
    {},
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJkaWQ6ZXRocjoweEU4Y0Y4ZUMzMjRlZWJmMWQxQUUyZWJERDQ1MGI3QzEzMDZkY2JlMDIiLCJwdWJsaWNBZGRyZXNzIjoiMHhFOGNGOGVDMzI0ZWViZjFkMUFFMmViREQ0NTBiN0MxMzA2ZGNiZTAyIiwiZW1haWwiOiJiZjgyNzIwOEBnbWFpbC5jb20iLCJpYXQiOjE2NDc2MzAxOTMsImV4cCI6MTY0ODIzNDk5MywiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtdXNlci1pZCI6ImRpZDpldGhyOjB4RThjRjhlQzMyNGVlYmYxZDFBRTJlYkRENDUwYjdDMTMwNmRjYmUwMiJ9fQ.OPC5eP_VssGA1riJpo2n92L-iaw1J0PAtdja2P9FknA"
  );
}

export async function startFetchMyQuery() {
  const { errors, data } = await fetchMyQuery();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}
