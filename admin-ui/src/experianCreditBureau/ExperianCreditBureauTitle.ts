import { ExperianCreditBureau as TExperianCreditBureau } from "../api/experianCreditBureau/ExperianCreditBureau";


export const EXPERIANCREDITBUREAU_TITLE_FIELD = "httpStatusCode";

export const ExperianCreditBureauTitle = (
  record: TExperianCreditBureau
): string => {
  return record.httpStatusCode || String(record.id);
};
