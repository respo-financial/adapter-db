import { ExperianCreditBureau as TExperianCreditBureau } from "../api/experianCreditBureau/ExperianCreditBureau";

export const EXPERIANCREDITBUREAU_TITLE_FIELD = "errorCode";

export const ExperianCreditBureauTitle = (
  record: TExperianCreditBureau
): string => {
  return record.errorCode || String(record.id);
};
