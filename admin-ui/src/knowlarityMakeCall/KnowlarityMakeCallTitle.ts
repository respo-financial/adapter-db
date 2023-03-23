import { KnowlarityMakeCall as TKnowlarityMakeCall } from "../api/knowlarityMakeCall/KnowlarityMakeCall";

export const KNOWLARITYMAKECALL_TITLE_FIELD = "errorCode";

export const KnowlarityMakeCallTitle = (
  record: TKnowlarityMakeCall
): string => {
  return record.errorCode || String(record.id);
};
