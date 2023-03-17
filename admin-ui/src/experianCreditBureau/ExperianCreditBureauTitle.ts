import { ExperianCreditBureau as TExperianCreditBureau } from "../api/experianCreditBureau/ExperianCreditBureau";

export const EXPERIANCREDITBUREAU_TITLE_FIELD = "reqType";

export const ExperianCreditBureauTitle = (
  record: TExperianCreditBureau
): string => {
  return record.reqType || String(record.id);
};
