type ValidationFailed = {
  succeed: false;
  error: string;
}

type ValidationSucceed = {
  succeed: true;
}

type ValidationStatus = ValidationFailed | ValidationSucceed;

export default ValidationStatus;
