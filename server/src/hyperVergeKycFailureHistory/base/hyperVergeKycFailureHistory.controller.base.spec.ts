import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { HyperVergeKycFailureHistoryController } from "../hyperVergeKycFailureHistory.controller";
import { HyperVergeKycFailureHistoryService } from "../hyperVergeKycFailureHistory.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  customerId: 42,
  id: "exampleId",
  httpStatusCode: 42,
  errorCode: 42,
  createdAt: new Date(),
  updatedAt: new Date(),
  errorMessage: "exampleErrorMessage",
};
const CREATE_RESULT = {
  customerId: 42,
  id: "exampleId",
  httpStatusCode: 42,
  errorCode: 42,
  createdAt: new Date(),
  updatedAt: new Date(),
  errorMessage: "exampleErrorMessage",
};
const FIND_MANY_RESULT = [
  {
    customerId: 42,
    id: "exampleId",
    httpStatusCode: 42,
    errorCode: 42,
    createdAt: new Date(),
    updatedAt: new Date(),
    errorMessage: "exampleErrorMessage",
  },
];
const FIND_ONE_RESULT = {
  customerId: 42,
  id: "exampleId",
  httpStatusCode: 42,
  errorCode: 42,
  createdAt: new Date(),
  updatedAt: new Date(),
  errorMessage: "exampleErrorMessage",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("HyperVergeKycFailureHistory", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: HyperVergeKycFailureHistoryService,
          useValue: service,
        },
      ],
      controllers: [HyperVergeKycFailureHistoryController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /hyperVergeKycFailureHistories", async () => {
    await request(app.getHttpServer())
      .post("/hyperVergeKycFailureHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /hyperVergeKycFailureHistories", async () => {
    await request(app.getHttpServer())
      .get("/hyperVergeKycFailureHistories")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /hyperVergeKycFailureHistories/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/hyperVergeKycFailureHistories"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /hyperVergeKycFailureHistories/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/hyperVergeKycFailureHistories"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /hyperVergeKycFailureHistories existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/hyperVergeKycFailureHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/hyperVergeKycFailureHistories")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
