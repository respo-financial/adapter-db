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
import { KnowlarityMakeCallController } from "../knowlarityMakeCall.controller";
import { KnowlarityMakeCallService } from "../knowlarityMakeCall.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  agentId: 42,
  agentMobileNumber: 42,
  customerId: 42,
  errorCode: "exampleErrorCode",
  customerMobileNumber: 42,
  errorMessage: "exampleErrorMessage",
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  httpStatusCode: "exampleHttpStatusCode",
};
const CREATE_RESULT = {
  agentId: 42,
  agentMobileNumber: 42,
  customerId: 42,
  errorCode: "exampleErrorCode",
  customerMobileNumber: 42,
  errorMessage: "exampleErrorMessage",
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  httpStatusCode: "exampleHttpStatusCode",
};
const FIND_MANY_RESULT = [
  {
    agentId: 42,
    agentMobileNumber: 42,
    customerId: 42,
    errorCode: "exampleErrorCode",
    customerMobileNumber: 42,
    errorMessage: "exampleErrorMessage",
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    httpStatusCode: "exampleHttpStatusCode",
  },
];
const FIND_ONE_RESULT = {
  agentId: 42,
  agentMobileNumber: 42,
  customerId: 42,
  errorCode: "exampleErrorCode",
  customerMobileNumber: 42,
  errorMessage: "exampleErrorMessage",
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  httpStatusCode: "exampleHttpStatusCode",
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

describe("KnowlarityMakeCall", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: KnowlarityMakeCallService,
          useValue: service,
        },
      ],
      controllers: [KnowlarityMakeCallController],
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

  test("POST /knowlarityMakeCalls", async () => {
    await request(app.getHttpServer())
      .post("/knowlarityMakeCalls")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /knowlarityMakeCalls", async () => {
    await request(app.getHttpServer())
      .get("/knowlarityMakeCalls")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /knowlarityMakeCalls/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/knowlarityMakeCalls"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /knowlarityMakeCalls/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/knowlarityMakeCalls"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /knowlarityMakeCalls existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/knowlarityMakeCalls")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/knowlarityMakeCalls")
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
