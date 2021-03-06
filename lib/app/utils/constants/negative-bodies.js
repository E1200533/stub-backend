module.exports = {
  multipleScenarios: {
    errorCode: 500,
    message: 'Multiple scenarios were found :('
  },
  multipleBodiesScenarios: {
    errorCode: 500,
    message: 'Multiple bodies with the same content in the resources! :('
  },
  notFound: {
    errorCode: 404,
    message: 'Scenario not found in the resources! :('
  },
  resMissed: {
    errorCode: 500,
    message: '_res is missed in some scenario :('
  },
  reqMissed: {
    errorCode: 500,
    message: '_req is missed in some scenario :('
  },
  notRequestFound: {
    errorCode: 404,
    message: 'Request body not found in the resources! :('
  },
  badSource: {
    errorCode: 400,
    message: 'Incorrect db json format under resources :('
  }
};
