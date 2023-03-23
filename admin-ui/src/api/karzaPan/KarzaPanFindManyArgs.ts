import { KarzaPanWhereInput } from "./KarzaPanWhereInput";
import { KarzaPanOrderByInput } from "./KarzaPanOrderByInput";

export type KarzaPanFindManyArgs = {
  where?: KarzaPanWhereInput;
  orderBy?: Array<KarzaPanOrderByInput>;
  skip?: number;
  take?: number;
};
