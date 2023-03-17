import { KnowlarityMakeCall as TKnowlarityMakeCall } from "../api/knowlarityMakeCall/KnowlarityMakeCall";

export const KNOWLARITYMAKECALL_TITLE_FIELD = "httpStatusCode";

export const KnowlarityMakeCallTitle = (
  record: TKnowlarityMakeCall
): string => {
  return record.httpStatusCode || String(record.id);
};
